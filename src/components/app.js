import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import CreateTodo from '../containers/create-todo';
import TaskList from '../containers/task-list';
import Counter from './counter';

class App extends Component {
  render() {
    return (
      <div>
        <CreateTodo />
        <div className="col-md-12 total-counter">
          <Counter />
        </div>
        <TaskList type="To do"/>
        <TaskList type="In progress"/>
        <TaskList type="Done"/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
