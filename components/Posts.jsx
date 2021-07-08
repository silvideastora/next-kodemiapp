import classNames from 'classNames'
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
        <div className='col-span-2 xs:col-span-1 flex-grow-0'>
            <div className={classNames(
                'bg-black',
                'pb-16',
                'py-5 px-5',
                'rounded-lg',
                'sm:mb-0.5',
                'text-white',
                'min-h-full',
                'mb-0.5'
                )}>
                    <div className='bg-dark w-full'>
                        <Slider {...settings}>
                          {posts.map((post,index)=>(
                            <div className=''>
                              <div className='flex'>
                                <img className='mx-auto rounded-full w-10 h-10 mt-3'src={post.mentorImage}/>
                                <div className='p-2'>
                                  <p className='flex items-start lg:text-xl'>{post.postTitle}</p>
                                  <p className=''>{post.postContent}</p>
                                  <i className='block far fa-heart text-3xl text-right'>
                                    <small className='text-sm'>{post.likes}</small>
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