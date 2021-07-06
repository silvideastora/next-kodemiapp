import { useRouter } from 'next/router'
import ResourcesContainer from '../../components/ResourcesContainer'

export default function ResourcesScreen (props) {
    const router = useRouter ()
    console.log(router.query.topic);
    return (
        <div className='flex-wrap p-12 grid grid-cols-auto gap-4'>
        <ResourcesContainer />    
    </div>
    )
    
}