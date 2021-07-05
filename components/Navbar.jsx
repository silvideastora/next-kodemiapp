import React from 'react';
// import logo from '../src/images/logo.svg'
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

export default function Navbar() {
  return (
    <div
      className={classNames(
        'bg-gray-900 bg-opacity-25',
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
          'bg-gray-900 bg-opacity-25',
          'px-5 md:px-10 sm:px-8 xl:px-0'
        )}
      >
        <Link href='/'>
          <a>
          <img
            src='/images/logo.svg'
            alt='Logo'
            className={classNames('w-32')}
          />
          </a>
          
        </Link>
        {/* <Link href="/login">
          <button
            className={classNames(
              "sm:w-2/3 md:w-1/4 lg:w-1/6 h-9", // responsive
              "flex items-center justify-center", // flex
              "rounded-md border-2 border-acua-ka", // borders
              "bg-transparent hover:bg-acua-ka text-white" // colors, bg
            )}
            type="submit"
          >
            Iniciar sesión
          </button>
        </Link> */}
      </div>
    </div>
  );
}
