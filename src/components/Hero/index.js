import React, { useState, useEffect } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import sliderData from './sliderData'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLenght = sliderData.length

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide =()=>{
    setCurrentSlide(currentSlide === slideLenght - 1 ? 0 : currentSlide + 1 )
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLenght - 1 : currentSlide - 1)
  }

  function auto(){
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  useEffect(() => {
    if(autoScroll){
      auto()
    }
    return() => clearInterval(slideInterval)
  }, [currentSlide])
  
  return (
    <div className='slider'>
      <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide} />
      <AiOutlineArrowRight className='arrow next' onClick={nextSlide} />

      {
        sliderData.map((slide, index) => {
          return (
            <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
              {index === currentSlide && (
                <>
                  <img src={slide.image} alt='slide'/>
                  <div className='absolute font-serif md:bottom-10 sm:bottom-30 md:right-[200px] sm:right-[100px] text-orange-500 font-bold'>
                    <h1 className='brand text-5xl pb-1'>{slide.heading}</h1>
                    <p className='text-white'>A New Way to Shopping...</p>
                  </div>
                  <div className='content text-5xl text-white font-bold'>
                    <h1>{slide.desc}</h1>
                  </div>
                </>
              )

              }

            </div>
          )
        })
      }
    </div>
  )
}

export default Hero