
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import AdminProfileCard from '../components/AdminProfileCard'
import ModuleBox from '../components/ModuleBox'
import Modules from '../config/modules.json'
import admin from '../config/admin.json'
import Posts from '../components/Posts'
import Layout from '../components/Layout'
import { GetPosts } from '../lib/api'


export default function AdminBoard() {
  const [posts, setPosts] = useState([])
  useEffect(async () => {
    const postsResponse = await GetPosts({
      generation: {
        bootcamp: 'JS',
        number: 10
      },
    })
    console.log(postsResponse)
    setPosts(postsResponse.data)
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
          'p-2 px-8 sm:py-12 md:py-16',
          'xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3',
          'lg:gap-4',
          'mx-auto mt-10'
        )}>
          <AdminProfileCard admin={admin} />
          <div className='lg:col-span-2 sm:grid-col-1'>
            <Posts posts={posts} isAdmin={true} />
          </div>
          <div className='col-span-1 lg:col-span-3'>
            <ModuleBox modules={Modules} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
