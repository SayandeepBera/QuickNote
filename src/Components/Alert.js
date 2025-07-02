import React from 'react'

const Alert = (props) => {
  // const capitalizedType = (word) => {
  //   const type = word.toLowerCase();
  //   return type.charAt(0).toUpperCase() + type.slice(1);
  // }

  return (
    <div className="position-fixed w-100 z-3" style={{ top: "83px"}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`} role="alert">
        {props.alert.msg}
      </div>}
    </div>
  )
}

export default Alert
