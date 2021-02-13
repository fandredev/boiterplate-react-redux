import { GET_TITLE } from '../types'
import { Action } from './'

enum Title {
  title = 'Welcome'
}
const { title } = Title

interface I_State<T> {
  title: T
}

const INITIAL_STATE: I_State<string> = Object.freeze({ title })

export default function TitleReducer(
  state = INITIAL_STATE,
  action: Action): I_State<string> {
  switch (action.type) {
    case GET_TITLE: {
      return {
        ...state,
        title
      }
    }
    default: return state
  }
}
