// @flow

import request from 'axios';

const host = 'http://localhost:1235';

export const fetchTodos = () => request.get(`${host}/todos`);
