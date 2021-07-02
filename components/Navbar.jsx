import React from "react";
import logo from "../src/images/logo.svg";
import Image from "next/image";
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="bg-gray-900 bg-opacity-25 flex items-center sticky top-0">
      <div className="container mx-auto h-16 py-1 flex justify-between items-center bg-gray-900 bg-opacity-25 px-5 md:px-10 sm:px-8 xl:px-0">
        <Image src={logo} alt="Logo" width="128" height="35" />
        <Link href="/login">
          <button
            class="mt-4 sm:w-2/3 md:w-1/4 lg:w-1/6 h-9 flex items-center justify-center rounded-md bg-transparent hover:bg-acua-ka text-white border-2 border-acua-ka"
            type="submit"
          >Iniciar sesión</button>
        </Link>
      </div>
    </div>
  );
}
