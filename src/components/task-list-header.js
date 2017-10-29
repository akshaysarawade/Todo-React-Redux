import React, { Component } from 'react';
import Counter from './counter';

export default class TaskListHeader extends Component {
  render() {
    return (
      <div className="list-header">
        {this.props.taskType}
        <Counter type={this.props.taskType} />
      </div>
    );
  }
}
