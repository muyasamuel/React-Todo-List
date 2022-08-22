import React  from 'react';
import classes from './List.module.css';




function List({list}) {
 
  return (
    <div className={classes.listDiv}>
        {list.map((item) => {
            return (
                <div key={item.id} className={classes.listItem}>
                    {item.name}
                </div>
            )
        })}
    </div>
       
    
     


    
  )
}

export default List