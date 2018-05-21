import { uniqueId } from '../actions';

const mockTasks = [
  {
    id: uniqueId(),
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress'
  },
  {
    id: uniqueId(),
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In Progress'
  }
];

export default function tasks(state = { tasks: mockTasks }, action) {
  console.log(
    'Reducers:  tasks invoked, \n\tstate = ' +
      JSON.stringify(state) +
      ', \n\taction = ' +
      JSON.stringify(action)
  );

  switch (action.type) {
    case 'CREATE_TASK':
      return { tasks: state.tasks.concat(action.payload) };
    case 'UPDATE_TASK':
      const { payload } = action;
      return {
        tasks: state.tasks.map(task => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        })
      };
    default:
      return state;
  }
}
