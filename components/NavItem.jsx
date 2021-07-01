
export default function NavItem({ href, isActive, children }) {
  return (
    <li>
      <a
        href={href}
        className={`block px-1 py-2 rounded-md text-white ${isActive ? 'bg-amber-100 text-amber-700' : ''}`}
      >
        {children}
      </a>
    </li>
  )
}
