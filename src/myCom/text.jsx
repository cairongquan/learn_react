import react from "react";

export class Test extends react.Component {
  constructor() {
    super();
  }

  render() {
    return <div>{this.props.index + "," + this.props.name}</div>;
  }
}
