import React, { useContext, useState } from "react";
import { alertContext } from "../alert-context/alertContext";
import classes from "./Input.module.css";

function Input(props) {
 const [  setAlert] =  useContext(alertContext)
  const [name, setName] = useState("");



  const inputValue = () => setAlert({show: true, msg: 'kamikaze'})


  const onSubmitHandler = (e) =>{
    e.preventDefault();

    if(!name){
     
      inputValue();
   
    }
    
      const newName = {
      id: Math.random().toString(16).slice(2),
      name: name,
    };
   
    


   
    
     


    props.onAddTodo(newName);

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
      <button className={classes.actions}>Submit</button>
    </form>
  );
}



export default Input;
