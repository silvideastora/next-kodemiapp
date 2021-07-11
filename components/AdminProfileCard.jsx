import classNames from 'classnames'


export default function AdminProfileCard ({admin}){
    return(
        <div  className={classNames(
            'bg-black-ka',
            'mb-0.5',
            'px-4',
            'rounded-lg',
            'flex flex-col',
            'items-center justify-center',
            'text-white-ka',
            'w-full',
        )}>
            <div className={classNames(
            'mx-auto',
            'mt-3'
            )}>
            <img className={classNames(  
            'rounded-full',
            'w-24'
        )}
            src={admin.image}   
        />
            {/*<i onClick={(e) => changeProfile(admin)}  className={classNames(
            'block',
            'cursor-pointer',
            'far fa-edit',
            'hover:text-cyan-ka',
            'mt-1',
            'text-center'
            )}>
            </i>*/}
        </div>
            <div className= {classNames(
            'pt-5',
            ' text-center')} >
            <h3 className={classNames(
            'font-medium',
            'lg:text-xl',
            'text-base '
        )}>
        {admin.name} {admin.lastName}
        </h3>
        <span className={classNames(
          'text-xs',
          ' lg:text-base'
        )}>
        </span>
        <p>{admin.location}</p>
        <p className={classNames(
          'font-semibold',
          'pt-0',
          'text-cyan-ka'
        )}>
        {admin.rol} 
        </p>
        </div>
        </div>
        
        
    )
}