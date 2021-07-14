import classNames from 'classnames'

export default function ResourcesContainer({resources}) {
    return (
      <div className='container'>
        <ul className={classNames(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'
        )}>
          {
          
          resources.map((resource, index) => (
          <li key={index}>
            <a  className={classNames(
              'bg-black',
              'block rounded-lg', 
              'border-2  border-cyan-ka',
              'hover:border-cyan-ka hover:text-cyan-ka hover:shadow-lg group',
              'p-4',
              'text-white-ka',  
              )}>
              <dl className={classNames(
                'grid sm:block lg:grid grid-cols-2 grid-rows-2',
                'items-center'
              )}>
                <div>
                  <dt>{resource.title}</dt>
                  <a href={resource.url} className={classNames(
                    'font-medium',
                    'group-hover:text-white-ka',
                    'leading-8',
                    'text-gray-inactive'
                  )}>
                    {resource.url}
                  </a>
                </div>
              </dl>
            </a>
          </li>))}
        </ul>
      </div>

    )  
}
