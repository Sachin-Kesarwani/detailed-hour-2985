
import { useState } from "react"
import { useNavigate,Navigate,useLocation } from "react-router-dom"




const FrontedPrivate = ({children}) => {
let navigate=useNavigate()
let location = useLocation();


let isAuth=JSON.parse(localStorage.getItem("isAuth"))||false
console.log(isAuth)
if(!isAuth){
    return  <Navigate to="/signup" state={{ from: location}} replace />
}

  return children
}

export default FrontedPrivate
