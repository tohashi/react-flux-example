// @flow

import * as React from 'react';

type Props = {};

type State = {};

export default class TodoApp extends React.Component<Props, State> {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="TodoApp">
        <h1>TodoList</h1>
        <ul>
          {this.props.todos.map(todo => (
            <li>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
