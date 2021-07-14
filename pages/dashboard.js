import Head from 'next/head'
import classNames from 'classnames';
import KoderProfileCard from '../components/KoderProfileCard'
import ModuleBox from '../components/ModuleBox'
import Modules from '../config/modules.json'
import koder from '../config/koder.json'
import Posts from '../components/Posts'
import posts from '../config/posts.json'
import Layout from '../components/Layout'


export default function Home() {
  return (
    <Layout footer={false}>
      <div className={classNames(
        'grid','sm:grid-cols-1','sm:px-8','sm:py-12','md:py-16','lg:grid-cols-3','lg:gap-4', 'xs:grid-cols-1'
        )}>
        <KoderProfileCard koder={koder}/>
        <div className='lg:col-span-2 sm:grid-col-1'>
          <Posts posts={posts}/>
        </div>
        <div className='col-span-1 lg:col-span-3'>
          <ModuleBox modules={Modules}/>
        </div>
      </div>
    </Layout>
  )
}
