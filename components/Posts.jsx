import classNames from 'classnames'
import Slider from "react-slick";

export default function Posts ({posts}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
    return (
        <div className={classNames(
          'col-span-2 xs:col-span-1',
          'flex-grow-0'
        )}>
            <div className={classNames(
                'bg-black-ka',
                'mb-0.5',
                'min-h-full',
                'pb-16',
                'py-5 px-5',
                'rounded-lg',
                'sm:mb-0.5',
                'text-white-ka',
                )}>
                    <div className={classNames(
                      'bg-black-ka',
                      ' w-full'
                      )}>
                        <Slider {...settings}>
                          {posts.map((post,index)=>(
                            <div key={index} className=''>
                              <div className={classNames('flex'
                              )}>
                                <img className={classNames(
                                  'h-12',
                                  'mr-2 mt-3 mx-auto',
                                  'rounded-full',
                                  'w-12 '
                                  )} src={post.mentorImage}/>
                                <div className={classNames(
                                  'p-2 mr-1'
                                  )}>
                                  <h3 className={classNames(
                                    'font-semibold ',
                                    'flex items-start',
                                    'lg:text-xl'
                                    )}>{post.postTitle}
                                  </h3>
                                  <p className={classNames(
                                    'mt-1 mr-1',
                                    'font-thin',
                                    ' text-sm '
                                    )}>{post.postDate}
                                  </p>
                                  <p className={classNames(
                                    'font-medium',
                                    'mt-1'
                                    )}>{post.postContent}
                                  </p>
                                  <i className={classNames(
                                    'block',
                                    'far fa-heart',
                                    'mr-2 mt-2',
                                    'stroke-current',
                                    'text-3xl text-right text-cyan-ka'
                                    )}>
                                    <small className={classNames(
                                      'text-xs'
                                      )}>{post.likes}
                                    </small>
                                  </i>
                                </div>
                              </div>
                            </div>
                          )
                          )}
                        </Slider>
                    </div>
                </div>
        </div>
    )
}