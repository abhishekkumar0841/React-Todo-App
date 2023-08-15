import React from 'react'
import './TodoLists.css'

const TodoLists = ({todo}) => {
  return <li className='listItems'> {todo}  </li>
}

export default TodoLists
