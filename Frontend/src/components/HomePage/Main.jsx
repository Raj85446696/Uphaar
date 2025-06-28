import React from 'react'
import Navbar from './Navbar'
import SubNavbar from './SubNavbar'
import GiftFinder from './GiftFinder'
import Footor from './Footor'
import Cards from '../Cards/Cards'
import AbroadSend from './AbroadSend'

const Main = () => {
  return (
    <>
    <Navbar/>
    <SubNavbar/>
    <GiftFinder/>
    <Cards category="Birthday"/>
    <Cards category="Anniversary"/>
    <Cards category="Congratulations"/>
    <Cards category="Love N Romance"/>
    <AbroadSend/>
    <Footor/>
    </>
  )
}

export default Main