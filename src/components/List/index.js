import React from 'react';
import PropTypes from 'prop-types';

import Task from 'src/containers/Task';
import './list.sass';

const Tasks = ({ tasks }) => (
  <ul className="todo-list">
    {
      tasks.map(task => (
        <Task key={task.id} {...task} />
      ))
    }
  </ul>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired
};

export default Tasks;
