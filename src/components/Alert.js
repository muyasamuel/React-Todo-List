import React from 'react';
import './Alert.css'

function Alert({msg , type}) {
  return (
    <div className={`alert alert-${type}`}><p>{msg}</p></div>
  )
}

export default Alert;