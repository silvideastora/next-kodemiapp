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
                    <div className='bg- white w-full flex '>
                        <ul>
                          {posts.map((post,index)=>(
                            <li className='flex'>
                              <img className='mx-auto rounded-full w-20 'src={post.mentorImage}/>
                              <div>
                                <p className='flex items-start'>{post.postTitle}</p>
                                <p className=''>{post.postContent}</p>
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