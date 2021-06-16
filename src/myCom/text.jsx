import react from "react";

export class Test extends react.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return <div>{this.props.index + "," + this.props.name}</div>;
  }
}
