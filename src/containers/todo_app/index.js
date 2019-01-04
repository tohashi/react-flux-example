// @flow

import * as React from 'react';
import { Container } from 'flux/utils';
import TodoApp from '/src/components/todo';
import TodoStore from '/src/flux-infra/stores/todo';
import { fetchTodos } from '/src/flux-infra/actions/todo';

type State = {};

class TodoAppContainer extends React.Component<void, State> {
  static getStores() {
    return [TodoStore];
  }

  static calculateState() {
    return {
      ...TodoStore.getState()
    };
  }

  render() {
    return <TodoApp todos={this.state.todos} fetchTodos={fetchTodos} />;
  }
}

export default Container.create(TodoAppContainer);
