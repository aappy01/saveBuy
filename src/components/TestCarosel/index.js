import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TestCarosel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        <div className='w-full'>
        <div className="p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        </div>
        
        <div>
        <div className="p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        </div>
        <div>
        <div className="p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        </div>
        <div>
        <div className="p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        </div>
        <div>
        <div className="p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        </div>
        <div>
        <div className="p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        </div>
        <div>
        <div className="p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        </div>
        <div>
        <div className="p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        </div>
        <div>
        <div className="p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        </div>
        
      </Carousel>;
    </div>
  )
}

export default TestCarosel