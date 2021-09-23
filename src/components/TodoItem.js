import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem() {
    this.props.deleteItem(this.props.item);
  }
  render() {
    return (
      <li>
        {this.props.item}
        <button
          onClick={this.deleteItem}
        >
          x
        </button>
      </li>
    );
  }
}

export default TodoItem