import React, {useState} from 'react'
import logoIcon from '../assets/icons/Tema-09 (2).svg'
import Image from 'next/image'
import classNames from 'classnames'
import Modules from '../config/modules.json'


export default function ModuleBox() {
  const [selectedModule, setSelectedModule] = useState({});
  const changeModule = (module)=> {
    setSelectedModule(module);
  }
  return (
      <div className='grid grid-cols-3 gap-4'>
        <div >
            <div className={classNames(
            'bg-gray-900',
            'py-6',
            'shadow-xl rounded-lg',
            'text-white'
            )}>
              <div className='p-2'>
                  <ul> 
                    {Modules.map((module,index) => ( 
                      <li onClick={(e) => changeModule(module)} key={index} className={classNames (
                        'block text-xl text-center font-medium',
                        'hover:text-blue-light',
                        'px-2 py-2' 
                      )}>{module.title}</li>
                    ) ) }
                  </ul>
                </div>
            </div>
        </div>
        <div className="col-span-2">
          <div className= {classNames(
            'bg-gray-900',
            'py-11', 
            'rounded-lg',
            'text-white'
          )} >
            <h3>Módulo {selectedModule.title}</h3>
            <p>{selectedModule.description}</p>
            <div>
              <ul className='grid grid-cols-6'>
                <li>
                  <Image src={logoIcon} alt=''/>
                </li>
                <li>
                  <Image src={logoIcon} alt=''/>
                </li>
                <li>
                  <Image src={logoIcon} alt=''/>
                </li>
                <li>
                  <Image src={logoIcon} alt=''/>
                </li>
                <li>
                  <Image src={logoIcon} alt=''/>
                </li>
                <li>
                  <Image src={logoIcon} alt=''/>
                </li>
                <li>
                  <Image src={logoIcon} alt=''/>
                </li>
                <li>
                  <Image src={logoIcon} alt=''/>
                </li>
                <li>
                  <Image src={logoIcon} alt=''/>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
  }