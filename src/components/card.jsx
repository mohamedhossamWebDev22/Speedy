import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <i className={props.icon}></i>
      <p>{props.txt}</p>
    </div>
  )
}

export default Card