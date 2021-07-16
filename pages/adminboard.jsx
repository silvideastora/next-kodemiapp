
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import AdminProfileCard from '../components/AdminProfileCard'
import ModuleBox from '../components/ModuleBox'
import Modules from '../config/modules.json'
import admin from '../config/admin.json'
import Posts from '../components/Posts'
import Layout from '../components/Layout'
import { GetPosts } from '../lib/api'
import GenerationsKoders from '../components/GenerationBox/GenerationsKoders'
import Router from 'next/router'

export default function AdminBoard() {
  const [posts, setPosts] = useState([])
  useEffect(async () => {
    if (typeof window !== 'undefined') {
      const token = window.localStorage.getItem('token')
      const typeUser = window.localStorage.getItem('typeUser')
      if (!token || typeUser === 'Koder logged') {
        Router.push('login')
      }
    }

    const generationNumber = window.localStorage.getItem('numberGeneration')
    const postsResponse = await GetPosts({
      generation: {
        bootcamp: 'JS',
        number: parseInt(generationNumber)
      },
    })
    setPosts(postsResponse.data)
    console.log('numero de generacion:', generationNumber, postsResponse.data )
  }, [])

  return (
    <Layout footer={false}>
      <div className='container'>
        <div className='container h-auto xs:hidden'>
          <img className='object-cover h-auto w-full' src='../images/banner-ka.png' />
        </div>
        <div className={classNames(
          'grid',
          'grid-cols-2',
          'py-6 sm:py-12 md:py-16',
          'px-3',
          'xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3',
          'gap-y-4 lg:gap-y-16 lg:gap-x-8',
          'mx-auto'
        )}>
          <AdminProfileCard admin={admin} />
          <div className='lg:col-span-2 sm:grid-col-1'>
            <Posts posts={posts} isAdmin={true} />
          </div>
          <div className='col-span-1 lg:col-span-3'>
            <GenerationsKoders/>
          </div>
          <div className='col-span-1 lg:col-span-3'>
            <ModuleBox modules={Modules} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
