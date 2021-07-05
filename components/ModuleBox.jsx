import React, {useState} from 'react'
import classNames from 'classnames'


export default function ModuleBox({modules}) {
  const [selectedModule, setSelectedModule] = useState({topics:[]});
  const changeModule = (module)=> {
    setSelectedModule(module);
  }
  return (
      <div className='grid grid-cols-3 gap-4'>
        <div >
            <div className={classNames(
            'bg-gray-kodemiapp',
            'py-6',
            'shadow-xl rounded-lg',
            'text-white'
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
            'bg-gray-kodemiapp',
            'min-h-full',
            'py-5 px-5', 
            'rounded-lg',
            'text-white'
          )} >
            <p classNames='flex items-start' >Módulo {selectedModule.title}</p>
            <p>{selectedModule.description}</p>
            <div>
              <ul className='grid grid-cols-6'>
                {selectedModule.topics.map((topic, index) =>( 
                  <li key={index} className='hover:text-cyan-kodemiapp'>
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