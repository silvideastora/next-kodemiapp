import classNames from 'classnames'
import Slider from 'react-slick'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Notice from './Notice'
import { GetPosts, like } from '../lib/api'

export default function Posts({ isAdmin }) {
  // console.log('POSTS:', posts)
  const [activeModal, setActiveModal] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect( async () => {
    const generationNumber = window.localStorage.getItem('numberGeneration')
    const postsResponse = await GetPosts({
      generation: {
        bootcamp: 'JS',
        number: parseInt(generationNumber)
      },
    })
    setPosts(postsResponse.data.reverse())
    console.log('numero de generacion:', generationNumber, postsResponse.data )
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  const closeModal = () => {
    setActiveModal(false)

  }
  const increaseLike = async (id) => {
    const token = window.localStorage.getItem('token')
    const response = await like(id, token)

  }
  return (
    <div>
      <Modal
        isOpen={activeModal}
        className={classNames(
          'absolute',
          'rounded-xl',
          'bg-gray-ka',
          'flex-grow',
          'left-20  top-20',
          'text-white-ka'
        )}
      >
        <Notice closeModal={closeModal} />
      </Modal>
      <div className='container flex justify-between mb-2'>
        <h3>Avisos</h3>
        {isAdmin && <button onClick={event => setActiveModal(true)} className={classNames(
          'border border-cyan-ka rounded-md',
          'text-sm',
          'p-1'
        )} type='button'>Crear nuevo</button>}
      </div>
      <div className={classNames(
        'col-span-2 xs:col-span-1',
        'flex-grow-0'
      )}>
        <div className={classNames(
          'flex flex-col sm:col-span-1',
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
            <Slider {...settings}
            >
              {posts.map((post, index) => (
                <div key={`post-${index}`}>
                  <div className={classNames('flex'
                  )}>
                    <img className={classNames(
                      'h-12',
                      'mr-2 mt-3',
                      'rounded-full'
                    )} src='/images/Viri.jpeg' />
                    <div className={classNames(
                      'p-2 mr-1 w-11/12'
                    )}>
                      <h3 className={classNames(
                        'flex items-start',
                        'lg:text-xl font-semibold'
                      )}>{post.title}
                      </h3>
                      <p className={classNames(
                        'mt-1 mr-1',
                        'font-light',
                        ' text-sm '
                      )}>{post.createdAt}
                      </p>
                      <p className={classNames(
                        'font-normal',
                        'mt-2'
                      )}>{post.info}
                      </p>
                      <div className='text-right'>
                      <i onClick={() => increaseLike(post._id)} className={classNames(
                        'far fa-heart',
                        'mr-2 mt-2',
                        'mx-auto',
                        'stroke-current',
                        'text-xl  text-cyan-ka'
                      )}>
                      </i>
                        <span className={classNames(
                          'text-xs text-cyan-ka'
                        )}>
                          {post.likes}
                        </span>
                      </div>
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