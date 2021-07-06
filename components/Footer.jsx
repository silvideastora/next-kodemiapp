import React from 'react'
import Nav from './Nav'
import NavItem from './NavItem'
import classNames from 'classnames'
import Icons from './Icons'

export default function Footer() {
  return (
    <footer className={classNames(
      'container mx-auto',
      'px-5 md:px-10 sm:px-8 xl:px-0'
    )}>
      <div className='sm:pl-4 xl:px-0'>
        <img src='/images/logo.svg' alt="Logo" className={classNames(
        'w-32'
        )}
        />
        <div>
          <Nav>
            <NavItem href='/https://kodemia.mx/#bootcamps' className='hover:text-cyan-ka'>
              Programas
            </NavItem>
            <NavItem href='/featured'>
              |
            </NavItem>
            <NavItem href='/https://kodemia.mx/empresas'>Empresas</NavItem>
            <NavItem href='/#'>
              |
            </NavItem>
            <NavItem href='/https://kodemia.mx/login'>Alumnos </NavItem>
          </Nav>
        </div>
        <div>
          <Icons/>
        </div>
        <div className='my-4'>
          <p>Tonalá 10, Roma Norte, Cuauhtémoc,</p>
          <p>03800 Ciudad de México, CDMX</p>
        </div>
        <div className={classNames(
          'flex',
          'justify-between',
          'border-t-2 border-white'
        )}>
          <p className='mt-3'>Kodemia<span>&copy</span> 2021. Todos los derechos reservados</p>
          <p className='mt-3'>Aviso de Privacidad</p>
        </div>
        
      </div>
    </footer>
  );
}
