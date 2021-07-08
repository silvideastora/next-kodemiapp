//import React from 'react'
import classNames from 'classnames'
import {useState} from 'react'
import Modal from 'react-modal'

export default function KoderProfileCard({ koder }) {
  const [activeModal, setActiveModal] = useState (false)     
  const changeProfile = (koder) => {
    setActiveModal (true)
  }
  const closeModal = () => {
    setActiveModal (false)
  }

  return (
    <div className={classNames(
        'bg-black',
        'mb-0.5',
        'py-6 px-4',
        'rounded-lg',
        'flex flex-col',
        'items-center justify-center',
        'text-white',
        'w-full',
        'xs:hidden'
    )}>
      <Modal
        isOpen={activeModal}
        className=' absolute bg-cyan-kodemiapp top-60 left-60 bottom-60 right-60'
      >
        <div>
          <button onClick={closeModal}>close</button>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
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
          'w-20'
      )}
        src={koder.image}
        
      />
      <i  onClick={(e) => changeProfile(koder)}  className='far fa-edit block text-center'></i>
    </div>
    <div className='pt-5 text-center'>
      <h3 className={classNames(
        'font-medium',
        'text-base lg:text-xl'
      )}>
        {koder.name} {koder.lastName}
      </h3>
        <span className='text-xs lg:text-base'>
          <i  className='fab fa-github mr-2' />
          @{koder.github}
        </span>
        <p>{koder.location}</p>
        <p className={classNames(
          'pt-4',
          'text-cyan-kodemiapp'
        )}>
          Generación {koder.generation} 
        </p>
    </div>
</div>
)
}
