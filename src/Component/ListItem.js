/*import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
        value: '',
        list: ['HomePage', 'Portfolio', 'Skills'],
    };
  }
  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };
  onAddItem = () => {
​    this.setState(state => {
      const list = state.list.concat(state.value);
      return {
        list,
        value: '',
      };
    });
  };
  onClearArray = () => {
    this.setState({ list: [] });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        //<input
          //type="text"
          //value={this.state.value}
          //onChange={this.onChangeValue}
        ///>
        <button
          type="button"
          onClick={this.onAddItem}
          disabled={!this.state.value}
        >
          Add
        </button>
        <button type="button" onClick={this.onClearArray}>
          Clear Array
        </button>
      </div>
    );
  }
}


export default ListItem;*/

import React, {useState} from 'react'
function ListItem() {
  return <h2>About</h2>;
}

export default ListItem;
