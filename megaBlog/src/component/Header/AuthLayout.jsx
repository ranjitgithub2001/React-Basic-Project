import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children,
authentication=true}) {
  const navigate=useNavigate()
  const [loader, setloader] = useState(true)
  const authStatus= useSelector(state => state.auth.status)

  useEffect(()=>{

    //optional and easy way to do it

    // if (authStatus === true) {
    //   navigate('/')
    // }else if( authStatus === false){
    //   navigate('/login')
    // }

    //you can do it also like that

    //let authValue=authStatus === true ? true : false
    //instead of using (authStatus !== authentication)  you can use (authValue)

    const handleNavigation=()=>{
      if(authentication && authStatus !== authentication){
        navigate('/login')
      }else if(!authentication && authStatus !== authentication){
        navigate('/')
      }
      setloader(false)
    }
    handleNavigation();    
  },[authStatus, navigate, authentication])

  return loader ? <h1>Loading....</h1> : <>{children}</>
}

