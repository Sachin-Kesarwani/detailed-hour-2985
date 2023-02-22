

import "./style.css"
import React from 'react'


let brand=["https://img9.hkrtcdn.com/24442/bnr_2444148_o.png","https://img5.hkrtcdn.com/24429/bnr_2442824_o.jpg","https://img1.hkrtcdn.com/24442/bnr_2444150_o.jpg","https://img5.hkrtcdn.com/24442/bnr_2444154_o.jpg"]
const BrandImages = () => {



  return (
    <div  id="brandImageMainDiv" >
      {
        brand.map((e)=>{
            return<div>
                <img key={e} src={e} />
            </div>
        })
      }
    </div>
  )
}

export default BrandImages
