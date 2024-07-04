/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { useCallback, useEffect, useState } from "react";
import SERVER_URL from "../../variables";

export interface SearchUser {
    id: Number;
    name: string,
    about: string,
    avatar: string,
    followerid: string[]
}

export interface Notification {
    id: Number;
    postid: Number;
    userid: Number;
    name: string;
    avatar_image_url: string;
    content: string;
    notification_date: string
}

export function timeAgo(dateString: string): string {
    const now = new Date();
    const past = new Date(dateString);
    const diffInMs = now.getTime() - past.getTime();

    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
    const diffInMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));
    const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));

    if (diffInSeconds < 60) {
        return `${diffInSeconds} second${diffInSeconds > 1 ? 's' : ''}`;
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes} min${diffInMinutes > 1 ? 's' : ''}`;
    } else if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours > 1 ? 's' : ''}`;
    } else if (diffInDays < 7) {
        return `${diffInDays} day${diffInDays > 1 ? 's' : ''}`;
    } else if (diffInWeeks < 4) {
        return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''}`;
    } else if (diffInMonths < 12) {
        return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''}`;
    } else {
        return `${diffInYears} year${diffInYears > 1 ? 's' : ''}`;
    }
}

function Navbar(){
    const user = useAppSelector((state) => state.auth).data.user;
    const token = useAppSelector((state) => state.auth).data.token; 
    const location = useLocation();
    const navigate = useNavigate();
    const [path, setPath] = useState<Number>(0);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const getNotifications = useCallback(async()=>{
        try{
            const response = await fetch(`${SERVER_URL}/notifications`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': `${SERVER_URL}`,
                    'Authorization': token         
                }
            });
            if (response.ok){
                const res = await response.json();
                console.log(res);
                if (res.length > 3) {
                    let items = [];
                    for(let i=0; i<3; i++){
                        items.push(res[i]);
                    }
                    setNotifications(items);
                } else setNotifications(res);
            }
        }
        catch(e) {
            console.log(e);
        }
    },[token]);

    useEffect(()=>{
        getNotifications();
    },[getNotifications]);

    useEffect(()=>{
        if (location.pathname === "/portalhome") setPath(0);
        else if (location.pathname === "/portal/secret") setPath(1);
    },[location]);

    const [searchInput, setSearchInput] =  useState<string>("");
    const [userList, setUserList] = useState<SearchUser[]>([]);
    const [serachPopup, setSearchPopup] = useState<boolean>(false);
    const handleSearch = useCallback(async ()=>{
        try{
            const response = await fetch(`${SERVER_URL}/search/user`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': `${SERVER_URL}`,
                    'Authorization': token         
                },
                body: JSON.stringify({search_name: searchInput})
            });
            if (response.ok){
                const res = await response.json();
                console.log(res);
                setUserList(res);
            }
        }
        catch(e){
            console.log(e);
        }
    }, [token, searchInput]);

    useEffect(()=>{
        if (searchInput !== "") {
            handleSearch();
            setSearchPopup(true);
        }
        else setSearchPopup(false);
    },[searchInput, handleSearch]);

    return (
        <>
        <div className="nav-header bg-white shadow-xs border-0">
                <div className="nav-top">
                    <a href="/portal/home">
                    <i className="feather-zap text-success display1-size me-2 ms-0" />
                    <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                        Sociala.{" "}
                    </span>{" "}
                    </a>
                    <a href="#" className="mob-menu ms-auto me-2 chat-active-btn">
                    <i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight" />
                    </a>
                    <a href="default-video.html" className="mob-menu me-2">
                    <i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight" />
                    </a>
                    <a href="#" className="me-2 menu-search-icon mob-menu">
                    <i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight" />
                    </a>
                    <button className="nav-menu me-0 ms-2" />
                </div>
                <form action="#" className="float-left header-search">
                    <div className="form-group mb-0 icon-input">
                    <i className="feather-search font-sm text-grey-400" />
                    <input
                        type="text"
                        placeholder="Start typing to search.."
                        className="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg"
                        name="search"
                        value={searchInput}
                        onChange={(e)=>{setSearchInput(e.target.value)}}
                    />
                    </div>
                </form>
                {serachPopup && <div
                className="dropdown-menu dropdown-menu-end p-4 rounded-3 border-0 shadow-lg show"
                style={{
                    position: "absolute",
                    inset: "0px auto auto 0px",
                    margin: 0,
                    width: "300px",
                    transform: "translate(310px, 75.4286px)"
                }}
                >
                    {userList.map((item, index)=>{
                        return <div key={index} className="card bg-transparent-card w-100 border-0 ps-5 mb-3 pointer-class"
                                onClick={()=>{navigate(`/portal/user/${item.id}`); setSearchInput("")}}
                            >
                                <img
                                src={item.avatar}
                                alt="user"
                                className="w40 position-absolute left-0"
                                style={{borderRadius: "50%", height: "40px", objectFit:"cover"}}
                                />
                                <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                                {item.name}
                            
                                </h5>
                                <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                                    {item.followerid.length + " followers"}
                                </h6>
                            </div>
                    })}
                    {userList.length === 0 &&
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                            No result
                        </h6>
                }
                </div>}

                <a
                    href="/portal/home"
                    className="p-2 text-center ms-3 menu-icon center-menu-icon"
                >
                    <i className={"feather-home " + (path === 0? "font-lg alert-primary btn-round-lg theme-dark-bg text-current ":"font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500")}/>
                </a>
                <a
                    href="/portal/secret"
                    className="p-2 text-center ms-0 menu-icon center-menu-icon"
                >
                    <i className={"feather-lock " + (path === 1 ? "font-lg alert-primary btn-round-lg theme-dark-bg text-current ":"font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500")}/>
                </a>

                <a
                    href="default-storie.html"
                    className="p-2 text-center ms-0 menu-icon center-menu-icon"
                >
                    <i className="feather-edit-3 font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 " />
                </a>
                
                <a
                    href="default-storie.html"
                    className="p-2 text-center ms-0 menu-icon center-menu-icon"
                >
                    <i className="feather-heart font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 " />
                </a>

                <a
                    href="#"
                    className="p-2 text-center ms-auto menu-icon"
                    id="dropdownMenu3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span className="dot-count bg-warning" />
                    <i className="feather-bell font-xl text-current" />
                </a>
                <div
                    className="dropdown-menu dropdown-menu-end p-4 rounded-3 border-0 shadow-lg"
                    aria-labelledby="dropdownMenu3"
                >
                    <h4 className="fw-700 font-xss mb-4">Notification</h4>
                   {notifications.map((item, index)=>{
                        return  <div key={index} 
                            className="card bg-transparent-card w-100 border-0 ps-5 mb-3 pointer-class" 
                            style={{minWidth: "240px"}}
                            onClick={()=>{navigate(`/portal/post/${item.postid}`)}}
                            >
                        <img
                            src={item.avatar_image_url}
                            alt="user"
                            className="w40 position-absolute left-0"
                            style={{borderRadius: "50%", height: "40px" ,objectFit:"cover"}}
                        />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                            {item.name}
                            <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                            {timeAgo(item.notification_date)}
                            </span>
                        </h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                            {item.content}
                        </h6>
                    </div>
                   })}
                  
                </div>
                <a href="#" className="p-2 text-center ms-3 menu-icon chat-active-btn">
                    <i className="feather-message-square font-xl text-current" />
                </a>
                <div className="p-2 text-center ms-3 position-relative dropdown-menu-icon menu-icon cursor-pointer"
                    onClick={()=>{navigate("/portal/setting")}}
                >
                    <i className="feather-settings d-inline-block font-xl text-current" />
                </div>
                <a href={`/portal/user/${user.id}`} className="p-0 ms-3 menu-icon" >
                    <img src={user.avatar} alt="user" className="w40 mt--1" style={{borderRadius: "50%", height: "40px", objectFit:"cover"}}/>
                </a>
                </div>
        </>
    )
}

export default Navbar