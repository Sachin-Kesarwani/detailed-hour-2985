import React from 'react'



let comanylogo=[
    "https://img3.hkrtcdn.com/22115/bnr_2211472_o.png",
    "https://img7.hkrtcdn.com/22043/normal_2204256_o.png",
    "https://img9.hkrtcdn.com/22043/normal_2204258_o.png",
    "https://img1.hkrtcdn.com/22043/normal_2204260_o.png",
    "https://img9.hkrtcdn.com/22101/bnr_2210088_o.png",
    "https://img1.hkrtcdn.com/22099/bnr_2209880_o.png",
    "https://img7.hkrtcdn.com/22043/normal_2204266_o.png",
    "https://img1.hkrtcdn.com/22043/normal_2204270_o.png"
]
const BrandComany = () => {
  return (
    <div>
      <div id='companymaindiv'  >
        {
            comanylogo.map((e)=>{
                return <img  key={e} src={e} />
            })
        }
      </div>
    </div>
  )
}

export default BrandComany
