import React from 'react'
import classNames from 'classnames'

export default function ModuleBox() {
    return (
      <div className='flex items-center h-screen w-full justify-center'>
      
      <div className='w-40'>
          <div className='bg-black text-white shadow-xl rounded-lg py-6 -m-3'>
              <div className='photo-wrapper px-7'>
              </div>
              <div className='p-2'>
                <tbody>
                    <tr className='block'>
                        <td className='block text-xl text-center font-medium px-2 py-2'>Hello Koders</td>
                    </tr>  
                    <tr className='block'>
                        <td className='block text-xl text-center font-medium px-2 py-2'>Front End</td>
                    </tr>
                    <tr className='block'>
                        <td className='block text-xl text-center font-medium px-2 py-2'>Back End</td>
                      </tr>
                      <tr className='block'>
                        <td class='block text-xl text-center font-medium px-2 py-2'>Front End Moderno</td>
                      </tr>
                      <tr className='block'>
                        <td class='block text-xl text-center font-medium px-2 py-2'>Cloud</td>
                      </tr>
                      <tr className='block'>
                        <td class='block text-xl text-center font-medium px-2 py-2'>Talleres</td>
                      </tr>
                </tbody>
              </div>
          </div>
      </div>
      
      </div>
      
  )
  }