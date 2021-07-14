import { useRouter } from 'next/dist/client/router'
import nProgress from 'nprogress'
import React, { useEffect } from 'react'
import Navbar from './Nav/Navbar'
import Footer from './Footer'

export default function Layout({children}) {
  
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      console.log(url)
      nProgress.start()
    }

    router.events.on('routeChangeStart', handleRouteChange)

    router.events.on('routeChangeComplete', () => nProgress.done())

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <>
      <Navbar/>
      <main className='bg-black-ka-variant py-4'>{children}</main>
      <Footer/>
    </>
  )
}
