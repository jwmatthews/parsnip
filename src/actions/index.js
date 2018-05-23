import * as api from '../api';

let _id = 1;
export function uniqueId() {
  return _id++;
}

export function createTask({ title, description, status = 'Unstarted' }) {
  return {
    type: 'CREATE_TASK',
    payload: {
      id: uniqueId(),
      title,
      description,
      status: status
    }
  };
}

export function updateTask(id, params = {}) {
  console.log('actions.updateTask(' + id + ', ' + JSON.stringify(params) + ')');
  return {
    type: 'UPDATE_TASK',
    payload: {
      id,
      params
    }
  };
}

export function fetchTasksSucceeded(tasks) {
  return {
    type: 'FETCH_TASKS_SUCCEEDED',
    payload: {
      tasks
    }
  };
}

export function fetchTasks() {
  return dispatch => {
    api.fetchTasks().then(resp => {
      dispatch(fetchTasksSucceeded(resp.data));
    });
  };
}
