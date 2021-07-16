
import ResourcesContainer from '../../components/ResourcesContainer'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getResources } from '../../lib/api'
import Layout from '../../components/Layout'

export default function ResourcesScreen() {
  const router = useRouter()
  const [resources, setResources] = useState([])

  useEffect(async () => {

    const module = router.query.topic
    const moduleResources = await getResources(module)
    setResources(moduleResources.data)
    if (typeof window !== 'undefined') {
      const token = window.localStorage.getItem('token')
      if (!token) {
        Router.push('login')
      }
    }
  }, [])

  return (
    <Layout footer={false}>
      <div className='flex-wrap h-full grid grid-cols-auto gap-4'>
        <ResourcesContainer resources={resources} />
      </div>
    </Layout>
  )

}
