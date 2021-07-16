import classNames from 'classnames'
import Slider from 'react-slick'
import {useState} from 'react'
import Modal from 'react-modal'
import Notice from './Notice'

export default function Posts ({posts}) {
  const [activeModal, setActiveModal] = useState (false) 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  const closeModal = () => {
    setActiveModal (false)
  }
    return (
      <div>
        <Modal
          isOpen={activeModal}
          className= {classNames(
            'absolute',
            'rounded-xl',
            'bg-gray-ka',
            'flex-grow',
            'left-20  top-20',
            'text-white-ka'
          )}  
        >
          <Notice closeModal={closeModal}/>
        </Modal>
        <div className='container flex justify-between mb-2'>
          <h3>Avisos</h3>
          <button onClick={event => setActiveModal(true)}className={classNames(
            'border border-cyan-ka rounded-md',
            'text-sm',
            'p-1'
          )}type='button'>Crear nuevo</button>
        </div>
        <div className={classNames(
          'col-span-2 xs:col-span-1',
          'flex-grow-0'
        )}>
            <div className={classNames(
                'bg-black-ka',
                'border border-white-ka',
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
                            <div key={index}>
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
                                    'flex items-start',
                                    'lg:text-xl font-semibold'
                                    )}>{post.postTitle}
                                  </h3>
                                  <p className={classNames(
                                    'mt-1 mr-1',
                                    'font-light',
                                    ' text-sm '
                                    )}>{post.postDate}
                                  </p>
                                  <p className={classNames(
                                    'font-normal',
                                    'mt-2'
                                    )}>{post.postContent}
                                  </p>
                                  <i className={classNames(
                                    'block',
                                    'far fa-heart',
                                    'mr-2 mt-2',
                                    'stroke-current',
                                    'text-2xl text-right text-cyan-ka'
                                    )}>
                                    <span className={classNames(
                                      'text-xs'
                                      )}>{post.likes}
                                    </span>
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
        </div>
    )
}