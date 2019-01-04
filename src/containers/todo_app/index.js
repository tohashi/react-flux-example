// @flow

import * as React from 'react';
import { Container } from 'flux/utils';
import TodoStore from '/src/flux-infra/stores/todo';

class TodoAppContainer extends React.Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState() {
    return {};
  }

  render() {
    return (
      <div className="TodoAppContainer">
        <h1>Title</h1>
        <ul>
          {[{ title: 'a' }].map(todo => (
            <li>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Container.create(TodoAppContainer);
