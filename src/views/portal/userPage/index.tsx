/* eslint-disable jsx-a11y/anchor-is-valid */

import { ErrorResponse, useParams } from "react-router-dom"
import InputCard from "../../../components/inputCard"
import PostCard from "../../../components/postCard"
import React, { useCallback, useEffect, useState } from "react";
import SERVER_URL from "../../../variables";
import { User } from "../../auth/auth.slice";
import { useAppSelector } from "../../../hooks";

interface FriendRequest {
    id: Number,
    userid1: Number,
    userid2: Number,
    confirm: boolean
}

export async function confirmRequest(id: Number | undefined, token: string) {
    const response = await fetch(`${SERVER_URL}/confirm-request/${id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': `${SERVER_URL}`,
            'Authorization': token         
        }
    });
    if (response.ok){
        const res = await response.json();
        return res
    }
}

function UserPage(){
    const [user, setUser] = useState<User>();
    const id = useParams().id;
    const id_user = useAppSelector((state) => state.auth).data.user.id;
    const token = useAppSelector((state) => state.auth).data.token;
    const [checkPopup, setCheckPopup] = useState<Boolean>(false);
    const [friendRequest, setFriendRequest] = useState<FriendRequest | null>(null);
    const [requestStatus, setRequestStatus] = useState<Number>(0);
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

    const checkAddFriend = useCallback(async()=>{
        try{
            const response = await fetch(`${SERVER_URL}/check/add-friend/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': `${SERVER_URL}`,
                    'Authorization': token         
                }
            });
            if (response.ok){
                const res = await response.json();
                console.log(res);
                setFriendRequest(res);
            }
        }
        catch(e) {
            console.log(e);
            setFriendRequest(null);
        }
    },[token, id]);

    useEffect(()=>{
        getUserInfo();
    },[getUserInfo]);

    useEffect(()=>{
        checkAddFriend()
    }, [checkAddFriend]);

    useEffect(()=>{
        if (friendRequest) {
            if (friendRequest.confirm === true) setRequestStatus(3);
            else if (friendRequest.userid1 === id_user && friendRequest.userid2 === Number(id)) setRequestStatus(1);
            else if (friendRequest.userid1 === Number(id) && friendRequest.userid2 === id_user) setRequestStatus(2);
            else setRequestStatus(0);
        }
        else setRequestStatus(0);
    },[friendRequest, id_user, id]);

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

    async function addFriend(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        try{
            const response = await fetch(`${SERVER_URL}/add-friend`, {
                method: "POST",
                headers:{
                    'Access-Control-Allow-Origin': `${SERVER_URL}`,
                    'Authorization': token,
                },
                body: JSON.stringify({id1: id_user, id2: user?.id})
            });
            if (response.ok){
                const res = await response.json();
                console.log(res);
                checkAddFriend();
                getUserInfo();
            }
        }
        catch(e) {
            console.log(e);
        }
    }

    async function handleConfirm(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        try{
            await confirmRequest(user?.id, token);
            checkAddFriend();
            getUserInfo();
        }
        catch(e){
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
                                            {!(id_user === user?.id) && <>
                                               {requestStatus === 0 ? <a
                                                    href="#"
                                                    className="d-none d-lg-block bg-success p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3"
                                                    onClick={addFriend}
                                                >
                                                Add friend
                                                </a>:
                                                requestStatus === 3 ? <a
                                                    href="#"
                                                    className="d-none d-lg-block bg-greylight p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3 text-grey-700"
                                                    onClick={(e)=>{e.preventDefault()}}
                                                >
                                                Your friend
                                                </a>:
                                                requestStatus === 1 ? <a
                                                    href="#"
                                                    className="d-none d-lg-block bg-greylight p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3 text-grey-700"
                                                    onClick={(e)=>{e.preventDefault()}}
                                                >
                                                Added friend
                                                </a>:
                                                <a
                                                    href="#"
                                                    className="d-none d-lg-block bg-success p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3"
                                                    onClick={handleConfirm}
                                                >
                                                Confirm request
                                                </a>
                                                }
                                                <a
                                                href="#"
                                                className="d-none d-lg-block bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700"
                                                >
                                                    <i className="feather-mail font-md" />
                                                </a>
                                            </>}
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
                                            {checkPopup && id_user === user?.id && <div className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg show" aria-labelledby="dropdownMenu2" data-popper-placement="bottom-end" style={{position: 'absolute', inset: 'auto auto auto auto', margin: '0px', transform: 'translate(0px, 100px)'}}>
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
                                        <div className="card-body d-flex">
                                            <i className="feather-rss text-grey-500 me-3 font-lg" />
                                            <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                                                {user?.followingid ? user?.followingid.length + " following " : "0 following"}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-xxl-9 col-lg-8">
                                    {id === String(id_user) && <InputCard />}
                                    {user?.postid.map((item, index)=>{
                                        return <PostCard key={index} post_id={String(item)}/>
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