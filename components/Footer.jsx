import React from 'react'
import Nav from './Nav'
import NavItem from './NavItem'
import classNames from 'classnames'

export default function Footer() {
  return (
    <footer className={classNames(
      'container mx-auto',
      'px-5 md:px-10 sm:px-8 xl:px-0'
    )}>
      <div className="sm:pl-4">
        <img src='/images/logo.svg' alt="Logo" className={classNames(
        'w-32'
        )}
        />
        <div>
          <Nav className="">
            <NavItem href="/featured" isActive>
              Programas
            </NavItem>
            <NavItem href="/featured">
              |
            </NavItem>
            <NavItem href="/popular">Empresas</NavItem>
            <NavItem href="/featured">
              |
            </NavItem>
            <NavItem href="/recent">Alumnos </NavItem>
          </Nav>
        </div>
        <div className={classNames(
          'w-full md:w-2/3 lg:w-1/4',
          'flex justify-around'
        )}
        >
          {/* {
            Aquí va el map
          } */}
        </div>
        <div className="my-4">
          <p>Tonalá 10, Roma Norte, Cuauhtémoc,</p>
          <p>03800 Ciudad de México, CDMX</p>
        </div>
        <div className={classNames(
          'flex justify-between',
          'border-t-2 border-white'
        )}>
          <p className="mt-3">Kodemia<span>&copy</span> 2021. Todos los derechos reservados</p>
          <p className="mt-3">Aviso de Privacidad</p>
        </div>
        
      </div>
    </footer>
  );
}
