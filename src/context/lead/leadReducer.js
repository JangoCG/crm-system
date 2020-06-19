// This file decides what will happen with
// with the state after a action
import { TEST_TYPE } from '../types'

export default (state, action) => {
  switch (action.type) {
    case TEST_TYPE:
      return {
        state
      }
    default:
      return state
  }
}
