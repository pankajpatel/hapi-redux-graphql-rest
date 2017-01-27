import { TOGGLE_VIEW } from '../actions/constants'

export default function (state = '', action) {
  if (action.type === TOGGLE_VIEW) {
    // if(!state.view){ state.view = '' }
    if( state === 'list' ){
      state = 'grid';
    } else {
      state = 'list';
    }
  }
  return state
}
