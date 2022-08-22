import React, { useState } from 'react';
import classes from './List.module.css';


const todos = [
    {
        id: 't1',
        name: 'Do some general house cleaning'
    },
    {
        id: 't1',
        name: 'Go for some shopping '
    },
    {
        id: 't1',
        name: 'Finish my assignments'
    },
    {
        id: 't1',
        name: 'Finish my assignments'
    }

]

function List() {
  const [ list , setList]  = useState(todos);
  return (
    <div className={classes.listDiv}>
        {list.map((item) => {
            return (
                <div className={classes.listItem}>
                    {item.name}
                </div>
            )
        })}
    </div>
       
    
     


    
  )
}

export default List