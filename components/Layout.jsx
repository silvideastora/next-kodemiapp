import { useRouter } from 'next/dist/client/router'
import nProgress from 'nprogress'
import React, { useEffect } from 'react'
import Navbar from './Nav/Navbar'
import Footer from './Footer/Footer'

export default function Layout({children, footer = true}) {
  
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
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
      <main className='container mx-auto'>{children}</main>
      {
        footer && (<Footer/>)
      }
      
    </>
  )
}
