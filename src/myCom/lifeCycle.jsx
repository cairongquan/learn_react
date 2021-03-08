import react from "react";

export class LifeCycle extends react.Component {
  constructor(props) {
    super(props); //调用react.Component 构造函数
  }
  state = {
    msg: "HelloWorld",
  };

  componentWillMount() {
    this.setState({
      msg: "Good",
    });
  }
  render() {
    return <div> {this.state.msg}</div>;
  }
}
