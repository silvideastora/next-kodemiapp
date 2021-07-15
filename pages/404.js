import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

export default function Error() {
    return (
        <Layout>
          <div className='h-screen mx-auto text-center mt-12'>
            <h2 className='text-error-ka text-2xl mb-3'>Error 404</h2>
            <h4>Por favor regresa a <Link href='/'><a className='text-cyan-ka underline'>home</a></Link></h4>
          </div>
        </Layout>
    )
}
