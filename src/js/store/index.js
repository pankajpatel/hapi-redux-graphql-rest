import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import ReduxThunk from 'redux-thunk'
import ApolloClientSingleton from '../network/apollo-client-singleton'
import reducers from './reducers'

export default class Store {
  constructor(history, initialState = {}) {
    const reducer = combineReducers({
      count: reducers.count,
      load: reducers.load,
      apollo: ApolloClientSingleton.reducer(),
      routing: routerReducer
    })

    this.data = createStore(
      reducer,
      initialState,
      compose(
        applyMiddleware(
          routerMiddleware(history),
          ApolloClientSingleton.middleware(),
          ReduxThunk.withExtraArgument(ApolloClientSingleton)
        ),
         typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
      )
    )
  }
}
