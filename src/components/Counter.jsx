import React from 'react'
import './Counter.css'

const Counter = ({count}) => {
  return (
    <div className='counter'>
      {count}
    </div>
  )
}

export default Counter
