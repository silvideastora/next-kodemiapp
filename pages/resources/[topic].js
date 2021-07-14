import { useRouter } from 'next/router'
import ResourcesContainer from '../../components/ResourcesContainer'
import {useState, useEffect} from 'react'

export default function ResourcesScreen () {
	const [resources, setResources] = useState([])
  useEffect(() => {
		fetch('https://private-b1ad8a-oportunos1.apiary-mock.com/resources')
		.then(response => response.json())
		.then(data => setResources(data.resources));
	},[])
    return (
        <div className='flex-wrap h-full grid grid-cols-auto gap-4'>
        <ResourcesContainer resources={resources}/>    
    </div>
    )
    
}
