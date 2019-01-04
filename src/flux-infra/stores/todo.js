// @flow

import { ReduceStore } from 'flux/utils';
import Dispatcher from '/src/flux-infra/dispatcher';

type State = {
  todos: Array<any>
};

type Action = {};

class TodoStore extends ReduceStore<State> {
  getInitialState() {
    return {
      todos: []
    };
  }

  reduce(state: State, action: Action) {
    if (action.error) {
      return this.reduceError(state, action);
    }
    switch (action.type) {
      case 'TODO/FETCH_TODOS':
        return {
          ...state,
          todos: action.payload
        };
    }
    return state;
  }

  reduceError(state: State, action: Action) {
    return state;
  }
}

export default new TodoStore(Dispatcher);
