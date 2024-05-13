/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";

import { useAppDispatch } from "../../../hooks";
import SERVER_URL from "../../../variables";
import { login } from "../auth.slice";

interface LoginUser {
    username: string;
    password: string
}

function Login(){

    const [inputText, setInputText] = useState<LoginUser>({
        username: '',
        password: '',
    });
    const [checkbox, setCheckbox] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    function handleChange(event:React.ChangeEvent<HTMLInputElement>): void{
        const name = event.target.name;
        const value = event.target.value;
        setInputText((preValue)=> {return {...preValue, [name]: value}})
    }

    async function handleSubmit(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>): Promise<any>{
        event.preventDefault();
        try {
            const response = await fetch(`${SERVER_URL}/login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': `${SERVER_URL}`
                },
                body: JSON.stringify(inputText)
            });
            const res = await response.json();
            dispatch(login(res));
        }
        catch (e) {
            console.log(e);
        }
    }
    
    return (
        <>
            {/* <div className="preloader"></div> */}
            <div className="main-wrap">
                <div className="nav-header bg-transparent shadow-none border-0">
                <div className="nav-top w-100">
                    <a href="#" onClick={(e)=>{e.preventDefault()}}>
                    <i className="feather-zap text-success display1-size me-2 ms-0" />
                    <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                        Sociala.{" "}
                    </span>{" "}
                    </a>
                    <a
                    href="/auth/register"
                    className="header-btn d-none d-lg-block bg-primary fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
                    >
                    Register
                    </a>
                </div>
                </div>
                <div className="row">
                <div
                    className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
                    style={{ backgroundImage: "url(/assets/images/login-bg.jpg)" }}
                />
                <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                    <div className="card shadow-none border-0 ms-auto me-auto login-card">
                    <div className="card-body rounded-0 text-left">
                        <h2 className="fw-700 display1-size display2-md-size mb-3">
                        Login into <br />
                        your account
                        </h2>
                        <form>
                        <div className="form-group icon-input mb-3">
                            <i className="font-sm ti-user text-grey-500 pe-0" />
                            <input
                            type="text"
                            className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                            placeholder="Your Username"
                            name="username"
                            value={inputText.username}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-group icon-input mb-1">
                            <input
                            type="Password"
                            className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                            placeholder="Password"
                            name="password"
                            value={inputText.password}
                            onChange={handleChange}
                            />
                            <i className="font-sm ti-lock text-grey-500 pe-0" />
                        </div>
                        <div className="form-check text-left mb-3">
                            <input
                            type="checkbox"
                            className="form-check-input mt-2"
                            id="exampleCheck5"
                            checked={checkbox}
                            onChange={()=>setCheckbox(preValue=>!preValue)}
                            />
                            <label
                            className="form-check-label font-xsss text-grey-500"
                            htmlFor="exampleCheck5"
                            >
                            Remember me
                            </label>
                            <a
                            href="#"
                            onClick={(e)=>{e.preventDefault()}}
                            className="fw-600 font-xsss text-grey-700 mt-1 float-right"
                            >
                            Forgot your Password?
                            </a>
                        </div>
                        </form>
                        <div className="col-sm-12 p-0 text-left">
                        <div className="form-group mb-1">
                            <a
                            href="#" onClick={handleSubmit}
                            className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                            >
                            Login
                            </a>
                        </div>
                        <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                            Dont have account{" "}
                            <a href="/auth/register" className="fw-700 ms-1">
                            Register
                            </a>
                        </h6>
                        </div>
                        <div className="col-sm-12 p-0 text-center mt-2">
                        <h6 className="mb-0 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">
                            Or, Sign in with your social account{" "}
                        </h6>
                        <div className="form-group mb-1">
                            <a
                            href="#" onClick={(e)=>{e.preventDefault()}}
                            className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2"
                            >
                            <img
                                src="/assets/images/icon-1.png"
                                alt="icon"
                                className="ms-2 w40 mb-1 me-5"
                            />{" "}
                            Sign in with Google
                            </a>
                        </div>
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    )
}

export default Login;