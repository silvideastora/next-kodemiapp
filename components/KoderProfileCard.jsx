//import React from 'react'
import classNames from 'classnames'
import { useState } from 'react'
import Modal from 'react-modal'
import KoderProfileForm from './KoderProfileForm'

export default function KoderProfileCard({ koder }) {
  console.log(koder)
  const [activeModal, setActiveModal] = useState(false)
  const changeProfile = (koder) => {
    setActiveModal(true)
  }
  const closeModal = () => {
    setActiveModal(false)
  }

  return (
    <div >
      <h3 className={classNames(
          'mb-2 hidden sm:block'
        )}>Perfil</h3>
      <div className={classNames(
        'bg-black-ka',
        'border border-white-ka',
        'mb-0.5',
        'px-4',
        'py-8',
        'rounded-lg',
        'flex flex-col',
        'items-center justify-center',
        'text-white-ka',
        'w-full',
        'xs:hidden'
      )}>
        <Modal
          isOpen={activeModal}
          className={classNames(
            'absolute',
            'rounded-xl',
            'bg-gray-ka',
            'flex-grow',
            'left-20  top-20',
            'text-white-ka'
          )}
        >
          <KoderProfileForm closeModal={closeModal} />
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
            src='/images/nayeli.png'
          />
          <i onClick={(e) => changeProfile(koder)} className={classNames(
            'block',
            'cursor-pointer',
            'far fa-edit',
            'hover:text-cyan-ka',
            'mt-1',
            'text-center'
          )}>
          </i>
        </div>
        <div className={classNames(
          'pt-5',
          ' text-center')} >
          <h3 className={classNames(
            'font-medium',
            'lg:text-xl',
            'text-base '
          )}>
            {koder.firstName} {koder.lastName}
          </h3>
          <span className={classNames(
            'text-xs',
            ' lg:text-base'
          )}>
            <i className={classNames(
              'fab fa-github',
              ' mr-2'
            )} />
            @{koder.gitHub}
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
    </div>
  )
}
