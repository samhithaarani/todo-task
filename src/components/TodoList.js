import React,{useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
  const [todos,settodos] = useState([]);

  const addtodo = (todo) =>{
    if(!todo.text || /^\s*$/.test(todo.text)){
      return;
    }

    const newtodo = [todo, ...todos];
    settodos(newtodo);
  };
  

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    settodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };


  const removetodo = id =>{
   const removearr = [...todos].filter(todo => todo.id != id);
   settodos(removearr);

  };



  const completetodo = id =>{
    let updatedtodos= todos.map(todo=>{
      if(todo.id === id){
        todo.isComplete=!todo.isComplete
      }
      return todo;
    });

  }
  return (
    <div>
      <h1>Heyy !! what's the plans for today </h1>
      <TodoForm onSubmit={addtodo}/>
      <Todo todos={todos} completetodo={completetodo} removetodo = {removetodo} updateTodo={updateTodo}/>

      
    </div>
  )
}

export default TodoList
