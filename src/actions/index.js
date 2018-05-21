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
