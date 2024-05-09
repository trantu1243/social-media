/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";

import SERVER_URL from "../../../variables";

interface NewUser {
    username: string;
    password: string;
    name: string;
}

function Register(){
    const [inputText, setInputText] = useState<NewUser>({
        username: '',
        password: '',
        name: ''
    });
    const [checkbox, setCheckbox] = useState<boolean>(false);

    function handleChange(event:React.ChangeEvent<HTMLInputElement>): void{
        const name = event.target.name;
        const value = event.target.value;
        setInputText((preValue)=> {return {...preValue, [name]: value}})
    }

    async function handleSubmit(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>): Promise<any>{
        event.preventDefault();
        try {
            const response = await fetch(`${SERVER_URL}/register`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': `${SERVER_URL}`
                },
                body: JSON.stringify(inputText)
            });
            const res = await response.json();
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            {/* <div className="preloader" /> */}
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
                        href="/auth/login" 
                        className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
                    >
                        Login
                    </a>
                
                    </div>
                </div>
                <div className="row">
                    <div
                    className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
                    style={{ backgroundImage: "url(/assets/images/login-bg-2.jpg)" }}
                    />
                    <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                    <div className="card shadow-none border-0 ms-auto me-auto login-card">
                        <div className="card-body rounded-0 text-left">
                        <h2 className="fw-700 display1-size display2-md-size mb-4">
                            Create <br />
                            your account
                        </h2>
                        <form>
                            <div className="form-group icon-input mb-3">
                            <i className="font-sm ti-user text-grey-500 pe-0" />
                            <input
                                type="text"
                                className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                placeholder="Your Name"
                                name="name"
                                value={inputText.name}
                                onChange={handleChange}
                            />
                            </div>
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
                            <div className="form-group icon-input mb-3">
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
                            <div className="form-group icon-input mb-1">
                            <input
                                type="Password"
                                className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                                placeholder="Confirm Password"
                            />
                            <i className="font-sm ti-lock text-grey-500 pe-0" />
                            </div>
                            <div className="form-check text-left mb-3">
                            <input
                                type="checkbox"
                                className="form-check-input mt-2"
                                id="exampleCheck2"
                                checked={checkbox}
                                onChange={()=>setCheckbox(preValue=>!preValue)}
                            />
                            <label
                                className="form-check-label font-xsss text-grey-500"
                                htmlFor="exampleCheck2"
                            >
                                Accept Term and Conditions
                            </label>
                            {/* <a href="#" onClick={(e)=>{e.preventDefault()}} class="fw-600 font-xsss text-grey-700 mt-1 float-right">Forgot your Password?</a> */}
                            </div>
                        </form>
                        <div className="col-sm-12 p-0 text-left">
                            <div className="form-group mb-1">
                            <a
                                href="#" onClick={handleSubmit}
                                className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                            >
                                Register
                            </a>
                            </div>
                            <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                            Already have account{" "}
                            <a href="/auth/login" className="fw-700 ms-1">
                                Login
                            </a>
                            </h6>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
       
        </>
      
    )
}

export default Register;