import React ,{useState,useEffect, useRef} from 'react';

function TodoForm(props) {
    const [inputtext,setinputtext]=useState("")
    const [inputdesc,setinputdesc]=useState("")

    const inputRef = useRef(null);


  

    const handleChangetext=e=>{

        setinputtext(e.target.value);

    };

    const handleChangedesc=e=>{

      
        setinputdesc(e.target.value);

    };
    const handlesubmit = e=>{
        e.preventDefault();

        props . onSubmit({
            id : Math.floor(Math.random()*100000),
            text : inputtext + "/" + inputdesc
        });

        setinputtext("");
        setinputdesc("");

    };
  return (
    <div>
     <form className='todo-form' onSubmit={handlesubmit}>
        <input type="text" value={inputtext} name="todotext" className='todo-input' placeholder="Name the Task!" onChange={handleChangetext} />
        <input type="text" value={inputdesc} name="tododesc" className='todo-input' placeholder="describe the Task!" onChange={handleChangedesc}/>
        <button className='todo-button'>submit task</button>


     </form>
    </div>
  )
}

export default TodoForm
