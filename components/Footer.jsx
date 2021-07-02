import React from "react";
import logo from "../src/images/logo.svg";
import Nav from "./Nav";
import NavItem from "./NavItem";
import Icons from "./Icons";
import Image from "next/image";
// import Button from "./Button";

export default function Footer() {
  return (
    <footer className="container mx-auto px-5 md:px-10 sm:px-8 xl:px-0">
      <div className="sm:pl-4">
      <Image src={logo} alt="Logo" width="128" height="35"/>
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
        <Icons/>
        {/* <Button/> */}
        <div className="my-4">
          <p>Tonalá 10, Roma Norte, Cuauhtémoc,</p>
          <p>03800 Ciudad de México, CDMX</p>
        </div>
        <div className="flex justify-between border-t-2 border-white">
          <p className="mt-3">Kodemia<span>&copy</span> 2021. Todos los derechos reservados</p>
          <p className="mt-3">Aviso de Privacidad</p>
        </div>
        
      </div>
    </footer>
  );
}
