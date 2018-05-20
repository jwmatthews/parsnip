import React from 'react';
import { DropTarget } from 'react-dnd';
import Task from './Task';

const taskTarget = {
  drop(props, monitor, component) {
    console.log('taskTarget.drop invoked with \n\t' + JSON.stringify(props));
    return props;
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const TaskList = props => {
  const { connectDropTarget, isOver } = props;
  return connectDropTarget(
    <div className="task-list">
      <div className="task-list-title">
        <strong>{props.status}</strong>
      </div>
      {props.tasks.map(task => (
        <Task key={task.id} task={task} onUpdateTask={props.onUpdateTask} />
      ))}
    </div>
  );
};

export default DropTarget('TASK', taskTarget, collect)(TaskList);
