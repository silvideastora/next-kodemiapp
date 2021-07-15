import classNames from 'classnames'
import {useState} from 'react'
import Modal from 'react-modal'
import AdminProfileForm from './AdminProfileForm'

export default function KoderProfileCard({ admin }) {
    const [activeModal, setActiveModal] = useState (false)     
    const changeProfile = (admin) => {
      setActiveModal (true)
    }
    const closeModal = () => {
      setActiveModal (false)
    }
  
    return (
    <div>
				<h3>Perfil</h3>
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
          <AdminProfileForm closeModal={closeModal}/>
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
          </span>
          <p>{admin.location}</p>
          <p className={classNames(
            'font-semibold',
            'pt-0',
            'text-cyan-ka'
          )}>
            Administradora
          </p>
      </div>
  </div>
  </div>
  )
  }        