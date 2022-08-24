import React, { useContext} from "react";
import { alertContext } from "../alert-context/alertContext";
import { inputContext } from "../alert-context/inputContext";
import classes from "./Input.module.css";

function Input({onAddTodo, editing}) {
 const [  setAlert] =  useContext(alertContext);
 const [ name, setName] = useContext(inputContext);




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
