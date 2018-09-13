import { connect } from 'react-redux';

import Task from 'src/components/Task';
import { toggleTask, deleteTask, favoriteTask } from 'src/store/actions';

// Write to state.
const mapDispatchToProps = dispatch => ({
  // Dispatch a Redux action upon toggling a task.
  onCheckTask: id => () => {
    dispatch(toggleTask(id));
  },

  // Dispatch a Redux action upon toggling a task.
  onDelTask: id => () => {
    dispatch(deleteTask(id));
  },

  // Dispatch a Redux action upon toggling a task.
  onFavoriteTask: id => () => {
    dispatch(favoriteTask(id));
  }
});

const TaskContainer = connect(
  null,
  mapDispatchToProps
)(Task);

export default TaskContainer;
