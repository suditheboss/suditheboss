const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
     return{
         type : BUY_CAKE,
         info : 'first redux action'
     }
}

const initialState = {
      numOfCakes: 10
      
}

const reducer = (state = initialState, action) => {
      switch(action.type) {
          case BUY_CAKE: return {
              ...state,
               numOfCakes: state.numOfCakes - 1
          }

          default: return state
      }
}

const store = createStore(reducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()