import { MdDelete } from "react-icons/md";
import { FaEdit  } from "react-icons/fa";
import React  from 'react';
import classes from './List.module.css';




function List({list, onDelete}) {

 
 
  return (
    <div className={classes.listDiv}>
        {list.map((item) => {
            const {id , name} = item
            return (
                <article key={item.id} className={classes.listItem}>
                    {name}
                    
                <div className={classes.action}>
                   <button> Edit <FaEdit /></button> 
                   <button onClick={() => onDelete(id)}> Delete <MdDelete /></button>
                </div>
                   
                    
                </article>
            )
        })}
    </div>
       
    
     


    
  )
}

export default List