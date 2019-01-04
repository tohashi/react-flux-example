// @flow

import Dispatcher from '/src/flux-infra/dispatcher';
import * as TodoAPI from '/src/flux-infra/api_utils/todo';

export const fetchTodos = async () => {
  const result = await TodoAPI.fetchTodos();
  console.log('success', result);
  Dispatcher.dispatch({
    type: 'TODOS/FETCH',
    payload: result
  });
};
