
import React, { useState } from 'react'
import classNames from 'classnames'
import { changeIsActive } from '../../lib/api'

export default function ListKoders({firstName, lastName, isActive, id }) {

  const [ checked, setChecked ] = useState(false)

  const handleOnClick = async () => {
    setChecked(!checked)
    const koderToken = window.localStorage.getItem('token')
    const response = await changeIsActive(id, koderToken, {isActive:!checked})
  }
  
  return (
    <div className='flex justify-between w-full'>
      <li className={classNames(
      {'text-gray-inactive': !checked && !isActive },
      )}>
        {firstName} {lastName} 
      </li>
      <label className='switch'>
        <input type='checkbox' onClick={() => handleOnClick()} />
        <span className={classNames('slider round',{
          'bg-gray-500': isActive && checked,
          'bg-cyan-ka': !checked && !isActive,
        })}></span>
      </label>
    </div>
  )
}
