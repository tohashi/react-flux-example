// @flow

import { ReduceStore } from 'flux/utils';
import Dispatcher from '/src/flux-infra/dispatcher';

type State = {};

class TodoStore extends ReduceStore<State> {
  getInitialState() {
    return {};
  }

  reduce(state: State) {
    return state;
  }
}

export default new TodoStore(Dispatcher);
