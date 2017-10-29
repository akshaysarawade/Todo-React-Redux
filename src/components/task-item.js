import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from '../constants';
import { DragSource } from 'react-dnd';

const taskSource = {
  beginDrag(props) {
    return props.task;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class TaskItem extends Component {
  render() {

    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <li  className="list-group-item" style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}>
        {this.props.task.name}
      </li>
    );
  }
}

TaskItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.TASK, taskSource, collect)(TaskItem);
