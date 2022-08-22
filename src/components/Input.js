import React, { useState } from "react";
import classes from "./Input.module.css";

function Input(props) {
  const [name, setName] = useState("");


  const submitHandler = (e) =>{
    e.preventDefault();
    
    console.log(name);
    const newName = {
      name: name,

    }

    props.onAddTodo(newName);

    setName('');

  }
  return (
    <form className={classes.inputDiv} onSubmit={submitHandler}>
      <input
        className={classes.inputField}
        type="text"
        placeholder="Finish my react projects"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className={classes.actions}>Submit</button>
    </form>
  );
}

export default Input;
