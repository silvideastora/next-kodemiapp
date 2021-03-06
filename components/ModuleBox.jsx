import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'


export default function ModuleBox({ modules }) {

  const [selectedModule, setSelectedModule] = useState({ topics: [] });

  useEffect(() => {
    setSelectedModule(modules[0])
  }, [])
  const router = useRouter();
  const changeModule = (module) => {
    setSelectedModule(module)

  }
  const displayResourceScreen = (topic) => {
    router.push(`/resources/${topic.title}`)
  }
  return (
    <div className={classNames(
      'grid grid-cols-3',
      'sm:gap-2 lg:gap-8',
      'xs:grid-cols-1 ',
      'mt-6'
    )}>
      <div>
        <h3 className='mb-2'>Módulos</h3>
        <div className={classNames(
          'bg-black-ka',
          'border border-white-ka',
          'mb-0.5',
          'py-6',
          'shadow-xl rounded-lg',
          'text-white',
          'font-semibold',
          'h-full'
        )}>
          <div className={classNames(
            'p-2'
          )}>
            <ul>
              {modules.map((module, index) => (
                <li onClick={(e) => changeModule(module)} key={index} className={classNames(
                  'block text-center',
                  'cursor-pointer',
                  'font-medium',
                  'hover:text-cyan-ka',
                  'px-2 py-2',
                  'text-base',
                  'transition duration-100 ease-in-out',
                  'transform  hover:scale-110',
                )}>{module.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='col-span-2  xs:mt-4'>
        <h3 className='mb-2'>Recursos</h3>

        <div className={classNames(
          'bg-black-ka',
          'border border-white-ka',
          'min-h-full',
          '',
          'py-2 px-5',
          'rounded-lg',
          'text-white-ka',
          'text-medium'

        )} >
          <p className={classNames(
            'flex items-start'
          )}> Módulo {selectedModule.title}</p>
          <div>
            <ul className={classNames(
              'grid',
              'xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 '
            )}>
              {selectedModule.topics.map((topic, index) => (
                <li onClick={(e) => displayResourceScreen(topic)} key={index}
                  className={classNames(
                    'hover:text-cyan-ka',
                    'text-gray-inactive',
                    'transition duration-100 ease-in-out',
                    'transform  hover:scale-110 '
                  )}>
                  <img className={classNames(
                    'mx-auto', ' w-20'
                  )}
                    src={topic.icon} alt={`${topic.icon}-icon`} />
                  <p className={classNames(
                    'text-center')}>
                    {topic.title}</p>
                </li>)
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>


  )
}