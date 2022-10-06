import React, {useState} from 'react'

export default function Boxes(props) {
  const style = {
    backgroundColor : props.ison ? props.penColor : "white"
  }

  return (
    <div
        style={style}
        className='main--boxes'
        onMouseEnter={()=>props.handleClick(props.id)}
    ></div>
  )
}
