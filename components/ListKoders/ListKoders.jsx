import React, { useState } from 'react'
import classNames from 'classnames'

export default function ListKoders({firstName, lastName}) {

  const [ checked, setChecked ] = useState(false)
  
  return (
    <div className='flex justify-between'>
      <li className={classNames(
      {'text-gray-inactive': checked},
    )}>
      {firstName} {lastName}
      
      </li>
      <label className='switch '>
        <input type='checkbox' onClick={() => setChecked(!checked)} />
        <span className='slider round'></span>
      </label>
    </div>
  )
}