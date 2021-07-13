import { useRouter } from 'next/router'
import ResourcesContainer from '../../components/ResourcesContainer'
import resources from '../../config/resources.json'

export default function ResourcesScreen () {
    const router = useRouter ()
    return (
        <div className='flex-wrap p-12 grid grid-cols-auto gap-4'>
        <ResourcesContainer resources={resources}/>    
    </div>
    )
    
}