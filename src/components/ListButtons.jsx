import React from 'react'
import './listButtons.css'

const ListButtons = ({listButtonsValue, onclick}) => {
  return <button className='listButtons' onClick={onclick}>{listButtonsValue}</button>
}

export default ListButtons
