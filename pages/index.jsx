import Head from "next/head";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <body className="bg-black">
        <Navbar />
        <div className="container mx-auto flex items-center h-screen md:px-10 sm:px-8 xl:px-0">
          <div className="max-w-full md:max-w-md xl:max-w-lg">
            <h2 class="text-white text-center md:text-left font-semibold text-2xl md:text-2xl lg:text-3xl xl:text-4xl -mt-24">
              ¿Listo para transformar tu vida programando?
            </h2>
            <Link href="/login">
              <button
                class="mt-6 w-full h-10 md:w-1/2 flex items-center justify-center rounded-md bg-transparent hover:bg-acua-ka text-white border-2 border-acua-ka"
                type="submit"
              >
                Iniciar sesión
              </button>
            </Link>
            {/* <Button /> */}
          </div>
        </div>
      </body>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}
