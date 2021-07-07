import classNames from 'classnames'

export default function NavItem({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className={classNames(
          'block',
          'px-1 py-2',
          'rounded-md',
          'text-white-ka hover:text-cyan-ka'
        )}
      >
        {children}
      </a>
    </li>
  )
}
