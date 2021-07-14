
import Link from 'next/link'
import classNames from 'classnames'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <section className='bg-black-ka-variant'>
        <div className={classNames(
          'h-screen',
          'flex',
          'items-center',
          'px-5 md:px-10 sm:px-8 xl:px-0'
        )}>
          <div className='max-w-full md:max-w-md xl:max-w-lg'>
            <h2 className={classNames(
              'text-white-ka font-semibold',
              'md:text-left lg:text-3xl xl:text-4xl text-center text-2xl',
              '-mt-24'
            )}>
              ¿Listo para transformar tu vida programando?
            </h2>
            <Link href='/login'>
              <button
                className={classNames(
                  'mt-6 w-full md:w-1/2 h-10',
                  'flex',
                  'items-center justify-center',
                  'rounded-md bg-transparent text-white-ka border-2 border-cyan-ka',
                  'hover:bg-cyan-ka hover:text-black-ka hover:font-bold'
                )}
                type='submit'
              >
                Iniciar sesión
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
