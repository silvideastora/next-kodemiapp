import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'

export default function login() {
  return (
    <>
      <body className="bg-black">
        <Navbar />
        <div className="container mx-auto px-24 px-auto flex justify-center items-center h-screen">
        <div className="flex-none justify-center items-center h-3/4 max-w-full md:max-w-md xl:max-w-lg">
          <div className="flex-row justify-center items-center bg-gray-900 w-48 relative">
            <h2 className="block text-center my-4">Bienvenido</h2>
            <label className="block text-center" htmlFor="">Usuario</label>
            <input className="block rounded-r-lg" type="text" placeholder="usuario@ejemplo.com" />
            <label className="block text-center" htmlFor="">Contraseña</label>
            <input className="block rounded-r" type="password" placeholder="contraseña" />
            <button
              class="mt-4 w-full flex items-center justify-center rounded-md bg-transparent hover:bg-acua-ka text-white border-2 border-acua-ka"
              type="submit"
            >
              Ingresar
            </button>
          </div>
        </div>
        </div>
        
      </body>
      <Footer/>

    </>
  );
}
