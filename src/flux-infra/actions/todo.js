// @flow

import Dispatcher from '/src/flux-infra/dispatcher';
import * as TodoAPI from '/src/flux-infra/api_utils/todo';

export const fetchTodos = async () => {
  const result = await TodoAPI.fetchTodos();
  if (result && result.status === 200) {
    Dispatcher.dispatch({
      type: 'TODO/FETCH_TODOS',
      payload: result.data
    });
    return;
  }
};
