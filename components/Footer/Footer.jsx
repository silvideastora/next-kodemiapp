import React from 'react'
import Nav from './Nav'
import NavItem from './NavItem'
import classNames from 'classnames'
import FooterIcons from './FooterIcons'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={classNames(
      'container mx-auto',
      'px-5 md:px-10 sm:px-8 xl:px-0'
    )}>
      <div className='sm:pl-4 xl:px-0'>
        <img 
          src='/images/logo.svg' 
          alt='Logo' 
          className={classNames('w-32 icon-hover')}
        />
        <div>
          <Nav>
            <NavItem>
              <Link href='https://kodemia.mx/#bootcamps' target='_blank'>
                <a>Programas</a>
              </Link>
            </NavItem>
            <NavItem href='/#'>
              |
            </NavItem>
            <NavItem>
              <Link href='https://kodemia.mx/empresas' target='_blank'>
                <a>Empresas</a>
              </Link>
            </NavItem>
            <NavItem href='/#'>
              |
            </NavItem>
            <NavItem>
              <Link href='https://kodemia.mx/login' target='_blank'>
                <a>Alumnos</a>
              </Link>
            </NavItem>
          </Nav>
        </div>
        <div>
          <FooterIcons/>
        </div>
        <div className='my-4'>
          <p>Tonalá 10, Roma Norte, Cuauhtémoc,</p>
          <p>03800 Ciudad de México, CDMX</p>
        </div>
        <div className={classNames(
          'flex',
          'justify-between',
          'border-t-2 border-white-ka'
        )}>
          <p className='mt-3'>Kodemia<span>&copy;</span> 2021. Todos los derechos reservados</p>
          <Link href='https://cdn.kodemia.mx/docs/legal/politica-de-privacidad-kodemia.pdf'>
            <a className='mt-3'>Aviso de Privacidad</a>
          </Link>
        </div>
        
      </div>
    </footer>
  );
}
