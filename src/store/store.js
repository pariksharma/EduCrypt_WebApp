import { configureStore, combineReducers } from "@reduxjs/toolkit";

const combinereducer = combineReducers({

})

const rootReducer = (state, action) => {
    if(action.type == 'logout/logoutAction'){
        state = {}
    }
    return combinereducer(state, action)
}

export const store = configureStore({
    reducer: rootReducer,
})


export const persistor = store;

