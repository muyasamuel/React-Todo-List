import React, { useEffect }  from 'react';
import './Alert.css'

function Alert({ msg , type, onTimelyRemovingAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(()=> {
      onTimelyRemovingAlert()

    },1000)
    return () => clearTimeout(timeout);

  },[list, onTimelyRemovingAlert])
 
  return (
    <div className={`alert alert-${type}`}><p>{msg}</p></div>
  )
}

export default Alert;