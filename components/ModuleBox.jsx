import React from 'react'
import classNames from 'classnames'

export default function ModuleBox() {
  return (
    <div className='flex items-center h-screen w-full justify-center'>
      <div className='w-40'>
          <div className='bg-gray-900 text-white shadow-xl rounded-lg py-6 -m-3'>
              <div className='photo-wrapper px-7'>
              </div>
              <div className='p-2'>
                <ul>
                  <li className=' block text-xl text-center font-medium px-2 py-2 hover:text-blue-light'>Hello koders</li>
                  <li className='block text-xl text-center font-medium px-2 py-2 hover:text-blue-light'>Front End</li>
                  <li className='block text-xl text-center font-medium px-2 py-2 hover:text-blue-light'>Back End</li>
                  <li className='block text-xl text-center font-medium px-2 py-2 hover:text-blue-light'>Front End Moderno</li>
                  <li className='block text-xl text-center font-medium px-2 py-2 hover:text-blue-light'>Cloud</li>
                  <li className='block text-xl text-center font-medium px-2 py-2 hover:text-blue-light'>Talleres</li>
                </ul>
              </div>
          </div>
      </div>
      
      </div>
      
  )
  }