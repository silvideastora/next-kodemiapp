import classNames from 'classnames'

export default function ResourcesContainer() {
    return (
      <div>
        <ul class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
    <li>
      <a  className={classNames(
        'bg-black',
        'block rounded-lg', 
        'border-2  border-cyan-kodemiapp',
        'hover:border-cyan-kodemiapp hover:text-cyan-kodemiapp hover:shadow-lg group',
        'p-4',
        'text-white',  
        )}>
        <dl class='grid sm:block lg:grid grid-cols-2 grid-rows-2 items-center'>
          <div>
            <dt>CSS básico y selectores</dt>
            <dd class='group-hover:text-white leading-8 font-medium text-gray-inactive'>
              item o recursos
            </dd>
          </div>
        </dl>
      </a>
    </li>
    <li class="hover:shadow-lg flex rounded-lg">
      <a href="/new" class="hover:border-transparent hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-gray-200 text-sm font-medium py-4">
        New Project
      </a>
    </li>
  </ul>
      </div>

    )  
}
