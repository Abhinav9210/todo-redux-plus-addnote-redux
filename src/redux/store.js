
// const redux = require("redux");

import { configureStore } from "@reduxjs/toolkit";

// import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";
// import { combineReducers } from "redux";
import { noteReducer } from "./reducers/noteReducer";

// const result = combineReducers({
//     todosReducer : todoReducer,
//     notesReducer : noteReducer
// })

// export const store = redux.createStore(result);

export const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer
    }
})
