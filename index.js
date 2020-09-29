//Requires redux
const redux =  require('redux')

//create store
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

//Action creator is a function that returns an action
function buyCake() {
    return {
        //An action is an object with type property
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// (previousState, action) => newState

//Defining State
const initialState = {
    numOfCakes: 10
}

//Reducer accepts state and action as arguments..
//action.type would have different actions accordingly where for each there will be a modification for the 
//state. And the reducer would return new state.
const reducer = (state = initialState, action) => {

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

//Accepts the parameter which is the reducer function
//Now the redux store is holding the application's state.
const store = createStore(reducer);

//Here the initial state value is printed.
console.log('initial state',store.getState());

const unsubscribe = store.subscribe(() => console.log('updated state',store.getState()))

//dispatch function calls the action buyCake which reduces the state value by one this section is called three times.
//So initially the cakes were 10 and now it would be 7 at last.
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()