import classNames from 'classnames'

export default function ResourcesContainer({ resources }) {

  return (
    <div className='container'>
      <div className='container bg-black xs:hidden'>
        <img className='object-cover w-full opacity-50' src='../images/banner-ka.jpeg' />
      </div>
      <ul className={classNames(
        'bg-black',
        'gap-4',
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12'
      )}>
        {resources.map((resource, index) => (

          <li key={index}>
            <div className={classNames(
              'bg-black-ka',
              'border',
              'border-cyan-ka',
              'rounded-lg',
              'py-20',
              'relative cursor-pointer mb-1'
            )}>
              <div className={classNames(
                'absolute inset-0',
                'bg-cyan-ka',
                '',
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
                  'rounded-lg shadow-2xl'
                )}>
                  <h3 className={classNames(
                    'text-white-ka',
                    'text-center',
                    'w-30 h-32',
                    'pt-16'
                  )}>
                    {resource.title}</h3>
                  <a href={resource.resources} target='_blank' className={classNames(
                    'px-12',
                    'p-10',
                    'w-full',
                    'text-gray-inactive hover:text-white-ka'
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
