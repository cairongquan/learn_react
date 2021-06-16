import react from "react";
import {Test} from "./text";
import axios from "axios";
import "./index.css";

export class Counter extends react.Component {
    state = {
        count: 0,
        imageArray: [
            {
                id: 1,
                path: require("./1.jpg"),
            },
            {
                id: 2,
                path: require("./2.jpg"),
            },
        ],
    };

    onAdd() {
        //加法处理事件
        this.setState({
            count: this.state.count + 1,
        });
    }

    onSub() {
        //减法处理事件
        this.setState({
            count: this.state.count - 1,
        });
    }

    con() {
        console.log(1);
    }

    render() {
        return (
            <div className={"mainOutBox"}>
                <Test index={this.state.count} name={"张三"}></Test>
                {this.state.imageArray.map((item, index) => {
                    return (
                        <img
                            src={item.path}
                            key={item.id}
                            alt={"图片"}
                            style={{display: index === this.state.count ? "block" : "none"}}
                        />
                    );
                })}
                <button onClick={this.onAdd.bind(this)}>下一张</button>
                <button onClick={this.onSub.bind(this)}>上一张</button>
            </div>
        );
    }

    // 生命周期函数
    async componentDidMount() {
        const {data: res} = await axios.post(
            "https://api.apiopen.top/getWangYiNews"
        );
        console.log(res);
        console.log("组件挂载完成");
    }
}
