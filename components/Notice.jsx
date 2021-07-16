import Navbar from './Nav/Navbar'
import classNames from 'classnames'
import React from 'react'
import { useForm } from 'react-hook-form'
import { createPosts } from '../lib/api'

export default function Notice({closeModal}) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = async (data, e) => {
  const {generation, contents, title} = data
  data = {title, info: contents, generation: {
    bootcamp:'JS',
    number: parseInt(generation)
  }}

    const token = window.localStorage.getItem('token') 
    const response= await createPosts(data, token)
    console.log(response)
    console.log(token)
    
    e.target.reset();
  };

  return (
    <>
      <form 
        className={classNames(
          'lg:border-2 lg:border-gray-ka',
          'rounded-md',
          'p-0 lg:p-8'
        )} 
        onSubmit={handleSubmit(onSubmit)}>
        
        
        <label className='block text-left my-6 text-xl mb-0 mt-0'>
          Título
        </label>
        <input {...register('title', {
          required: { value: true, message: 'Campo obligatorio...😣' },
          minLength: { value: 2, message: 'Minimo dos caracteres 2️⃣' },
        })}
          className={classNames(
            'focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none focus:bg-black',
            'w-full text-lg py-1 pl-2',
            'border border-cyan-ka rounded-md bg-black-ka'
          )}
          type='text'
          aria-label='Filter projects'
        />
        {errors.title && (
          <span className='text-error-ka'>
            <li>{errors.title.message}</li>
          </span>
        )}
        <label className='block text-left text-xl mb-0 mt-2'>
          Generación
        </label>
        <select {...register('generation', {
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
            'mt-0'
          )}
        >
          <option value= {11} >JS 11</option>
          <option value={12}>JS 12</option>
        </select>
        {errors.generation && (
          <span className='text-error-ka'>
            <li>{errors.generation.message}</li>
          </span>
        )}
        <label className='block text-left my-6 text-xl mb-0 mt-2'>
          Contenido
        </label>
        <textarea {...register('contents', {
          required: { value: true, message: 'Campo obligatorio...😣' },
          minLength: { value: 2, message: 'Minimo dos caracteres 2️⃣' },
        })}
          className={classNames(
            'focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none',
            'w-full text-lg py-1 pl-5',
            'border-2 border-cyan-ka rounded-md bg-black-ka'
          )}
          type='text'
          aria-label='Filter projects'
        />
        {errors.contents && (
          <span className='text-error-ka'>
            <li>{errors.contents.message}</li>
          </span>
        )}
        <a className={classNames(
        'align-baseline', 
        'inline-block',
        'hover:text-cyan-ka',
        'text-sm text-white-ka'
        )} onClick={closeModal}>
        Cancelar
      </a> 
        <button
          className={classNames(
            'mt-4 h-10',
            'flex items-center justify-center',
            'rounded-md bg-transparent text-white-ka border border-cyan-ka',
            'hover:bg-cyan-ka hover:text-black-ka'
          )}
          type='submit'
        >
          Enviar
        </button>
      </form>
              
    </>
  )
}
