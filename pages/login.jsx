import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import Layout from '../components/Layout'
import { KoderLogin, MentorLogin } from '../lib/api'
import Router from 'next/router'

export default function login() {

  const { register, handleSubmit, formState: { errors } } = useForm()


  const onSubmit = async (data, e) => {
    
    if(data.typeUser === 'koder'){
      console.log(data)
      e.target.reset();
      const loginKoder = await KoderLogin(data)
      console.log(loginKoder)
      console.log(loginKoder.data.token)
      localStorage.setItem( 'typeUser', loginKoder.message)
      localStorage.setItem( 'token', loginKoder.data.token)
      Router.push('dashboard')
    } else {
      console.log(data)
      e.target.reset();
      const loginMentor = await MentorLogin(data)
      console.log(loginMentor)
    } 
  };

  return (
    <Layout footer={false}>
      <section className='bg-black-ka-variant'>
        <div className={classNames(
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
              <form className='' onSubmit={handleSubmit(onSubmit)}>
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
                    'bg-black-ka',
                    'border-2 border-cyan-ka',
                    'rounded-md',
                    'h-10',
                    'pl-4',
                    'text-lg',
                    'focus:border-cyan-ka-variant focus:ring-1 focus:ring-cyan-ka-variant focus:outline-none focus:bg-black'
                  )}
                >
                  <option value='koder' className='w-full'>Koder</option>
                  <option value='mentor'>Mentor</option>
                </select>
                {errors.name && (
                  <span className='text-error-ka'>
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
                    'focus:border-cyan-ka-variant focus:ring-1 focus:ring-cyan-ka-variant focus:outline-none focus:bg-black',
                    'w-full text-lg py-1 pl-5',
                    'border-2 border-cyan-ka rounded-md bg-black-ka'
                  )}
                  type='email'
                  aria-label='Filter projects'
                  placeholder='usuario@ejemplo.com'
                />
                {errors.email && (
                  <span className='text-error-ka'>
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
                    'focus:border-cyan-ka-variant focus:ring-1 focus:ring-cyan-ka-variant focus:outline-none focus:bg-black',
                    'w-full text-lg py-1 pl-5',
                    'border-2 border-cyan-ka rounded-md bg-black-ka'
                  )}
                  type='password'
                  aria-label='Filter projects'
                  placeholder='contraseña'
                />
                {errors.password && (
                  <span className='text-error-ka'>
                    <li>{errors.password.message}</li>
                  </span>
                )}
                <button
                  className={classNames(
                    'mt-20 w-full h-10',
                    'flex items-center justify-center',
                    'rounded-md',
                    'bg-transparent text-white-ka', 
                    'border-2 border-cyan-ka',
                    'hover:bg-cyan-ka hover:text-black-ka'
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
    </Layout>
  );
}
