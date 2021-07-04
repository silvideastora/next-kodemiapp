import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import classNames from 'classnames'

export default function login() {
  return (
    <>
      <section className="bg-black">
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
              'flex-row justify-center items-center',
              'bg-transparent'
            )}>
              <form class="relative">
                <h2 className="block text-center mb-14 text-2xl">Bienvenido<span className="text-acua-ka animate-ping text-3xl">_</span></h2>
                <div className="flex-auto flex space-x-3 justify-between">
                  <div className={classNames(
                        'mt-12 w-6/12 h-10',
                        'flex items-center',
                        'rounded-md bg-transparent hover:bg-acua-ka hover:text-black-ka text-white border-2 border-acua-ka'
                      )}>
                    <input
                      type='radio'
                      className='ml-5'
                    />
                    <label className='ml-5'>
                      Koder
                  </label>
                  </div>
                  <div className={classNames(
                        'mt-12 w-6/12 h-10',
                        'flex items-center',
                        'rounded-md bg-transparent hover:bg-acua-ka hover:text-black-ka text-white border-2 border-acua-ka'
                      )}>
                    <input
                      type='radio'
                      className='ml-5'
                    />
                    <label className='ml-5'>
                      Mentor
                  </label>
                  </div>
                </div>
                
                <label className="block text-center my-6 text-xl mb-6 mt-10" htmlFor="">
                  Usuario
                </label>
                {/* <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
    </svg> */}
                <input
                  className={classNames(
                    'focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none',
                    'w-full text-lg py-1 pl-5',
                    'placeholder-acua-ka border-2 border-acua-ka rounded-md bg-black text-acua-ka'
                  )}
                  type='text'
                  aria-label='Filter projects'
                  placeholder='usuario@ejemplo.com'
                />
                <label className="block text-center mb-6 mt-10 text-xl" htmlFor="">
                  Contraseña
                </label>
                <input
                  className={classNames(
                    'focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none',
                    'w-full text-lg py-1 pl-5',
                    'placeholder-acua-ka border-2 border-acua-ka rounded-md bg-black text-acua-ka'
                  )}
                  type="password"
                  aria-label="Filter projects"
                  placeholder="contraseña"
                />
                <Link href="/password-forgot">
                  <a className={classNames(
                    'mt-2 flex justify-end',
                    'hover:underline hover:text-acua-ka'
                  )}>Olvide la contraseña</a>
                </Link>
                <button
                  className={classNames(
                    'mt-12 w-full h-10',
                    'flex items-center justify-center',
                    'rounded-md bg-transparent hover:bg-acua-ka hover:text-black text-white border-2 border-acua-ka'
                  )}
                  type="submit"
                >
                  Ingresar
                </button>
                <Link href="/help">
                  <a className={classNames(
                    'mt-2 flex justify-end',
                    'hover:underline hover:text-acua-ka'
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
