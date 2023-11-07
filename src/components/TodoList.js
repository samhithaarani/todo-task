import React,{useState} from 'react'

import TodoForm from './TodoForm'

function TodoList() {
  const [todos,settodos] = useState([]);

  const addtodo = (todo) =>{
    if(!todo.text || /^\s*$/.test(todo.text)){
      return;
    }

    const newtodo = [todo, ...todos]
    settodos(newtodo)
    console.log(...todos);
  };
  return (
    <div>
      <h1>Heyy !! Add Something</h1>
      <TodoForm onSubmit={addtodo}/>

      
    </div>
  )
}

export default TodoList
