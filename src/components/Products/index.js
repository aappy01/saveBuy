import React from 'react'
import ProductSect from '../ProductSect'


const Products = ({ products = [] }) => {
  //filter products by category
  const menClothingProducts = products.filter(product => product.category === "men's clothing");
  const womenClothingProducts = products.filter(product => product.category === "women's clothing");
  const electronicsProducts = products.filter(product => product.category === "electronics");
  const jewelryProducts = products.filter(product => product.category === "jewelery");

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap m-4">
          <>
            <div className="flex flex-col items-center w-full p-8">
              <h1 className="sm:text-3xl text-2xl text-center font-medium title-font text-gray-900 p-1">Phones and Gadgets</h1>
              <div className='flex items-center'>
                <span className='w-8 h-1 rounded bg-orange-500'></span>
                <span className='w-8 h-2 rounded bg-orange-500'></span>
                <span className='w-8 h-1 rounded bg-orange-500'></span>
              </div>
            </div>
            <div className='ml-auto'>
              <p className='text-sm text-orange-400 font-medium cursor-pointer'>See All</p>
            </div>
            <ProductSect products={electronicsProducts} />
          </>


          <>
            <div className="flex flex-col items-center w-full p-8">
              <h1 className="sm:text-3xl text-2xl text-center font-medium title-font text-gray-900 p-1">Fashion and Lifestyle</h1>
              <div className='flex items-center'>
                <span className='w-8 h-1 rounded bg-orange-500'></span>
                <span className='w-8 h-2 rounded bg-orange-500'></span>
                <span className='w-8 h-1 rounded bg-orange-500'></span>
              </div>
            </div>
            <div className='ml-auto'>
              <p className='text-sm text-orange-400 font-medium cursor-pointer'>See All</p>
            </div>
            <ProductSect products={menClothingProducts} />
          </>

          <>
            <div className="flex flex-col items-center w-full p-8">
              <h1 className="sm:text-3xl text-2xl text-center font-medium title-font text-gray-900 p-1">Home and Kitchen Appliances</h1>
              <div className='flex items-center'>
                <span className='w-8 h-1 rounded bg-orange-500'></span>
                <span className='w-8 h-2 rounded bg-orange-500'></span>
                <span className='w-8 h-1 rounded bg-orange-500'></span>
              </div>
            </div>
            <div className='ml-auto'>
              <p className='text-sm text-orange-400 font-medium cursor-pointer'>See All</p>
            </div>
            <ProductSect products={electronicsProducts} />
          </>


          <>
            <div className="flex flex-col items-center w-full p-8">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 p-1">Food and Groceries</h1>
              <div className='flex items-center'>
                <span className='w-8 h-1 rounded bg-orange-500'></span>
                <span className='w-8 h-2 rounded bg-orange-500'></span>
                <span className='w-8 h-1 rounded bg-orange-500'></span>
              </div>
            </div>
            <div className='ml-auto'>
              <p className='text-sm text-orange-400 font-medium cursor-pointer'>See All</p>
            </div>
            <ProductSect products={womenClothingProducts} />
          </>

          <>
            <div className="flex flex-col items-center w-full p-8">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 p-1">Health and Beauty</h1>
              <div className='flex items-center'>
                <span className='w-8 h-1 rounded bg-orange-500'></span>
                <span className='w-8 h-2 rounded bg-orange-500'></span>
                <span className='w-8 h-1 rounded bg-orange-500'></span>
              </div>
            </div>
            <div className='ml-auto'>
              <p className='text-sm text-orange-400 font-medium cursor-pointer'>See All</p>
            </div>
            <ProductSect products={jewelryProducts} />
          </>




        </div>
      </div>
    </section>
  )
}

export default Products