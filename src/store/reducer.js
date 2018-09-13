import tasks from 'src/data/tasks';

const initialState = {
  tasks,
  username: 'Toto'
};
console.log('État initial', initialState);

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_NAME': {
      return {
        ...state,
        username: Math.random().toString(36).substring(7)
      };
    }
    /**
     * Add a new task to the current tasks list.
     */
    case 'ADD_TASK': {
      // Compute a new task ID, based on current max ID.
      const allIds = state.tasks.map(t => t.id);
      const newId = allIds.length ? Math.max(...allIds) + 1 : 0;
      // Create an object modelizing the new task.
      const newTask = {
        id: newId,
        label: action.label,
        done: false
      };
      // Create a new task lists, based on the current list, plus the new task.
      const tasks = [...state.tasks, newTask]; // !!! working with task objects
      // Return an altered copy of the state, including the new, edited tasks list.
      return { ...state, tasks }; // !!! working with a tasks array
    }

    /**
     * Delete a task.
     */
    case 'DELETE_TASK': {
      const tasks = state.tasks.filter(task => task.id !== action.id);
      return { ...state, tasks };
    }

    /**
     * Toggle a task (check/uncheck => done/undone).
     */
    case 'TOGGLE_TASK': {
      const tasks = state.tasks.map(task => {
        if (task.id === action.id) {
          return {
            ...task,
            done: !task.done
          };
        }
        return task;
      });
      return { ...state, tasks };
    }

    /**
     * Toggles favorite status for a task.
     */
    case 'FAVORITE_TASK': {
      const tasks = state.tasks.map((task) => {
        if (task.id === action.id) {
          /* eslint-disable no-prototype-builtins */
          if (!task.hasOwnProperty('favorite')) {
            task.favorite = false;
          }
          task.favorite = !task.favorite;
        }
        return task;
      });
      return { ...state, tasks };
    }

    default:
      return state;
  }
};

export default reducer;
