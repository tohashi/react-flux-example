// @flow

import * as React from 'react';

export default class TodoApp extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="TodoApp">
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
