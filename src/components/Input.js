import React from 'react';
import classes from './Input.module.css'

function input() {
  return (
    <div className={classes.inputDiv}>
        <input className={classes.inputField} type='text' placeholder='Finish my react projects' />
        <button className={classes.actions}>Submit</button>
    </div>
  )
}

export default input