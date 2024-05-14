import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function AuthLayout(){
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem('token') || null;
        if (token) {
            navigate('/portal/home');
        }
    },[navigate]);
    return (
        <Outlet />
    )
}

export default AuthLayout;