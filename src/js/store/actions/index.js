import * as C from './constants'

export function addCount(amount) {
  return {
    type: C.ADD_COUNT,
    payload: amount
  }
}

export function load() {
  return {
    type: C.LOAD
  }
}
