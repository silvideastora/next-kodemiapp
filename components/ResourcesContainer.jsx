import classNames from 'classnames'

export default function ResourcesContainer({ resources }) {

  return (
    <div className='container'>
      <div className='container bg-black xs:hidden'>
        <img className='object-cover w-full opacity-50' src='../images/banner-ka.png' />
      </div>
      <ul className={classNames(
        'gap-x-4 gap-y-8 lg:gap-y-12',
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12'
      )}>
        {resources.map((resource, index) => (
          <li key={index}>
            <div className={classNames(
              'border',
              'border-cyan-ka',
              'rounded-lg',
              'py-20',
              'h-48',
              'relative cursor-pointer mb-1'
            )}>
              <div className={classNames(
                'absolute inset-0',
                'bg-cyan-ka',
                'opacity-75',
                'rounded-lg'
              )}>
              </div>
              <div className={classNames(
                'absolute inset-0',
                'transform hover:scale-95 transition duration-300'
              )}>
                <div className={classNames(
                  'bg-black-ka',
                  'box-border',
                  'p-4',
                  'rounded-lg shadow-2xl',
                  'h-44'
                )}>
                  <h3 className={classNames(
                    'mb-5',
                    'text-white-ka',
                    'w-30 h-18',
                  )}>
                    {resource.title}
                  </h3>
                  <a href={resource.resources} target='_blank' className={classNames(
                    'break-words',
                    'w-full',
                    'text-gray-inactive text-sm hover:text-white-ka'
                  )}>
                    {resource.resources}
                  </a>
                </div>
              </div>
            </div>
          </li>))}
      </ul>
    </div>

  )
}
