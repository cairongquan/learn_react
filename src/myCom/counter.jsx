import react from 'react';

export class Counter extends react.Component {
    state = {
        count: 0,
    };
    onAdd() { //加法处理事件
        this.setState({
            count: this.state.count + 1
        })
    };
    onSub() { //减法处理事件
        this.setState(originalState => {
            return {
                count: originalState.count - 1,
            }
        })
    };
    con() {
        console.log(1);
    }
    render() {
        return (<div>
            <button onClick={this.onSub.bind(this)}>-</button>
            <span>{this.state.count}</span>
            <button onClick={this.onAdd.bind(this)}>+</button>
            <span>{this.state.count === 0 ? 'HelloWorld' :""}</span>
        </div>);
    }
}