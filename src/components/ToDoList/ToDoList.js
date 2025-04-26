import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/actions/todoActions";

import "./ToDoList.css";

function ToDoList() {

  const todos=useSelector((state)=> state.todosReducer.todos);
  // console.log(todos);as we combined the reducers,we done todos:todoReducer, it is taking that todos here
  
  const disptach = useDispatch();
  // const todos= store.getState().todos;

  return (
    <div className="container">
    <ul>
      {/* error=>todos.map is not a fn, todos->notdefined is not coming */}
      {todos.map((todo,index) => (
        <li key={index}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{disptach(toggleTodo(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;