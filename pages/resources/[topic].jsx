import { useRouter } from 'next/router'
import ResourcesContainer from '../../components/ResourcesContainer'
import {useState, useEffect} from 'react'

export default function ResourcesScreen () {
	const [resources, setResources] = useState([])
  useEffect(() => {
		fetch('http://kodemiaappback-chatty-bandicoot-kf.mybluemix.net/resources/byModule')
		.then(response => response.json())
		.then(data => setResources(data.resources));
	},[])
    return (
        <div className='flex-wrap h-full grid grid-cols-auto gap-4'>
        <ResourcesContainer resources={resources}/>    
    </div>
    )
    
}
