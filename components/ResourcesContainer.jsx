import classNames from 'classnames'

export default function ResourcesContainer({resources}) {
    return (
      <div>
        <ul class={classNames(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'
        )}>
          {resources.map((resource, index) => (
          <li>
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
                  <dt>CSS básico y selectores</dt>
                  <dd className={classNames(
                    'font-medium',
                    'group-hover:text-white-ka',
                    'leading-8',
                    'text-gray-inactive'
                  )}>
                    item o recursos
                  </dd>
                </div>
              </dl>
            </a>
          </li>))}
        </ul>
      </div>

    )  
}
