import React from "react";

import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, index) => (
            <TodoItem
              deleteItem={this.props.deleteItem}
              key={index}
              item={item}
            />
          ))}
        </ul>
        {/*
        <p>
          <button
            onClick={this.props.clearItems}
            className="w-32 py-1 font-semibold text-white bg-red-500"
          >
            Clear Items
          </button>
        </p>
        */}
      </div>
    );
  }
}

export default TodoList