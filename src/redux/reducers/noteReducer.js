// import { ADD_NOTE , DELETE_NOTE} from "../actions/noteActions";

import { createSlice } from "@reduxjs/toolkit"

 
const initialState = {
    notes: [
      { text: "Go to Gym at 6", createdOn: new Date().toISOString() },
      { text: "Study at 8", createdOn: new Date().toISOString() }
    ]
  }
  
    
 const noteSlice = createSlice({
    name:"notes",
    initialState:initialState,
    reducers:{
        add:(state,action)=>{
            state.notes.push({
                text:action.payload,
                createdOn:new Date().toISOString()
            })
        },
        delete:(state,action)=>{
            state.notes.splice(action.payload,1);
        }

    }
})
export const noteReducer = noteSlice.reducer
export const actions = noteSlice.actions
export const noteSelector = (state)=>state.noteReducer.notes


// export function noteReducer(state=initialState, action){

//     switch (action.type) {
//         case ADD_NOTE:{
//             return {
//                 ...state,
//                 notes:[...state.notes,{text:action.text,createdOn:new Date()}]
//             };
//         }
//         case DELETE_NOTE:{
//             state.notes.splice(action.index,1)
//             return {
//                 ...state,
//                 notes: [...state.notes]
//             }
           
//         }    
//         default:
//             return state;
//     }
    
// }