
import classNames from 'classnames';
import KoderProfileCard from '../components/KoderProfileCard'
import ModuleBox from '../components/ModuleBox'
import Modules from '../config/modules.json'
import koder from '../config/koder.json'
import Posts from '../components/Posts'
import posts from '../config/posts.json'
import Layout from '../components/Layout'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { getGenerationById, getKoderById, GetPosts } from '../lib/api';

export default function Dashboard() {
  const [posts, setPosts] = useState([])
  const [dataKoder, setDataKoder] = useState({})
  useEffect(async () => {
    if (typeof window !== 'undefined') {
      const token = window.localStorage.getItem('token')
      const typeUser = window.localStorage.getItem('typeUser')
      if (!token || typeUser !== 'Koder logged') {
        Router.push('login')
      }
      const dataToken = JSON.parse(atob(token.split('.')[1]))
      const idKoder = dataToken.id
      const koderInfo = await getKoderById(idKoder)
      const generationById = await getGenerationById(koderInfo.data.generation)
      const generation = {
        "generation": {
          number: generationById.data.generationNumber,
          bootcamp: "JS"
        }
      }
      const postResponse = await GetPosts(generation, token)
      setPosts(postResponse.data)
      const koderData = { ...koderInfo.data, generation: generationById.data.generationNumber }
      setDataKoder(koderData)
    }
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
          'py-6 md:py-16',
          'px-3',
          'xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3',
          'gap-y-4 lg:gap-y-16 lg:gap-x-8 ',
          'mx-auto'
        )}>
          <KoderProfileCard koder={dataKoder} />
          <div className='lg:col-span-2 sm:grid-col-1'>
            <Posts posts={posts} isAdmin={false}/>
          </div>
          <div className='col-span-1 lg:col-span-3'>
            <ModuleBox modules={Modules} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
