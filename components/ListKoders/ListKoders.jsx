import React, { useState } from 'react'
import koders from '../../config/koders.json'
import classNames from 'classnames'

export default function ListKoders() {

  const [ checked, setChecked ] = useState(false)
  console.log(checked)
  return (
    <div>
      <ul className='p-6'>
        {
          koders.map(({ firstName, lastName }, index) => (
            <div className='flex justify-between' key={`koder-${index}`}>
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
            
          ))
        }
      </ul>
    </div>
  )
}

// checked && ['text-gray-inactive']