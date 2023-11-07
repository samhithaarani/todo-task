import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


function Todo({todos,completetodo,removetodo,updateTodo}) {

  const [edit,setedit]=useState({
    id:null,
    value:""

  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setedit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo,index )=>(
    <div className={todo.isComplete ? 'todo-row complete':'todo-row'} key={index}>

      <div key={todo.id} onClick={()=>{completetodo(todo.id)}}>
        <b>{todo.text.split("/")[0]}</b><br/>
        <small>{todo.text.split("/")[1]}</small>

      </div>

      <div className='icons'>
        <RiCloseCircleLine onClick={()=>{removetodo(todo.id)}} className='delete-icon'/>
        <TiEdit className="Edit-icon" onClick={()=>setedit({id : todo.id,value : todo.text})}/>

      </div>
    </div>
  ));
}

export default Todo
