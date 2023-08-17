import React from 'react'
import './TodoStatus.css'

const TodoStatus = ({status}) => {
  return <p className="TodoStatus">Status: <span className='span'>{status}</span> </p>
}

export default TodoStatus