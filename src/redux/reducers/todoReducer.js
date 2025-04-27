
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";we dont have to import these actions/actions creators anymore 

import { createSlice } from "@reduxjs/toolkit"

const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}
//Creating Reducer using ReduxToolkit=> create slice fn, slice means a part of something bigger,similarly slice here indicates the slice of application,reducer is nothing but representing a part of our application,it is solving problems for a part of our application where there are multiple features one reducer define one feature.

 const todoSlice = createSlice({
    name:'todo',
    initialState:initialState,
    reducers:{//inside the reducer we can define actions and whatever we want to do inside that action
        //this is add action
        add:(state,action)=>{//previously in action we defined payloads(like text,type) using action creators but now action creators will be generated automatically and any data dispatched from component will come inside action.payload
            state.todos.push({
                text:action.payload,
                completed:false
            })
    //we dont have to worry about returning the modified state
        },
        toggle:(state,action)=>{
            state.todos.map((todo,index)=>{
                if(index===action.payload){
                    todo.completed=!todo.completed
                }
                return todo;
            })
        }
    }
})
export const todoReducer = todoSlice.reducer
export const actions = todoSlice.actions
export const todoSelector = (state)=>state.todoReducer.todos




//Reducer using redux
// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }