import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../actions/index';
import { ItemTypes } from '../constants';
import { DropTarget } from 'react-dnd';

import TaskListHeader from '../components/task-list-header';
import TaskItem from '../components/task-item';


const taskTarget = {
  drop(props, monitor) {
    props.toggleTodo(monitor.getItem().id, props.type);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class TaskList extends Component {
  renderTasks(filteredTasks) {
    return filteredTasks.map((task) => {
      return (
        <TaskItem task={task} key={task.name} />
      )
    });
  }

  render() {
    const { connectDropTarget, isOver } = this.props;
    const filteredTasks = this.props.tasks.filter((task) => task.status === this.props.type);
    return connectDropTarget(
      <div className="col-md-4 task-list" style={{
        position: 'relative'
      }}>
        <TaskListHeader taskType={this.props.type} />
        <ul className="list-group">
          {this.renderTasks(filteredTasks)}
        </ul>
        {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 15,
            height: '100%',
            width: '93%',
            zIndex: 1,
            opacity: 0.8,
            backgroundColor: '#ACD676'
          }} />
        }
      </div>
    );
  }
}

TaskList.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleTodo: toggleTodo }, dispatch);
}

TaskList = DropTarget(ItemTypes.TASK, taskTarget, collect)(TaskList);

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
