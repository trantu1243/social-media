/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react";
import SERVER_URL from "../../../../variables";
import { useAppSelector } from "../../../../hooks";

interface PasswordInput {
    password: string;
    new_password: string;
    confirm_password: string
}

function ChangePassword(){
    const [passwordInput, setPasswordInput] = useState<PasswordInput>({password:"", new_password:"", confirm_password:""});
    const token = useAppSelector((state) => state.auth).data.token;

    function handleChange(event:React.ChangeEvent<HTMLInputElement>): void{
        const name = event.target.name;
        const value = event.target.value;
        setPasswordInput((preValue)=> {return {...preValue, [name]: value}})
    }

    async function handleSubmit(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();
        try {
            if (passwordInput.new_password !== passwordInput.confirm_password) alert("Password not match")
            else {
                const response = await fetch(`${SERVER_URL}/update/change-password`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': `${SERVER_URL}`,
                      'Authorization': token   
                    },
                    body: JSON.stringify(passwordInput)
                });
                const res = await response.json();
                console.log(res);
                if (res.error) {
                    alert("Password incorrect");
                } else {
                    alert("Change password successfully!")
                    setPasswordInput({password:"", new_password:"", confirm_password:""});
                }
            } 
        }
        catch (e) {
            console.log(e);
        }
    }

    return <>
    <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
        <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left">
                <div className="middle-wrap">
                    <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                    <div className="card-body p-4 w-100 bg-primary border-0 d-flex rounded-3">
                        <a href="/portal/setting" className="d-inline-block mt-2">
                            <i className="ti-arrow-left font-sm text-white" />
                        </a>
                        <h4 className="font-xs text-white fw-600 ms-4 mb-0 mt-2">
                        Change Password
                        </h4>
                    </div>
                    <div className="card-body p-lg-5 p-4 w-100 border-0">
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-12 mb-3">
                                    <div className="form-gorup">
                                        <label className="mont-font fw-600 font-xssss">
                                        Current Password
                                        </label>
                                        <input
                                        type="password"
                                        name="password"
                                        value={passwordInput.password}
                                        onChange={handleChange}
                                        className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <div className="form-gorup">
                                        <label className="mont-font fw-600 font-xssss">
                                        Change Password
                                        </label>
                                        <input
                                        type="password"
                                        name="new_password"
                                        value={passwordInput.new_password}
                                        onChange={handleChange}
                                        className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mb-3">
                                    <div className="form-gorup">
                                        <label className="mont-font fw-600 font-xssss">
                                        Confirm Change Password
                                        </label>
                                        <input
                                        type="password"
                                        name="confirm_password"
                                        value={passwordInput.confirm_password}
                                        onChange={handleChange}
                                        className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mb-0">
                                    <a
                                        href="#"
                                        onClick={handleSubmit}
                                        className="bg-primary text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block"
                                    >
                                        Save
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
}

export default ChangePassword;