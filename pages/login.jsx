import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'

export default function login() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data, e) => {
    console.log(data)
    e.target.reset();
  };

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
            'w-full md:w-3/4 lg:w-2/3 xl:w-1/4 -mt-32'
          )}>
            <div className={classNames(
              'flex-row',
              'justify-center items-center',
              'bg-transparent'
            )}>
              <form className='relative ' onSubmit={handleSubmit(onSubmit)}>
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
                <select {...register('typeUser', {
                  required: { value: true, message: 'Campo obligatorio...😣' }
                })}
                  className={classNames(
                    'w-full',
                    'bg-black',
                    'border-2 border-cyan-ka',
                    'rounded-md',
                    'h-10',
                    'pl-4',
                    'text-lg'
                  )}
                >
                  <option value='koder'>Koder</option>
                  <option value='mentor'>Mentor</option>
                </select>
                {errors.name && (
                  <span className='text-red-500'>
                    <li>{errors.typeUser.message}</li>
                  </span>
                )}
                <label className='block text-center my-6 text-xl mb-4 mt-10'>
                  Usuario
                </label>
                <input {...register('email', {
                  required: { value: true, message: 'Campo obligatorio...😣' },
                  minLength: { value: 2, message: 'Minimo dos caracteres 2️⃣' },
                })}
                  className={classNames(
                    'focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none focus:bg-black',
                    'w-full text-lg py-1 pl-5',
                    'border-2 border-cyan-ka rounded-md bg-black'
                  )}
                  type='email'
                  aria-label='Filter projects'
                  placeholder='usuario@ejemplo.com'
                />
                {errors.email && (
                  <span className='text-red-500'>
                    <li>{errors.email.message}</li>
                  </span>
                )}
                <label className='block text-center mb-4 mt-10 text-xl'>
                  Contraseña
                </label>
                <input {...register('password', {
                  required: { value: true, message: 'Campo obligatorio...😣' },
                  minLength: { value: 2, message: 'Minimo dos caracteres 2️⃣' },
                })}
                  className={classNames(
                    'focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none',
                    'w-full text-lg py-1 pl-5',
                    'border-2 border-cyan-ka rounded-md bg-black'
                  )}
                  type='password'
                  aria-label='Filter projects'
                  placeholder='contraseña'
                />
                {errors.password && (
                  <span className='text-red-500'>
                    <li>{errors.password.message}</li>
                  </span>
                )}
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
    </>
  );
}
