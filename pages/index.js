import Head from 'next/head'
import Button from '../components/Button'

export default function Home() {
  return (
    <div className="w-100">
      <h1> Hola </h1>
      <Button text='guardar' link='/about' />
    </div>

      
  )
}
