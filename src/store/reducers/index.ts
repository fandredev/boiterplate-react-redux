import * as types from '../types'

interface InitialStates<T = string, U = boolean> {
  data: T[],
  loading: U
  errors: U
}

export interface Action {
  type: string,
  payload?: any
}
const INITIAL_STATES: InitialStates<string, boolean> = {
  data: [],
  loading: false,
  errors: false
}

export default function ReducerRequest(state = INITIAL_STATES, action: Action) {
  switch (action.type) {
    case types.GET_REQUEST: {
      return {
        ...state,
        data: [],
        loading: false,
        errors: false
      }
    }
    case types.GET_REQUEST_FAILURE: {
      return {
        ...state,
        data: [],
        loading: false,
        errors: true
      }
    }
    case types.GET_REQUEST_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        errors: false
      }
    }
    default: return state
  }

}
