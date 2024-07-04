/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useCallback, useEffect, useState } from "react";
import SERVER_URL from "../../variables";
import { useAppSelector } from "../../hooks";
import { SearchUser } from "../navbar";
import FriendRequestCard from "../friendRequestCard";
import FriendCard from "../FriendCard";

function Rightbar(){
    const token = useAppSelector((state) => state.auth).data.token;
    const [friendRequests, setFriendRequests] = useState<SearchUser[]>([]);
    const [friends, setFriends] = useState<SearchUser[]>([]);

    const getFriendRequests = useCallback(async()=>{
        try{
            const response = await fetch(`${SERVER_URL}/friend-request`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': `${SERVER_URL}`,
                    'Authorization': token         
                }
            });
            if (response.ok){
                const res = await response.json();
                console.log(res);
                setFriendRequests(res);
            }
        }
        catch(e) {
            console.log(e);
        }
    },[token]);

    const getFriends = useCallback(async()=>{
        try{
            const response = await fetch(`${SERVER_URL}/friends`, {
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
                    setFriends(items);
                } else setFriends(res);
            }
        }
        catch(e) {
            console.log(e);
        }
    },[token]);

    useEffect(()=>{
        getFriendRequests();
        getFriends();
    },[getFriendRequests, getFriends])

    return (
        <>
        <div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                <div className="card-body d-flex align-items-center p-4">
                <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                    Friend Request
                </h4>
                <a
                    href="default-member.html"
                    className="fw-600 ms-auto font-xssss text-primary"
                >
                    See all
                </a>
                </div>
                {friendRequests.map((item, index)=>{
                    return <FriendRequestCard key={index} user={item} />
                })}
            </div>
            <div className="card w-100 shadow-xss rounded-xxl border-0 p-0 ">
                <div className="card-body d-flex align-items-center p-4 mb-0">
                <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                    Friends
                </h4>
                <a
                    href="default-member.html"
                    className="fw-600 ms-auto font-xssss text-primary"
                >
                    See all
                </a>
                </div>
                {friends.map((item, index)=>{
                    return <FriendCard key={index} user={item} />
                })}

            </div>
            
        </div>
        </>
    )
}

export default Rightbar;