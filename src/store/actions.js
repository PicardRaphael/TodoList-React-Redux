// Action creators

// Generate an ADD_TASK action, with a label as its payload.
export const addTask = inputValue => ({
  type: 'ADD_TASK',
  label: inputValue
});

// Generate a TOGGLE_TASK action, with an id as its payload.
export const toggleTask = id => ({
  type: 'TOGGLE_TASK',
  id
});

// Generate a DELETE_TASK action, with an id as its payload.
export const deleteTask = id => ({
  type: 'DELETE_TASK',
  id
});

// Generate a FAVORITE_TASK action, with an id as its payload.
export const favoriteTask = id => ({
  type: 'FAVORITE_TASK',
  id
});
