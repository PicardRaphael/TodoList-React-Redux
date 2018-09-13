import React from 'react';

import Form from 'src/containers/Form';
import Counter from 'src/containers/Counter';
import List from 'src/containers/List';
import './todo.sass';

const Todo = () => (
  <div className="todo">
    <Form />
    <Counter />
    <List />
  </div>
);

export default Todo;
