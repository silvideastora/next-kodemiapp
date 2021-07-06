import React, {useState} from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'


export default function ModuleBox({modules}) {
  const [selectedModule, setSelectedModule] = useState({topics:[]});
  const router = useRouter();
  const changeModule = (module)=> {
    setSelectedModule(module);

  }
  const displayResourceScreen = (topic) => {
    router.push(`/resources/${topic.title}`)
  }
  return (
      <div className={classNames(
        'grid grid-cols-3 sm:gap-4 xs:grid-cols-1'
        )}>
      <div >
            <div className={classNames(
            'bg-black',
            'py-6',
            'shadow-xl rounded-lg',
            'text-white',
            'mb-0.5'
            )}>
              <div className='p-2s'>
                  <ul> 
                    {modules.map((module,index) => ( 
                      <li onClick={(e) => changeModule(module)} key={index} className={classNames (
                        'block text-xl text-center font-medium',
                        'hover:text-cyan-kodemiapp',
                        'px-2 py-2' 
                      )}>{module.title}</li>
                    ) ) }
                  </ul>
                </div>
            </div>
        </div>
        <div className='col-span-2 flex-grow-0'>
          <div className= {classNames(
            'bg-black',
            'min-h-full',
            'py-5 px-5', 
            'rounded-lg',
            'text-white'
          )} >
            <p classNames='flex items-start' >Módulo {selectedModule.title}</p>
            <div>
              <ul className='grid grid-cols-6'>
                {selectedModule.topics.map((topic, index) =>( 
                  <li onClick={(e) => displayResourceScreen(topic)} key={index} className='text-gray-inactive hover:text-cyan-kodemiapp'>
                    <img className='mx-auto w-20'src={topic.icon} alt={`${topic.icon}-icon`} />
                    <p className=' text-center'>{topic.title}</p>
                  </li>)
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
  }