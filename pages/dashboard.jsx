
import classNames from 'classnames';
import KoderProfileCard from '../components/KoderProfileCard'
import ModuleBox from '../components/ModuleBox'
import Modules from '../config/modules.json'
import koder from '../config/koder.json'
import Posts from '../components/Posts'
import posts from '../config/posts.json'
import Layout from '../components/Layout'
import Router from 'next/router'
import { useEffect } from 'react'

export default function Dashboard() {

  useEffect(() => {
    if( typeof window !== 'undefined' ){
      const token = window.localStorage.getItem('token')
      const typeUser = window.localStorage.getItem('typeUser')
      if ( !token && typeUser !== 'Koder logged'){
        Router.push('login')
      }
    }
  }, [])

  return (
    <Layout footer={false}>
      <div className='container'>
        <div className='container h-auto xs:hidden'>
          <img className='object-cover h-auto w-full' src='../images/banner-ka.png'/>
        </div>
        <div className={classNames(
          'grid',
          'grid-cols-2',
          'p-2',
          'px-8',
          'sm:py-12',
          'xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3',
          'md:py-16',
          'lg:gap-4',
          'mx-auto mt-10'
        )}>
        <KoderProfileCard koder={koder}/>
        <div className='lg:col-span-2 sm:grid-col-1'>
          <Posts posts={posts}/>
        </div>
        <div className='col-span-1 lg:col-span-3'>
          <ModuleBox modules={Modules}/>
        </div>
      </div>
    </div>
    </Layout>
  )
}
