import React, {useState} from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'


export default function ModuleBox({modules}) {
  const [selectedModule, setSelectedModule] = useState({topics:[]});
  const router = useRouter();
  const changeModule = (module)=> {
    setSelectedModule(module)

  }
  const displayResourceScreen = (topic) => {
    router.push(`/resources/${topic.title}`)
  }
  return (
      <div className={classNames(
        'grid grid-cols-3',
        'lg:gap-4 sm:gap-1',
        'xs:grid-cols-1 '
        )}>
      <div>
            <div className={classNames(
            'bg-black-ka',
            'border border-white-ka',
            'mb-0.5',
            'py-6',
            'shadow-xl rounded-lg',
            'text-white',
            'font-semibold'
            )}>
              <div className={classNames(
                'p-2'
                )}>
                  <ul> 
                    {modules.map((module,index) => ( 
                      <li onClick={(e) => changeModule(module)} key={index} className={classNames(
                        'block text-xl text-center',
                        'cursor-pointer',
                        'font-medium',
                        'hover:text-cyan-ka',
                        'px-2 py-2',
                        'text-xl',
                        'transition duration-100 ease-in-out',
                        'transform  hover:scale-110',
                      )}>{module.title}</li>
                    ) ) }
                  </ul>
                </div>
            </div>
        </div>
        <div className={classNames(
          'col-span-2',
          'font-medium'
          )}>
          <div className= {classNames(
            'bg-black-ka',
            'border border-white-ka',
            'min-h-full',
            'p-2',
            'py-5 px-5', 
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
                {selectedModule.topics.map((topic, index) =>( 
                  <li onClick={(e) => displayResourceScreen(topic)} key={index}
                    className={classNames(
                      'hover:text-cyan-ka',
                      'text-gray-inactive',
                      'transition duration-100 ease-in-out',
                      'transform  hover:scale-110 '
                      )}>
                    <img className={classNames(
                      'mx-auto',' w-20'
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