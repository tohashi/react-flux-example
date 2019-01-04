// @flow

import * as React from 'react';
import { Container } from 'flux/utils';
import TodoApp from '/src/components/todo';
import TodoStore from '/src/flux-infra/stores/todo';
import { fetchTodos } from '/src/flux-infra/actions/todo';

class TodoAppContainer extends React.Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState() {
    return {};
  }

  render() {
    return <TodoApp fetchTodos={fetchTodos} />;
  }
}

export default Container.create(TodoAppContainer);
