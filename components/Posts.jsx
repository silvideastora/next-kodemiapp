import classNames from 'classNames'

export default function Posts ({posts}) {
    return (
        <div className='col-span-2 flex-grow-0'>
            <div className={classNames(
                'bg-black',
                'py-5 px-5',
                'rounded-lg',
                'text-white',
                'min-h-full'
                )}>
                    <div className='bg- white w-full flex'>
                        <ul>
                          {posts.map((post,index)=>(
                            <li className='flex'>
                              <img className='mx-auto rounded-full w-10 h-10 'src={post.mentorImage}/>
                              <div className='p-2'>
                                <p className='flex items-start lg:text-xl'>{post.postTitle}</p>
                                <p className=''>{post.postContent}</p>
                                <i className='block far fa-heart text-3xl text-right'>
                                  <small className='text-sm'>{post.likes}</small>
                                </i>
                              </div>
                            </li>
                          )
                          )}
                            
                        </ul>

                    </div>
                </div>
        </div>
    )
}