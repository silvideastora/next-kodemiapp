
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import classNames from 'classnames'

export default function Home() {
  return (
    <>
      <section className="bg-black">
        <Navbar />
        <div className={classNames(
          'container mx-auto h-screen',
          'flex items-center',
          'md:px-10 sm:px-8 xl:px-0'
        )}>
          <div className="max-w-full md:max-w-md xl:max-w-lg">
            <h2 className={classNames(
              'text-white font-semibold',
              'md:text-left md:text-2xl lg:text-3xl xl:text-4xl',
              'text-center text-2xl  -mt-24'
            )}>
              ¿Listo para transformar tu vida programando?
            </h2>
            <Link href="/login">
              <button
                className={classNames(
                  'mt-6 w-full md:w-1/2 h-10',
                  'flex items-center justify-center',
                  'rounded-md bg-transparent hover:bg-acua-ka text-white border-2 border-acua-ka'
                )}
                type="submit"
              >
                Iniciar sesión
              </button>
            </Link>
            {/* <Button /> */}
          </div>
        </div>
      </section>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  )
}
