import React from 'react';
import { DragSource } from 'react-dnd';

const taskSource = {
  beginDrag(props) {
    // Return the data describing the dragged item
    return props.task;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // When dropped on a compatible target, do something
    const task = monitor.getItem();
    const dropResult = monitor.getDropResult();
    console.log(
      'Task  endDrag, \n\ttask =' +
        JSON.stringify(task) +
        ', \n\tdropResult = ' +
        JSON.stringify(dropResult) +
        ', \n\tprops = ' +
        JSON.stringify(props)
    );

    props.onUpdateTask({ ...task, status: dropResult.status });
  }
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

const Task = props => {
  const { connectDragSource, isDragging, task } = props;
  return connectDragSource(
    <div
      className="task"
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 20,
        cursor: 'move'
      }}
    >
      <div className="task-header">
        <div>
          #{task.id} - {task.title}
        </div>
      </div>
      <hr />
      <div className="task-body">{task.description}</div>
    </div>
  );
};

export default DragSource('TASK', taskSource, collect)(Task);
