import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { GiSelfLove } from 'react-icons/gi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';


const ProductSect = ({ products = [] }) => {
    const responsive = {
    superLargeDesktop: {
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
  }

  return (
    <>
      <div className="container mx-auto max-w-screen-xl pb-8">
        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000}>
          {
            products.map((product) => {
              console.log(product, 'product')
              const { id, description, category, image, price, title } = product;
              return (
                <Link to={`/products/${id}`}>
                <div className='p-2'>
                  <div className="p-4 shadow-md w-full border h-[400px] cursor-pointer">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img alt={title} className="object-contain object-center w-full h-full block" src={image} />
                    </a>
                    <div className="mt-4 h-[100px]">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
                      <h2 className="text-gray-900 title-font font-bold overflow-hidden line-clamp-2 text-lg">{title}</h2>
                    </div>
                    <div className='flex justify-between items-center py-4'>
                      <p className="mt-1 text-xl font-medium">${price}</p>
                      <div className='flex gap-4'>
                      <GiSelfLove style={{ fontSize: '30px'}} className='hover:scale-95 text-orange-400'/>
                      <MdOutlineAddShoppingCart style={{ fontSize: '30px' }} className='hover:scale-95 text-orange-400'/>
                      </div>
                      
                      </div>
                  </div>
                </div>
                </Link>
              )
            })
          }
        </Carousel>
      </div>
    </>
  )
}

export default ProductSect