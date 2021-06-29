import Head from 'next/head'
import Button from '../components/Button'
import KoderProfileCard from '../components/KoderProfileCard'

export default function Home() {
  return (
    <div className="w-100 grid grid-cols-3">
      <KoderProfileCard />
    </div>
      
  )
}
