import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/Products'
import FeatureCard from '../../components/FeatureCard'
import Stats from '../../components/StatCard'
import VendorPromotion from '../../components/VendorPromotion'

const Home = () => {
  const[products, setProducts] = useState([])

  useEffect(()=>{
    const fetchProducts = async() => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Hero/>
      <FeatureCard/>
      {
        products.length > 0 
        ?
        <Products products={products}/> 
        :
        <div>Loading....</div>
      }
      <Stats/>
      <VendorPromotion/>
    </>
  )
}

export default Home