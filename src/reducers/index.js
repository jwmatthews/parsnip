export default function tasks(state = { tasks: [] }, action) {
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
    case 'FETCH_TASKS_SUCCEEDED':
      return {
        tasks: action.payload.tasks
      };
    default:
      return state;
  }
}
