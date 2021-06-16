import react from "react";
import "./todoList.css";

export class TodoList extends react.Component {
  state = {
    inputTaskName: "", //输入任务名称
    taskArray: [], //任务列表
  };

  keyDownEvent(e) {
    //回车键事件
    if (e.key === "Enter") {
      this.setState((preState) => {
        preState.taskArray[preState.taskArray.length] = {
          taskName: this.state.inputTaskName,
          state: false,
        };
        return {
          taskArray: preState.taskArray,
          inputTaskName: "",
        };
      });
    }
  }

  checkBoxEvent(index, e) {
    //   checkbox点击事件
    this.setState((preState) => {
      preState.taskArray[index].state = e.target.checked;
      return {
        taskArray: preState.taskArray,
      };
    });
  }
  changeInputEvent(e) {
    //监听输入框输入事件 赋值
    this.setState(() => ({ inputTaskName: e.target.value }));
  }

  delTask(index) {
    this.setState((preState) => {
      preState.taskArray.splice(index, 1);
      return {
        taskArray: preState.taskArray,
      };
    });
  }

  selectAllEvent(e) {
    //全选事件
    this.setState((preState) => {
      return {
        taskArray: preState.taskArray.map((item) => {
          item.state = e.target.checked;
          return item;
        }),
      };
    });
  }

  clearCheckedTask() {
    //清空完成任务
    this.setState((preState) => {
      return {
        taskArray: preState.taskArray.filter((item) => {
          return !item.state;
        }),
      };
    });
  }

  createList() {
    //创建ToDoList Dom
    return this.state.taskArray.map((item, index) => {
      return (
        <div className="body-item-box item" key={index}>
          <input
            checked={item.state}
            type="checkBox"
            onChange={this.checkBoxEvent.bind(this, index)}
            style={{ marginRight: "10px" }}
          />
          {item.taskName}
          <div className="delBtn" onClick={this.delTask.bind(this, index)}>
            删除
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div id="main-out-box">
        <div className="main-show-box">
          <div className="main-show-box-title">React TodoList</div>
          <div className="taskNameBox">
            <span>TaskName:</span>
            <input
              value={this.state.inputTaskName}
              onChange={this.changeInputEvent.bind(this)}
              onKeyDown={this.keyDownEvent.bind(this)}
              type="text"
              className="inputBox"
              placeholder="请输入任务名称，按回车确认"
            />
          </div>

          <div className="body-box">
            {this.createList()}
            <div className="body-item-box">
              <span>
                {this.state.taskArray.length +
                  "总数/" +
                  this.state.taskArray.filter((item) => item.state).length +
                  "已完成"}
              </span>
            </div>
          </div>
          <div className="tool-box">
            <input type="checkbox" onClick={this.selectAllEvent.bind(this)} />
            <span>全选</span>
            <div
              className="clearTask"
              onClick={this.clearCheckedTask.bind(this)}
            >
              清除完成任务
            </div>
          </div>
        </div>
      </div>
    );
  }
}
