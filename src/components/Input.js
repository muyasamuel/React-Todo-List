import React, {  useState} from "react";


import classes from "./Input.module.css";

function Input({onAddTodo, editing}) {

 const [ name, setName] = useState('');




 


  const onSubmitHandler = (e) =>{
    e.preventDefault();

  
    
      const newName = {
      id: Math.random().toString(16).slice(2),
      name: name,
    };
   
    


   
    
     


    onAddTodo(newName);

    setName('');

  }
  return (
    <form className={classes.inputDiv} onSubmit={onSubmitHandler}>
      <input
        className={classes.inputField}
        type="text"
        placeholder=" eg... Finish my react projects"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className={classes.actions}>{editing ? 'Edit' : 'Submit'}</button>
    </form>
  );
}



export default Input;
