import { useSelector } from "react-redux"
import React, {useEffect, useState} from 'react';

const LoginChecker = () => {
    const token = localStorage.getItem('token')
    const user = useSelector((state) => state.persistedReducer.login.user)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        if(token){
            setIsLogin(true)
            if(token === 'admin'){
                setIsAdmin(true)
            }
        } else {
            setIsAdmin(false)
            setIsLogin(false)
        }
    }, [user])
    return {isAdmin,isLogin}
    
}

export default LoginChecker