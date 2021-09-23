import React from "react";

import Header from './Header';
import TodoList from './TodoList';
import Action from './Action';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.clearItems = this.clearItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      items: ["todo item 1", "todo item 2", "todo item 3", "todo item 4"]
    };
  }

  componentDidMount() {
    const json = localStorage.getItem("items");
    const items = JSON.parse(json);

    if (items) {
      this.setState({
        items: items
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      const json = JSON.stringify(this.state.items);
      localStorage.setItem("items", json);
    }
  }
  /*
  componentWillUnmount() {
    console.log("Component has been deleted.");
  }
  */
  deleteItem(item) {
    this.setState((prevState) => {
      const arr = prevState.items.filter((i) => {
        return item != i;
      });
      return {
        items: arr
      };
    });
  }

  clearItems() {
    this.setState({
      items: []
    });
  }

  addItem(item) {
    if (!item) {
      return "Enter to add.";
    } else if (this.state.items.indexOf(item) > -1) {
      return "You cannot add the same item.";
    }
    this.setState((prevState) => {
      return { items: prevState.items.concat(item) };
    });
  }

  render() {
    const app = {
      title: "Todo Application",
      description: "Passages available"
    };
    return (
      <div>
        <Header title={app.title} description={app.description} />
        <TodoList
          items={this.state.items}
          deleteItem={this.deleteItem}
          clearItems={this.clearItems}
        />
        <Action addItem={this.addItem} />
      </div>
    );
  }
}

export default TodoApp