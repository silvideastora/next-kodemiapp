import { useRouter } from 'next/router'
import ResourcesContainer from '../../components/ResourcesContainer'
import {useState, useEffect} from 'react'

export default function ResourcesScreen () {

  useEffect(() => {
    if( typeof window !== 'undefined'){
      const token = window.localStorage.getItem('token')
      if( !token ) {
        Router.push('login')
      }
    }
  }, [])

	const [resources, setResources] = useState([])
  useEffect(() => {
		fetch('http://kodemiaappback-chatty-bandicoot-kf.mybluemix.net/koders/60dfce7b5a54fc3f5c716090')
		.then(response => response.json())
		.then(data => setResources(data.resources));
	},[])

  return (
    <div className='flex-wrap h-full grid grid-cols-auto gap-4'>
      <ResourcesContainer resources={resources}/>    
    </div>
  )
    
}
