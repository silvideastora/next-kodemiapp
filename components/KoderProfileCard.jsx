//import React from 'react'
import classNames from 'classnames'

export default function KoderProfileCard({ koder }) {

  const changeProfile = (koder) => {
    console.log(koder)
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
