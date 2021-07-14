import classNames from 'classnames'
import {useState} from 'react'
import Modal from 'react-modal'

export default function KoderProfileCard({ admin }) {
    const [activeModal, setActiveModal] = useState (false)     
    const changeProfile = (admin) => {
      setActiveModal (true)
    }
    const closeModal = () => {
      setActiveModal (false)
    }
  
    return (
      
        <div className={classNames(
          'bg-black-ka',
          'border border-white-ka',
          'mb-0.5',
          'px-4',
          'py-2',
          'rounded-lg',
          'flex flex-col',
          'items-center justify-center',
          'text-white-ka',
          'w-full',
          'xs:hidden'
      )}>
        <Modal
          isOpen={activeModal}
          className= {classNames(
            'absolute',
            'rounded-xl',
            'bg-gray-ka',
            'flex-grow',
            'left-20  top-20',
            'text-white-ka'
          )}  
        >
          <div className={classNames(
            'max-w-xs',' p-10'
            )}>
            <form>
              <div className={classNames('mb-4')}>
                <label classNameName={classNames(
                  'label-modal'
                  )} for='firstName'>
                    Nombre
                </label>
                <input className={classNames('input-modal')}
                  id='username' type='text' placeholder='Nombre'/> 
              </div>
              <div className={classNames('mb-4')}>
                <label className={classNames(
                  'label-modal'
                  )} for='lastName'>
                    Apellido
                </label>
                <input className={classNames('input-modal')}
                  id='username' type='text' placeholder='Apellido'/> 
              </div>
              <div className={classNames('mb-4')}>
                <label className={classNames(
                  'label-modal'
                  )} for='imagen'>
                    Tu imagen
                </label>
                <input className={classNames(
                  'input-modal'
                  )} id="username" type="text" placeholder="Tu foto"/> 
              </div>
              <div className={classNames('mb-4')}>
                <label className={classNames(
                  'label-modal')} for='text'>
                  Github
                </label>
                <input className={classNames(
                  'input-modal'
                  )} id='github' type='text' placeholder='name@github.com'/>
                <p className={classNames(
                  'text-white-ka text-xs'
                  )}>Ingresa tu github</p>
              </div>
              <div className={classNames(
                'flex ',
                'items-center',
                'justify-between'
                )}>
                <button className={classNames(
                  'button-ka',
                  'hover:bg-cyan-ka'
                  )} type="button" >
                  Enviar
                </button>
                <a className={classNames(
                  'align-baseline', 
                  'inline-block',
                  'hover:text-cyan-ka',
                  'text-sm text-white-ka'
                  )} href="#" onClick={closeModal}>
                  Cancelar
                </a>
      </div>
    </form>
  </div>
        </Modal>
      <div className={classNames(
        'mx-auto',
        'mt-2'
      )}>
        <img 
          className={classNames(
            'rounded-full',
            'w-24'
        )}
          src={admin.image}   
        />
        <i onClick={(e) => changeProfile(admin)}  className={classNames(
          'block',
          'cursor-pointer',
          'far fa-edit',
          'hover:text-cyan-ka',
          'mt-1',
          'text-center'
        )}>
        </i>
      </div>
      <div className= {classNames(
        'pt-5',
        ' text-center')} >
        <h3 className={classNames(
          'font-medium',
          'lg:text-xl',
          'text-base '
        )}>
          {admin.name} {admin.lastName}
        </h3>
          <span className={classNames(
            'text-xs',
            ' lg:text-base'
          )}>
            <i  className={classNames(
              'fab fa-github',
              ' mr-2' 
            )}/>
            
          </span>
          <p>{admin.location}</p>
          <p className={classNames(
            'font-semibold',
            'pt-0',
            'text-cyan-ka'
          )}>
            
          </p>
      </div>
  </div>
  
  )
  }        