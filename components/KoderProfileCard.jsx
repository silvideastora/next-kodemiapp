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
        'bg-black-ka',
        'mb-0.5',
        'px-4',
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
          'bg-black-ka',
          'left-60 bottom-60 right-60 top-60'
        )}  
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
          'w-24'
      )}
        src={koder.image}   
      />
      <i onClick={(e) => changeProfile(koder)}  className={classNames(
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
        {koder.name} {koder.lastName}
      </h3>
        <span className={classNames(
          'text-xs',
          ' lg:text-base'
        )}>
          <i  className={classNames(
            'fab fa-github',
            ' mr-2' 
          )}/>
          @{koder.github}
        </span>
        <p>{koder.location}</p>
        <p className={classNames(
          'font-semibold',
          'pt-0',
          'text-cyan-ka'
        )}>
          Generación {koder.generation} 
        </p>
    </div>
</div>
)
}
