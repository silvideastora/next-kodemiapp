import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import Burger from './Burger'


export default function Navbar( {hamburger = false} ) {
  return (
    <nav
      className={classNames(
        'bg-black-ka bg-opacity-25',
        'flex', 
        'items-center',
        'sticky top-0'
      )}
    >
      <div
        className={classNames(
          'container',
          'mx-auto h-16 py-1',
          'flex',
          'justify-between items-center',
          'bg-black-ka bg-opacity-25',
          'px-5 md:px-10 sm:px-8 xl:px-0'
        )}
      >
        <Link href='/'>
          <a>
          <img
            src='/images/logo.svg'
            alt='Logo'
            className={classNames('w-32 icon-hover')}
          />
          </a>
        </Link>
        {
          hamburger && ( <>
            <Burger/>
            </> )
        }
        
        
        
      </div>
    </nav>
  );
}
