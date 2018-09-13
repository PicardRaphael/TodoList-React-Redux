import React from 'react';
import PropTypes from 'prop-types';

import './form.sass';

class Form extends React.Component {
  /**
   * User submitted the form and likely wants a new task to be added to the list.
   */
  onSubmit = (evt) => {
    evt.preventDefault();
    // Creating a Redux action modelizing the user intent.
    const { value: label } = this.input;
    // Sending (dispatching) this action to the Redux store.
    this.props.addTask(label);
    this.input.value = '';
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.onSubmit}>
        <input
          ref={input => this.input = input}
          type="text"
          placeholder="Ajoutez votre tâche"
          className="todo-input"
        />
      </form>
    );
  }
}

export default Form;
