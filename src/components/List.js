import { MdDelete } from "react-icons/md";
import { FaEdit  } from "react-icons/fa";
import React  from 'react';
import classes from './List.module.css';




function List({list}) {
 
  return (
    <div className={classes.listDiv}>
        {list.map((item) => {
            return (
                <article key={item.id} className={classes.listItem}>
                    {item.name}
                    
                <div className={classes.action}>
                   <button> Edit <FaEdit /></button> 
                   <button> Delete <MdDelete /></button>
                </div>
                   
                    
                </article>
            )
        })}
    </div>
       
    
     


    
  )
}

export default List