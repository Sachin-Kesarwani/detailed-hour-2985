import React from 'react'
import BrandImages from '../Components/BrandImages'
import Carousel from '../Carousel/Carousel'
import EachCard from '../Components/HomeEachCard'
import Carousel2 from '../Carousel/Carousel2'
import BrandComany from '../Components/BrandComany'
const Home = () => {
  return (
    <div>
      <Carousel/>
      <hr style={{border:"3px solid #c2c2d6",marginBottom:"25px"}} ></hr>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}} >
      <EachCard/>
      <EachCard/>
      <EachCard/>
      <EachCard/>
      </div>
      <hr style={{border:"3px solid #c2c2d6",marginBottom:"25px"}} ></hr>
    <BrandImages/>
    <hr style={{border:"3px solid #c2c2d6",marginTop:"40px"}} ></hr>
    <Carousel2/>
    <hr style={{border:"3px solid #c2c2d6",marginTop:"40px"}} ></hr>
    <BrandComany/>
    </div>
  )
}

export default Home
