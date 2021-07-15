
import icons from '../../config/FooterIcons.json'
import classNames from 'classnames'
import React from 'react'

export default function Icons() {
  return (
    <div
      className={classNames(
        'w-full md:w-2/3 lg:w-1/4',
        'flex',
        'justify-between'
      )}
    >
      {icons.map((icon, index) => (
        <a key={index} href={icon.route} target='_blank'>  
          <img
            src={icon.location}
            alt={icon.name}
            className={classNames('w-8 icon-hover')}
          />
        </a>
      ))}
    </div>
  );
}
