import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// category slider effect
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// category images
import Image1 from '../assets/image1.jpg'
import Image2 from '../assets/image2.jpg'
import Image3 from '../assets/image3.jpg'
import Image4 from '../assets/image4.jpg'
import Image5 from '../assets/image5.jpg'
import Image6 from '../assets/image6.jpg'

const FeatureCard = () => {

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-11">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Featured Products</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Top Categories</h1>
        </div>

        <div>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            // className="swiper-wrapper"
          >


            <div>
              <div>
                <SwiperSlide className="custom-swiper-slide">
                  <div className="p-4 bg-orange-100 rounded-md">
                    <div className="flex rounded-lg p-8 flex-col h-[370px] cursor-pointer">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                          </svg>
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium">Home and Kitchen</h2>
                      </div>
                      <div className="flex-grow">
                        <img
                          src={Image1}
                          alt='categoryImage'
                          className='w-full object-cover h-[230px] mx-auto rounded'
                        />

                        <a className="mt-3 text-orange-500 inline-flex items-center cursor-pointer">View Products
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>


              <SwiperSlide className="custom-swiper-slide">
                <div className="p-4 bg-orange-100 rounded-md">
                  <div className="flex rounded-lg p-8 flex-col h-[370px] cursor-pointer">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">Phones and Gadgets</h2>
                    </div>
                    <div className="flex-grow">
                      <img
                        src={Image2}
                        alt='categoryImage'
                        className='w-full object-cover h-[230px] mx-auto rounded'
                      />

                      <a className="mt-3 text-orange-500 inline-flex items-center cursor-pointer">View Products
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="custom-swiper-slide">
                <div className="p-4 bg-orange-100 rounded-md">
                  <div className="flex rounded-lg p-8 flex-col h-[370px] cursor-pointer">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">Health and Beauty</h2>
                    </div>
                    <div className="flex-grow">
                      <img
                        src={Image3}
                        alt='categoryImage'
                        className='w-full object-cover h-[230px] mx-auto rounded'
                      />

                      <a className="mt-3 text-orange-500 inline-flex items-center cursor-pointer">View Products
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="custom-swiper-slide">
                <div className="p-4 bg-orange-100 rounded-md">
                  <div className="flex rounded-lg p-8 flex-col h-[370px] cursor-pointer">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">Fashion and Lifestyle</h2>
                    </div>
                    <div className="flex-grow">
                      <img
                        src={Image4}
                        alt='categoryImage'
                        className='w-full object-cover h-[230px] mx-auto rounded'
                      />

                      <a className="mt-3 text-orange-500 inline-flex items-center cursor-pointer">View Products
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="custom-swiper-slide">
                <div className="p-4 bg-orange-100 rounded-md">
                  <div className="flex rounded-lg p-8 flex-col h-[370px] cursor-pointer">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">Food and Groceries</h2>
                    </div>
                    <div className="flex-grow">
                      <img
                        src={Image5}
                        alt='categoryImage'
                        className='w-full object-cover mx-auto h-[230px] rounded'
                      />

                      <a className="mt-3 text-orange-500 inline-flex items-center cursor-pointer">View Products
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="custom-swiper-slide">
                <div className="p-4 bg-orange-100 rounded-md">
                  <div className="flex rounded-lg p-8 flex-col h-[370px] cursor-pointer">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">Electronics</h2>
                    </div>
                    <div className="flex-grow">
                      <img
                        src={Image6}
                        alt='categoryImage'
                        className='w-full object-cover mx-auto h-[230px] rounded'
                      />

                      <a className="mt-3 text-orange-500 inline-flex items-center cursor-pointer">View Products
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </div>
            <div>
              <div className="swiper-button-prev bg-orange-500">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next bg-orange-500">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>

          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default FeatureCard