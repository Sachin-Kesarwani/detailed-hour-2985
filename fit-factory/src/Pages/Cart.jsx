import { Flex ,Box,Heading, Button,Text} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import EachcardOfCart from "../Account/EachCardofCart";
import Sigglecart from "../Account/Sigglecart";
import { GetCartData } from "../Redux/CartRedux/action";

const Cart = () => {
  let dispatch=useDispatch()

let cartdata=useSelector((store)=>store?.CartReducer?.cart)
let [price,setPrice]=useState(0)
let [dis,setDis]=useState(0)
let navigate=useNavigate()

function getPrice(){

  let sum1=0
  let sum2=0
  for(let i=0;i<cartdata.length;i++){
    let dataprice=cartdata[i].price||cartdata[i].Price||cartdata[i].newprice ||500
       
         sum1+=dataprice
       let disdata=cartdata[i].oldprice||cartdata[i].Price2||600
       sum2+=disdata
       
  }
  setPrice(sum1)
  setDis(sum2)
}
useEffect(()=>{
  getPrice()
 dispatch(GetCartData)
},[cartdata.length])
console.log(price,dis)
  return (

    <>

    {
      cartdata.length>0? <div>
      <Flex>
        <Box w={"50%"}>
          <Heading marginLeft={"80px"}>You cart</Heading>
          {
        cartdata.length>=1?    cartdata?.map((e)=>{
              return <Sigglecart item={e} />
            }):<div style={{width:"100%",margin:"auto"}}>
            <Heading textAlign={"center"}>Nothing in The Cart 
                 <Button >
              <Link to="/">
              Continue Shopping
               
              </Link>
                 
                 </Button>
                
                </Heading>
                <img width="400px" margin={"auto"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCYSKcjEWXhFvXUO4zVDrp-7Wa2t42YZNjw&usqp=CAU"/>
              
                </div>
          }
  
        </Box>
        <Box  w={"50%"}>
          <div style={{width:"350px",height:"200px",margin:"30px",padding:"8px",boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <Text  fontSize='2xl'>
            MRP : <del>
             ₹ {dis}
              </del>
             
            </Text>
            <Text  fontSize='2xl'>
              Price : ₹{price}
            </Text>
            <Text  fontSize='2xl'>
              Discount : {Math.abs(((dis-price*100)/dis).toFixed())} % OFF
            </Text>
            <Button>
              <Link to="/payment" >
              Buy Now
              </Link>
            
            </Button>
           </div>
      </Box>
        
       
      </Flex>
      
      </div>:<div style={{width:"100%",margin:"auto"}}>
            <Heading textAlign={"center"}>Nothing in The Cart 
                 <Button>
                 <Link to="/">
                  Continue Shopping
                  </Link>
                 </Button>
                
                </Heading>
                <img width="800px" margin={"auto"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCYSKcjEWXhFvXUO4zVDrp-7Wa2t42YZNjw&usqp=CAU"/>
              
                </div>
    }
    
    </>
   
  );
};

export default Cart;
