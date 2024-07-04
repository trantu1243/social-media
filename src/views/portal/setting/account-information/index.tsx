/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../../../hooks";
import SERVER_URL from "../../../../variables";
import { User } from "../../../auth/auth.slice";

interface InfoUser {
    name: string,
    about: string
}

function UserInformation(){
    const user_origin = useAppSelector(state=>state.auth.data.user);
    const token = useAppSelector((state) => state.auth).data.token;
    const [user, setUser] = useState<User>(user_origin);
    const [infoUser, setInfoUser] = useState<InfoUser>({name:"", about: ""});

    const getUserInfo = useCallback(async()=>{
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
                console.log(res);
                setUser(res);
            }
        }
        catch(e) {
            console.log(e);
        }
    },[token]);
    useEffect(()=>{
        getUserInfo();
    }, [getUserInfo]);
    useEffect(()=>{
        setInfoUser({name: user.name, about: user.about?user.about:""})
    },[user]);

    function handleChange(event:React.ChangeEvent<HTMLInputElement>): void{
        const name = event.target.name;
        const value = event.target.value;
        setInfoUser((preValue)=> {return {...preValue, [name]: value}})
    }

    async function handleSubmit(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();
        try {
            const response = await fetch(`${SERVER_URL}/update/user-info`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': `${SERVER_URL}`,
                  'Authorization': token   
                },
                body: JSON.stringify(infoUser)
            });
            const res = await response.json();
            console.log(res);
            getUserInfo();
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
                            User Detail
                            </h4>
                        </div>
                        <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                            <div className="row justify-content-center">
                            <div className="col-lg-4 text-center">
                                <figure className="avatar ms-auto me-auto mb-0 mt-2 w100">
                                <img
                                    src={user.avatar}
                                    alt="image"
                                    className="shadow-sm w-100"
                                    style={{borderRadius: "50%", height: "100px", objectFit:"cover"}}
                                />
                                </figure>
                                <h2 className="fw-700 font-sm text-grey-900 mt-3">
                                {user.name}
                                </h2>
                            </div>
                            </div>
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">
                                            Name
                                            </label>
                                            <input type="text" className="form-control" name="name" value={infoUser.name} onChange={handleChange}/>
                                        </div>
                                    </div>
                                </div>
                        
                        
                            <div className="row">
                                <div className="col-lg-12 mb-3">
                                    <label className="mont-font fw-600 font-xsss">
                                        About
                                    </label>
                                    <textarea
                                        className="form-control mb-0 p-3 h100 bg-greylight lh-16"
                                        rows={5}
                                        placeholder="Write about you..."
                                        spellCheck="false"
                                        name="about"
                                        value={infoUser.about}
                                        onChange={(e)=>{ const name = e.target.name;
                                            const value = e.target.value;
                                            setInfoUser((preValue)=> {return {...preValue, [name]: value}})}}
                                    />
                                </div>
                                <div className="col-lg-12">
                                    <a
                                        href="#"
                                        className="bg-primary text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block"
                                        onClick={handleSubmit}
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

export default UserInformation;