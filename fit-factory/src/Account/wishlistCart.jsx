import React ,{useState,useEffect}from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { GetwishListdatafromjson, PostdataInWishList } from '../Redux/CartRedux/action'
import { Badge, Button, Heading, Text, useToast } from '@chakra-ui/react'
const WishlistCard = ({item}) => {
    let [loading,setLoading]=useState(false)
let toast=useToast()
    let dispatch=useDispatch()
    let Wishlist=useSelector((store)=>store?.CartReducer?.wishlist)
  
    function handleRemove(item){
        setLoading(true)
        let data=Wishlist.filter((e)=>e.id!=item.id||e.Position!=item.Position)
        console.log(data)
        console.log(item)
        dispatch(PostdataInWishList(data)).then((res)=>{
            setLoading(false)
            toast({
                title: `Product Removed From Wishlist`,
                status: "warning",
                isClosable: true,
              })
            dispatch(GetwishListdatafromjson)
        })
    }
  return (
    <div>
      
    <div style={{padding:"3px",width:"250px",textAlign:"center",borderRadius:"5px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",margin:"auto",marginTop:"10px"}}>
 <img src={item.image||item.Image||"https://img9.hkrtcdn.com/24443/prd_2444208-MuscleBlaze-Whey-Protein-4-lb-Rich-Milk-Chocolate_c_s.jpg"} />
<Text fontWeight={"bold"} >
 
   {
       item.title||item.Name||item.Title
   }...
</Text>
<Text>
       MRP : <Badge>
           <del>
           ₹{item.oldprice||item.price2||item.price3||item.price3}
           </del>
     
           </Badge>
   </Text>
 <Text>

   Price :   <Badge>
   ₹{item.newprice||item.price}
   </Badge>
  
   <Text fontWeight={"bold"} fontSize="sm" color={"green.600"}>
     Discount  {(((item.oldprice - item.newprice) * 100) / item.oldprice).toFixed(
      
       ) || "40"}
       % OFF
     </Text>
 </Text>
 {
    loading?<Button
    isLoading
    loadingText='Remving'
    colorScheme='teal'
    variant='outline'
    spinnerPlacement='start'
  ></Button>:<Button bg={"orange.400"} color={"white"} _hover={{ bg:"orange.400" ,color:"white" }} onClick={()=>handleRemove(item)}>Remove</Button>
 }
 <Button bg={"green.400"} m={2} color={"white"} _hover={{ bg:"green.400" ,color:"white" }}>Add to Cart</Button>
</div>
    </div>
  )
}

export default WishlistCard
