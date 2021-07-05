import Head from 'next/head'
import KoderProfileCard from '../components/KoderProfileCard'
import ModuleBox from '../components/ModuleBox'
import Modules from '../config/modules.json'
import koder from '../config/koder.json'
export default function Home() {
  return (
    <div className='p-24 grid grid-cols-3 gap-4'>
      <KoderProfileCard koder={koder}/>
      <div className='col-span-2'>avisos</div>
      <div className='col-span-3'>
        <ModuleBox modules={Modules}/>
      </div>
    </div>
      
  )
}
