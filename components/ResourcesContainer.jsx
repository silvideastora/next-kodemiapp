import classNames from 'classnames'

export default function ResourcesContainer({resources}) {
    return (
      <div classNames=''>
        <h3> CSS </h3>
        <ul class={classNames(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-black'
        )}>
          {resources.map((resource, index) => (
          <li>
            <div className={classNames(
              'bg-black-ka',
              'block rounded-lg', 
              'p-20',
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
                'h-full w-full',
                'rounded-lg shadow-2xl'
              )}>
                <p classNames={classNames(
                  'p-2',
                  'text-white-ka'
                  )}>
                    CSS Básico
                </p>
                  
              </div>
            </div>
          </div>
          </li>))}
        </ul>
    </div>
  )  
}
