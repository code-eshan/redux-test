//Requires redux
const redux =  require('redux')
//Require redux logger
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()

//create store
const createStore = redux.createStore
const combineReducers = redux.combineReducers

//Apply middleware
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//Action creator is a function that returns an action
function buyCake() {
    return {
        //An action is an object with type property
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

//Action creator is a function that returns an action
function buyIceCream() {
    return {
        //An action is an object with type property
        type: BUY_ICECREAM
    }
}

// (previousState, action) => newState

// const initialState = {
//     numOfCakes : 10,
//     numOfIceCreams : 20
// }

//Defining State
const initialCakeState = {
    numOfCakes: 10
}

//Defining State
const initialIceCreamState = {
    numOfIceCreams: 20
}

//Reducer accepts state and action as arguments..
//action.type would have different actions accordingly where for each there will be a modification for the 
//state. And the reducer would return new state.
// const reducer = (state = initialState, action) => {

//     switch (action.type) {
//         case BUY_CAKE: return {
//             //Spread operator means that to keep the existing objects unchanged and change only the upcoming ones.
//             //...state makes a copy of the existing state.
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             //Spread operator means that to keep the existing objects unchanged and change only the upcoming ones.
//             //...state makes a copy of the existing state.
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state
//     }
// }



//Reducer accepts state and action as arguments..
//action.type would have different actions accordingly where for each there will be a modification for the 
//state. And the reducer would return new state.
const cakeReducer = (state = initialCakeState, action) => {

    switch (action.type) {
        case BUY_CAKE: return {
            //Spread operator means that to keep the existing objects unchanged and change only the upcoming ones.
            //...state makes a copy of the existing state.
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

//Reducer accepts state and action as arguments..
//action.type would have different actions accordingly where for each there will be a modification for the 
//state. And the reducer would return new state.
const IceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            //Spread operator means that to keep the existing objects unchanged and change only the upcoming ones.
            //...state makes a copy of the existing state.
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : IceCreamReducer
})

//Accepts the parameter which is the reducer function
//Now the redux store is holding the application's state.
//Here, the rootReducer is holding many reducers inside.
//applyMiddleware is the second parameter which has the logger inside which logs the changes to the console
const store = createStore(rootReducer,applyMiddleware(logger));

//Accepts the parameter which is the reducer function
//Now the redux store is holding the application's state.
//It is holding only one reducer
// const store = createStore(reducer);

//Here the initial state value is printed.
console.log('initial state',store.getState());

// const unsubscribe = store.subscribe(() => console.log('updated state',store.getState()))

//dispatch function calls the action buyCake which reduces the state value by one this section is called three times.
//So initially the cakes were 10 and now it would be 7 at last.
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

// unsubscribe()