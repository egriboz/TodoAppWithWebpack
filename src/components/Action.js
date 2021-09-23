import React from "react";

class Action extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: ""
    };
  }
  onFormSubmit(e) {
    e.preventDefault();

    const item = e.target.elements.txtItem.value.trim();
    const error = this.props.addItem(item);
    this.setState({
      error: error
    });
    e.target.elements.txtItem.value = "";
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input type="text" name="txtItem" 
          class="form-control" 
          placeholder="Item name" 
          aria-label="Item name" 
          aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button
              type="submit" className="btn btn-outline-secondary"        
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Action