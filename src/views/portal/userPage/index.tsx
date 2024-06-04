/* eslint-disable jsx-a11y/anchor-is-valid */

import { ErrorResponse, useParams } from "react-router-dom"
import InputCard from "../../../components/inputCard"
import PostCard from "../../../components/postCard"
import React, { useCallback, useEffect, useState } from "react";
import SERVER_URL from "../../../variables";
import { User } from "../../auth/auth.slice";
import { useAppSelector } from "../../../hooks";

function UserPage(){
    const [user, setUser] = useState<User>();
    const id = useParams().id;
    const id_user = useAppSelector((state) => state.auth).data.user.id;
    const token = useAppSelector((state) => state.auth).data.token;
    const [checkPopup, setCheckPopup] = useState<Boolean>(false);
    const getUserInfo = useCallback(async()=>{
        try{
            const response = await fetch(`${SERVER_URL}/user/${id}`, {
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
            const errorResponse: ErrorResponse = {
                status: 404,
                statusText: "Not Found",
                data: "Error: No route matches URL"
              };
              throw errorResponse;
        }
    },[id, token]);
    useEffect(()=>{
        getUserInfo();
    },[getUserInfo]);

    function handlePopup(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();
        setCheckPopup(preValue=>!preValue);
    }

    async function uploadImage(event: React.ChangeEvent<HTMLInputElement>, name: String){
        event.preventDefault();
        try{
            const formData = new FormData();
            const files = event.target.files;
            if (files && files.length > 0) {
                formData.append('file', files[0]);
                formData.append('type', files[0].type);
                formData.append('id', id_user.toString());
                const response = await fetch(`${SERVER_URL}/upload/${name}`, {
                    method: "POST",
                    body: formData,
                    headers:{
                        "Authorization": token,
                    },
                });
                if (response.ok){
                    const res = await response.json();
                    console.log(res);
                    setCheckPopup(false)
                    getUserInfo();
                }
            }    
        }
        catch(e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className="main-content right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="card w-100 border-0 p-0 bg-white shadow-xss rounded-xxl">
                            <div className="card-body h250 p-0 rounded-xxl overflow-hidden m-3">
                            <img src={user?.background} alt="" style={{width:'960px', height:'250px', objectFit:'cover'}}/>
                            </div>
                            <div className="card-body p-0 position-relative">
                            <figure
                                className="avatar position-absolute w100 z-index-1"
                                style={{ top: "-40px", left: 30 }}
                            >
                                <img
                                src={user?.avatar}
                                alt=""
                                className="float-right p-1 bg-white rounded-circle w-100"
                                style={{width:'100px', height:'100px', objectFit:'cover'}}
                                />
                            </figure>
                            <h4 className="fw-700 font-sm mt-2 mb-lg-5 mb-4 pl-15">
                                {user?.name + " "}
                                
                            </h4>
                            <div className="d-flex align-items-center justify-content-center position-absolute-md right-15 top-0 me-2">
                                <a
                                href="#"
                                className="d-none d-lg-block bg-success p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3"
                                >
                                Add Friend
                                </a>
                                <a
                                href="#"
                                className="d-none d-lg-block bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700"
                                >
                                <i className="feather-mail font-md" />
                                </a>
                                <a
                                href="#"
                                id="dropdownMenu4"
                                className="d-none d-lg-block bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                onClick={handlePopup}
                                >
                                <i className="ti-more font-md tetx-dark" />
                                </a>
                                {checkPopup && <div className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg show" aria-labelledby="dropdownMenu2" data-popper-placement="bottom-end" style={{position: 'absolute', inset: 'auto auto auto auto', margin: '0px', transform: 'translate(0px, 100px)'}}>
                                    <label className="card-body p-0 d-flex" htmlFor="avatar">
                                        <i className="feather-arrow-up text-grey-500 me-3 font-lg" />
                                        <h4 className="fw-600 text-grey-900 font-xssss mt-1 me-4">Upload avatar</h4>
                                    </label>
                                    <input 
                                        type="file" 
                                        id="avatar" 
                                        accept="image/*" 
                                        style={{display: 'none'}} 
                                        onChange={(e)=>{
                                            uploadImage(e, 'avatar');
                                        }}
                                    />
                                    <label className="card-body p-0 d-flex mt-2" htmlFor="background">
                                        <i className="feather-arrow-up text-grey-500 me-3 font-lg" />
                                        <h4 className="fw-600 text-grey-900 font-xssss mt-1 me-4">Upload background</h4>
                                    </label>
                                    <input 
                                        type="file" 
                                        id="background" 
                                        accept="image/*" 
                                        style={{display: 'none'}}
                                        onChange={(e)=>{
                                            uploadImage(e, 'background');
                                        }}
                                    />
                                </div>}
                            </div>
                            </div>
                            <div className="card-body d-block w-100 shadow-none mb-0 p-0 border-top-xs">
                            <ul
                                className="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 ps-4"
                                id="pills-tab"
                                role="tablist"
                            >
                                <li className="active list-inline-item me-5" role="presentation">
                                <a
                                    className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                                    href="#navtabs1"
                                    data-toggle="tab"
                                    role="tab"
                                >
                                    About
                                </a>
                                </li>
                                <li className="list-inline-item me-5" role="presentation">
                                <a
                                    className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block"
                                    href="#navtabs2"
                                    data-toggle="tab"
                                    role="tab"
                                >
                                    Membership
                                </a>
                                </li>
                                <li className="list-inline-item me-5" role="presentation">
                                <a
                                    className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block"
                                    href="#navtabs3"
                                    data-toggle="tab"
                                    role="tab"
                                >
                                    Discussion
                                </a>
                                </li>
                                <li className="list-inline-item me-5" role="presentation">
                                <a
                                    className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block"
                                    href="#navtabs4"
                                    data-toggle="tab"
                                    role="tab"
                                >
                                    Video
                                </a>
                                </li>
                                <li className="list-inline-item me-5" role="presentation">
                                <a
                                    className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block"
                                    href="#navtabs3"
                                    data-toggle="tab"
                                    role="tab"
                                >
                                    Group
                                </a>
                                </li>
                                <li className="list-inline-item me-5" role="presentation">
                                <a
                                    className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block"
                                    href="#navtabs1"
                                    data-toggle="tab"
                                    role="tab"
                                >
                                    Events
                                </a>
                                </li>
                                <li className="list-inline-item me-5" role="presentation">
                                <a
                                    className="fw-700 me-sm-5 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block"
                                    href="#navtabs7"
                                    data-toggle="tab"
                                    role="tab"
                                >
                                    Media
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                        
                        <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
                            <div className="card-body d-block p-4">
                            <h4 className="fw-700 mb-3 font-xsss text-grey-900">About</h4>
                            <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">
                                {user?.about}
                            </p>
                            </div>
                            <div className="card-body border-top-xs d-flex">
                            <i className="feather-rss text-grey-500 me-3 font-lg" />
                            <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                                {user?.followerid ? user?.followerid.length + " followers " : "0 follower"}
                            </h4>
                            </div>
                        </div>
                        <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                            <div className="card-body d-flex align-items-center  p-4">
                            <h4 className="fw-700 mb-0 font-xssss text-grey-900">Photos</h4>
                            <a href="#" className="fw-600 ms-auto font-xssss text-primary">
                                See all
                            </a>
                            </div>
                            <div className="card-body d-block pt-0 pb-2">
                            <div className="row">
                                <div className="col-6 mb-2 pe-1">
                                <a href="/assets/images/e-2.jpg" data-lightbox="roadtrip">
                                    <img
                                    src="/assets/images/e-2.jpg"
                                    alt=""
                                    className="img-fluid rounded-3 w-100"
                                    />
                                </a>
                                </div>
                                <div className="col-6 mb-2 ps-1">
                                <a href="/assets/images/e-3.jpg" data-lightbox="roadtrip">
                                    <img
                                    src="/assets/images/e-3.jpg"
                                    alt=""
                                    className="img-fluid rounded-3 w-100"
                                    />
                                </a>
                                </div>
                                <div className="col-6 mb-2 pe-1">
                                <a href="/assets/images/e-4.jpg" data-lightbox="roadtrip">
                                    <img
                                    src="/assets/images/e-4.jpg"
                                    alt=""
                                    className="img-fluid rounded-3 w-100"
                                    />
                                </a>
                                </div>
                                <div className="col-6 mb-2 ps-1">
                                <a href="/assets/images/e-5.jpg" data-lightbox="roadtrip">
                                    <img
                                    src="/assets/images/e-5.jpg"
                                    alt=""
                                    className="img-fluid rounded-3 w-100"
                                    />
                                </a>
                                </div>
                                <div className="col-6 mb-2 pe-1">
                                <a href="/assets/images/e-2.jpg" data-lightbox="roadtrip">
                                    <img
                                    src="/assets/images/e-2.jpg"
                                    alt=""
                                    className="img-fluid rounded-3 w-100"
                                    />
                                </a>
                                </div>
                                <div className="col-6 mb-2 ps-1">
                                <a href="/assets/images/e-1.jpg" data-lightbox="roadtrip">
                                    <img
                                    src="/assets/images/e-1.jpg"
                                    alt=""
                                    className="img-fluid rounded-3 w-100"
                                    />
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="card-body d-block w-100 pt-0">
                            <a
                                href="#"
                                className="p-2 lh-28 w-100 d-block bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"
                            >
                                <i className="feather-external-link font-xss me-2" /> More
                            </a>
                            </div>
                        </div>
                        
                        </div>
                        <div className="col-xl-8 col-xxl-9 col-lg-8">
                            {id === String(id_user) && <InputCard />}
                            {user?.postid.map((item, index)=>{
                                return <PostCard post_id={String(item)}/>
                            })}
                            {/* <PostCard /> */}
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        
        </>
    )
}

export default UserPage