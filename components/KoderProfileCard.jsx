import React from 'react'
import Image from 'next/image'
import profilePic from '../assets/images/Nayeli.png'
import classNames from 'classNames'



export default function KoderProfileCard({koder}) {

    return (
    <div className={classNames(
        'flex items-center',
        'justify-center',
        'w-full')}>
    <div className='w-full'>
        <div className={classNames(
            'bg-black',
            'py-6',
            'rounded-lg',
            'shadow-xl',
            'text-white')}>
            <div className={classNames(
                'mx-auto', 
                'px-7',
                'w-3/6  ')}>
                <Image className={classNames(
                    'h-auto',
                    'max-w-full',
                    'rounded-full w-full'
                )} src={profilePic}/>
            </div>
            <div className='p-2'>
            <h3 className={classNames(
                'font-medium',
                'text-center text-xl text-white'
                )}>{koder.name} {koder.lastName}</h3>
                <div className={classNames(
                    'font-semibold',
                    'text-center text-gray-400 text-xs')}>
                </div>
                <div>
                    <span className='block text-center px-2 py-2'><i className="fab fa-github"></i> @{koder.github}</span>
                    <span className='block text-center px-2 py-2'>{koder.location}</span>
                        <span class='block text-center px-2 py-2 text-blue-light'>Generación {koder.generation} </span>
                </div>
            </div>
        </div>
    </div>
    
    </div>
    
)
}
