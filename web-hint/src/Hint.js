import React, { Component } from 'react';

class Hint extends Component {
  render() {
    return (
      <div className="Hint">
      {this.props.name}
      </div>
    );
  }
}

export default Hint;
