import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Todo from 'src/components/Todo';
import store from 'src/store';

const rootComponent = (
  <Provider store={store}>
    <Todo />
  </Provider>
);
const targetNode = document.getElementById('root');
render(rootComponent, targetNode);
