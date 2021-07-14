import Head from 'next/head'
import classNames from 'classnames';
import KoderProfileCard from '../components/KoderProfileCard'
import ModuleBox from '../components/ModuleBox'
import Modules from '../config/modules.json'
import koder from '../config/koder.json'
import Posts from '../components/Posts'
import posts from '../config/posts.json'


export default function Home() {
  return (
    <div className='container bg-black'>
      <div className='container h-auto bg-black xs:hidden'>
      <img className='object-cover h-auto w-full opacity-50' src='../images/banner.jpg'/>
      </div>
      <div className={classNames(
        'grid','grid-cols-2','p-2','px-8','sm:py-12','sm:grid-cols-1','md:grid-cols-1', 'md:py-16','lg:grid-cols-3','lg:gap-4', 'xs:grid-cols-1','mx-auto'
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
  )
}
