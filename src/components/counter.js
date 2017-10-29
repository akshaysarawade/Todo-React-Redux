import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  getTaskCount(type) {
    const tasks = type ? this.props.tasks.filter((task) => task.status === type) : this.props.tasks;
    return tasks.length;
  }

  render() {
    return (
      <div className="task-counter">
        <div className="count">{this.getTaskCount(this.props.type)}</div>
        <div className="task-text">tasks</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(Counter);
