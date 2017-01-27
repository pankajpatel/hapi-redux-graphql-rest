import * as C from './constants'

export function load() {
  return {
    type: C.LOAD
  }
}

export function toggleView() {
  return {
    type: C.TOGGLE_VIEW
  }
}
