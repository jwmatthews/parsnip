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

export function updateTask({ id, title, description, status }) {
  console.log(
    'actions.updateTask(' +
      id +
      ', ' +
      title +
      ', ' +
      description +
      ', ' +
      status +
      ')'
  );
  return {
    type: 'UPDATE_TASK',
    payload: {
      id: id,
      title,
      description,
      status: status
    }
  };
}
