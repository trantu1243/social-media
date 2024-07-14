/* eslint-disable jsx-a11y/anchor-has-content */

import { useCallback, useEffect, useState } from "react";
import PostCard from "../../../components/postCard";
import Rightbar from "../../../components/rightbar";
import SERVER_URL from "../../../variables";
import { useAppSelector } from "../../../hooks";
import SecretInputCard from "../../../components/secretInputCard";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Secret(){

    const [postidList, setPostidList] = useState<Number[]>([]);
    const token = useAppSelector((state)=>state.auth.data.token);

    const getPostIds = useCallback(async()=>{
        try{
            const response = await fetch(`${SERVER_URL}/posts/secret`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': `${SERVER_URL}`,
                    'Authorization': token         
                }
            });
            if (response.ok){
                const res = await response.json();
                console.log(res);
                setPostidList(res);
            }
        }
        catch(e){
            console.log(e);
        }
    }, [token]);

    useEffect(()=>{
       getPostIds();
    }, [getPostIds]);

    return (
        <>
        <div className="main-content right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left">
                        <div className="preloader-wrap p-3">
                            <div className="box shimmer">
                            <div className="lines">
                                <div className="line s_shimmer" />
                                <div className="line s_shimmer" />
                                <div className="line s_shimmer" />
                                <div className="line s_shimmer" />
                            </div>
                            </div>
                            <div className="box shimmer mb-3">
                            <div className="lines">
                                <div className="line s_shimmer" />
                                <div className="line s_shimmer" />
                                <div className="line s_shimmer" />
                                <div className="line s_shimmer" />
                            </div>
                            </div>
                            <div className="box shimmer">
                            <div className="lines">
                                <div className="line s_shimmer" />
                                <div className="line s_shimmer" />
                                <div className="line s_shimmer" />
                                <div className="line s_shimmer" />
                            </div>
                            </div>
                        </div>
      
                        <div className="row feed-body">
           
                    
                        <div className="col-xl-8 col-xxl-9 col-lg-8">
                        
                            <SecretInputCard />
                            {postidList.map((item, index)=>{
                                return <PostCard key={index} post_id={String(item)} />
                            })}

                        <div className="card w-100 text-center shadow-xss rounded-xxl border-0 p-4 mb-3 mt-3">
                            <div
                            className="snippet mt-2 ms-auto me-auto"
                            data-title=".dot-typing"
                            >
                            <div className="stage">
                                <div className="dot-typing" />
                            </div>
                            </div>
                        </div>
                        </div>
                          <Rightbar />
                        </div>                  
                    </div>
                </div>
            </div>    
            </>

    )
}

export default Secret;