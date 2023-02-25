import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import EachcardOfCart from './EachCardofCart'

import PersonelInfo from './PersonelInfo'


let arr=[
  {id:0,page:"editAccount",title:"Pesonel Information",icon:"far fa-user-circle"},
 
  {id:1,page:"cart",title:"Cart",icon:"fa fa-shopping-cart"},
  {id:2,page:"wishlist",title:"Your Wish list",icon:"fas fa-heart"},
  {id:3,page:"my orders",title:"Your Orders",icon:"	fas fa-cart-arrow-down"},
  {id:4,page:"logout",title:"Logout",icon:"fas fa-sign-in-alt"}

]
const Account = () => {

  let [active,setactive]=useState(0)
  return (
    <div>
    
      <Flex w={"90%"} gap={"2%"} margin={"auto"} >
        <Box  w={"20%"} h={"400px"} >
          {
            arr.map((e)=>{
              return <div key={e.id} onClick={()=>setactive(e.id)} style={{border:"1px solid red",width:"100%",margin:"auto",padding:"10px 11px",cursor:"pointer",backgroundColor:active==e.id?"#009999":"white",borderRadius:"5px",margin:"1px"}} >
                  
                  
                   <Text fontSize='md' color={active==e.id?"white":"black"} > <i style={{fontSize:"20px"}} class={e.icon}></i> {e.title}  </Text>
              </div>
            })
          }
        </Box>
        <Box border={"1px solid black"}  w={"78%"}>

<PersonelInfo/>
{/* <EachcardOfCart/> */}
        </Box>
      </Flex>
    </div>
  )
}

export default Account
