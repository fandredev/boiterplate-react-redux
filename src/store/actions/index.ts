import { Action } from '../reducers';
import * as types from '../types';

export function getRequest(): Action {
  return {
    type: types.GET_REQUEST
  };
}

export function getRequestSuccess(): Action {
  return {
    type: types.GET_REQUEST_SUCCESS,
    payload: 'Whatever'
  };
}

export function getRequestFailure(): Action {
  return {
    type: types.GET_REQUEST_FAILURE
  };
}

export function getTitle(): Action {
  return {
    type: types.GET_TITLE
  };
}
