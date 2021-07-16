
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
      {/* <a
        className={classNames(
          className,
          'border-2 border-cyan-kd',
          'cursor-pointer',
          'flex',
          'p-1',
          'place-content-center',
          'rounded-card',
          'text-base font-medium',
          {
            'border-white-kd hover:bg-gray-kd-light hover:border-gray-kd-light hover:text-white-kd': isSecondary && !isDisable,
            'border-gray-kd text-gray-kd-light hover:bg-gray-kd-light hover:text-white-kd': isDisable,
            'text-white-kd hover:border-cyan-kd-dark hover:bg-cyan-kd-dark': !isDisable
          }
        )}
        onClick={async () => await router.push('/dashboard')}
      >
      Dashboard
    </a> */}
      <div className='flex-wrap h-full grid grid-cols-auto gap-4'>
        <ResourcesContainer resources={resources} />
      </div>
    </Layout>
  )

}
