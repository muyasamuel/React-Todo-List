import { MdDelete } from "react-icons/md";
import { FaEdit  } from "react-icons/fa";
import React  from 'react';
import classes from './List.module.css';




function List({list, onDelete, clearAll, editItem}) {

 
 
  return (
    <div>
        {list.map((item) => {
            const {id , name} = item
            return (
                <article key={item.id} className={classes.listItem}>
                    {name}
                    
                <div className={classes.action}>
                   <button className={classes.editBtn} onClick={()=> editItem(id)}> Edit <FaEdit /></button> 
                   <button className={classes.deleteBtn} onClick={() => onDelete(id)}> Delete <MdDelete /></button>
                </div>
                   
                    
                </article>
                
            )
        })}
        <button className={classes.clearBtn} onClick={clearAll}>Clear All list</button>
    </div>
       
    
     


    
  )
}

export default List