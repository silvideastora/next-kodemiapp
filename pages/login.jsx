import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import classNames from 'classnames'

export default function login() {
  return (
    <>
      <section className='bg-black'>
        <Navbar />
        <div className={classNames(
          'container',
          'flex',
          'justify-center items-center',
          'h-screen',
          'mx-auto',
          'px-5 md:px-10 sm:px-8 xl:px-0'
        )}>
          <div className={classNames(
            'flex-none',
            'w-full md:w-3/4 lg:w-2/3 xl:w-1/4'
          )}>
            <div className={classNames(
              'flex-row',
              'justify-center items-center',
              'bg-transparent'
            )}>
              <form class='relative'>
                <h2 className={classNames(
                  'block',
                  'text-center',
                  'mb-14',
                  'text-2xl'
                )}
                  >Bienvenido<span className={classNames(
                    'text-cyan-ka',
                    'animate-ping',
                    'text-5xl'
                  )}>_</span></h2>
                {/* <div className='flex-auto flex space-x-3 justify-between'>
                  <div className={classNames(
                        'mt-12 w-6/12 h-10',
                        'flex items-center'
                      )}>
                    <input
                      type='radio'
                      className='ml-5'
                    />
                    <label className='ml-5'>
                      Koder
                    </label>
                    <input
                      type='radio'
                      className='ml-5'
                    />
                    <label className='ml-5'>
                      Mentor
                    </label>
                  </div>
                </div> */}
                
                <label className='block text-center my-6 text-xl mb-4 mt-10'>
                  Usuario
                </label>
                {/* <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
    </svg> */}
                <input
                  className={classNames(
                    'focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none',
                    'w-full text-lg py-1 pl-5',
                    'border-2 border-cyan-ka rounded-md bg-black'
                  )}
                  type='text'
                  aria-label='Filter projects'
                  placeholder='usuario@ejemplo.com'
                />
                <label className='block text-center mb-4 mt-10 text-xl'>
                  Contraseña
                </label>
                <input
                  className={classNames(
                    'focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none',
                    'w-full text-lg py-1 pl-5',
                    'border-2 border-cyan-ka rounded-md bg-black'
                  )}
                  type='password'
                  aria-label='Filter projects'
                  placeholder='contraseña'
                />
                <Link href='/password-forgot'>
                  <a className={classNames(
                    'mt-2 flex justify-end',
                    'hover:underline hover:text-cyan-ka'
                  )}>Olvide la contraseña</a>
                </Link>
                <button
                  className={classNames(
                    'mt-12 w-full h-10',
                    'flex items-center justify-center',
                    'rounded-md bg-transparent text-white border-2 border-cyan-ka',
                    'hover:bg-cyan-ka hover:text-black'
                  )}
                  type='submit'
                >
                  Ingresar
                </button>
                <Link href='/help'>
                  <a className={classNames(
                    'flex justify-end',
                    'mt-2',
                    'hover:underline hover:text-cyan-ka'
                  )}>Necesito ayuda</a>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
