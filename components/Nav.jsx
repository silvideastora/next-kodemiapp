
export default function Nav({ children }) {
  return (
    <nav className='py-4 pr-4'>
      <ul className='flex justify-center md:justify-start'>
        {children}
      </ul>
    </nav>
  )
}