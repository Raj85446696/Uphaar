import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../HomePage/Navbar';
import SubNavbar from '../HomePage/SubNavbar';
import Cards from '../Cards/Cards';
import Footor from '../HomePage/Footor';

function Products() {
  const { category } = useParams();

  return (
    <>
      <Navbar />
      <SubNavbar />
      <Cards category={category} />
      <Footor/>
    </>
  );
}

export default Products;
