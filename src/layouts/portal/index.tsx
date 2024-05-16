/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import Leftbar from "../../components/leftbar";
import { useCallback, useEffect } from "react";
import SERVER_URL from "../../variables";
import { useAppDispatch } from "../../hooks";
import { login, logout } from "../../views/auth/auth.slice";

function PortalLayout(){
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const authorization = useCallback(async (token: string)=>{
        try{
            const response = await fetch(`${SERVER_URL}/auth`, {
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': `${SERVER_URL}`,
                  'Authorization': token
                }
            });
            if (response.ok){
                const res = await response.json();
                dispatch(login({
                    token: token,
                    user: res
                }));
            } else {
                dispatch(logout());
                navigate('/auth/login');
            }
            
        }
        catch (e){
            console.log(e);
            dispatch(logout());
            navigate('/auth/login');
        }
    }, [dispatch, navigate]);
    useEffect(()=>{
        const token = localStorage.getItem('token') || null;
        if (token) {
            authorization(token);
        } else{
            navigate('/auth/login');
        }
    },[authorization, navigate]);
    return (
        <div className="main-wrapper">
            <Navbar />
            <Leftbar />           
            <Outlet />
        </div>
    ) 
}

export default PortalLayout;