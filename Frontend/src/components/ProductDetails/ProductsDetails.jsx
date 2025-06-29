import React from 'react'
import Navbar from '../HomePage/Navbar'
import Footor from '../HomePage/Footor'
import SubNavbar from '../HomePage/SubNavbar'
import ProductDetailCard from './ProductDetailCard'
import Cards from '../Cards/Cards'
import { useParams } from 'react-router-dom'

const ProductsDetails = () => {
  const {category} = useParams();
  console.log(category);
  return (
    <>
    <Navbar/>
    <SubNavbar/>
    <ProductDetailCard/>
    <Cards category={category}/>
    <Footor/>
    </>
  )
}

export default ProductsDetails