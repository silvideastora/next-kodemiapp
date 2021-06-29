import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

export default function Button({ text, link = '/', isPink = false }) {
  return (
    <button className={classNames(
      'border-8 border-purple-700 rounded',
      ' p-2 w-full md:w-3/5',
      'hover:bg-purple-700 hover:text-white',
      {
        'border-pink-700': isPink
      }
    )}>
      <Link href={link} >
        {text}
      </Link>
    </button >
  )
}
