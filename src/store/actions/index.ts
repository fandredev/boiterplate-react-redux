import * as types from '../types'

type ReturnActions = {
  type: string
}
export function getRequest(): ReturnActions {
  return {
    type: types.GET_REQUEST
  }
}

export function getRequestSuccess(): ReturnActions {
  return {
    type: types.GET_REQUEST_SUCCESS
  }
}

export function getRequestFailure(): ReturnActions {
  return {
    type: types.GET_REQUEST_FAILURE
  }
}

export function getTitle(): ReturnActions {
  return {
    type: types.GET_TITLE
  }
}
