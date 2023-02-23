import axios from "axios"
import { AddInCart,AddInWishList, Loading ,Error,DelfromWishlist} from "./actiontype"





export const PostdataIncart=(useID,data)=>async(dispatch)=>{
dispatch({type:Loading})


await axios.post(`http://localhost:8080/cart`,data)
.then((res)=>{
   
    dispatch({type:AddInCart,payload:res.data})
 
    
}).catch((er)=>{
    dispatch({type:Error})
    
})
}


export const PostdataInWishList=(status,data)=>async(dispatch)=>{

    dispatch({type:Loading})
    

        await axios.post("http://localhost:8080/wishlist",data)
        .then((res)=>{
           
            dispatch({type:AddInWishList,payload:res.data})
        }).catch((er)=>{
            dispatch({type:Error})
            
        })
   
   
    }

    export const DeldatafromWishlist=(id)=>async(dispatch)=>{
        console.log("dellllll")
        dispatch({type:Loading})
        await axios({
            url:`http://localhost:8080/wishlist/${id}`,
            method:"delete"
        
        })
        .then((res)=>{
           
            dispatch({type:DelfromWishlist,payload:id})
        }).catch((er)=>{
            dispatch({type:Error})
            
        })
    }