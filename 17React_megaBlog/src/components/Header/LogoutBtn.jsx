import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'



function LogoutBtn() {

const dispatch = useDispatch()
const handleLogout = ()=>{
    authService.logout().then((res)=>{
        console.log("Logout successful", res)
        dispatch(logout())
    }).catch((err)=>{
        console.error("Logout failed", err)
    })

}


  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full '
    onClick={handleLogout}> Logout</button>
  )
}

export default LogoutBtn