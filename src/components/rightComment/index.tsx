/* eslint-disable jsx-a11y/anchor-is-valid */

import { useCallback, useEffect, useState } from "react";
import { Post, PostCardProps } from "../postCard";
import SERVER_URL from "../../variables";
import { useAppSelector } from "../../hooks";
import CommentCard from "../commentCard";

export interface Comment {
    id: Number;
    postid: Number;
    userid: Number;
    name: string;
    avatar_user: string;
    content: string;
    likeid: string[];
    commentid: string[];
    comment_date: string
}

const RightComment: React.FC<PostCardProps> = ({ post_id }) =>{
    const [commentList, setCommentList] = useState<Comment[]>([]);
    const user = useAppSelector((state)=>state.auth).data.user;
    const token = useAppSelector((state) => state.auth).data.token;
    const [yourPost, setYourPost] = useState<string>("");
    const [checkErrorInput, setCheckErrorInput] = useState<boolean>(false);

    const getPost  = useCallback(async()=>{
        try {
            const response = await fetch(`${SERVER_URL}/comment/${post_id}`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': `${SERVER_URL}`,
                    'Authorization': token,
                }
            });
            if (response.ok){
                const res = await response.json();
                console.log(res);
                setCommentList(res);
            }
        }
        catch(e) {
            console.log(e);
        }
    },[post_id, token]);
    useEffect(()=>{
        getPost();
    },[getPost]);

    async function handleSubmit(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): Promise<any>{
        event.preventDefault();
        if (yourPost)
            try {
         
                const response = await fetch(`${SERVER_URL}/upload/comment`, {
                    method: "POST",
                    headers:{
                        'Access-Control-Allow-Origin': `${SERVER_URL}`,
                        'Authorization': token,
                    },
                    body: JSON.stringify({content: yourPost, postid: Number(post_id)})
                });
                if (response.ok){
                    const res = await response.json();
                    console.log(res);
                    getPost();
                }
            }
            catch (e){
                console.log(e);
            }
        else setCheckErrorInput(true);
    }
    return (
        <>
        <div className="right-comment chat-left scroll-bar theme-dark-bg">
        <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
            <div className="card-body p-0 mt-3 position-relative">
                <figure className="avatar position-absolute ms-2 mt-1 top-5">
                    <img
                    src={user.avatar}
                    alt=""
                    className="shadow-sm rounded-circle w30"
                    />
                </figure>
                <textarea
                    name="yourPost"
                    value={yourPost}
                    onChange={(e)=> setYourPost(e.target.value)}
                    className="h75 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg"
                    cols={30}
                    rows={10}
                    placeholder="Write your comment"
                />
                {checkErrorInput && <div className="error-message">
                    Please enter your comment.
                </div>}
            </div>
            
            <div className="card-body d-flex p-0 mt-0">        
          
            <a
                href="#"
                className="py-2 px-0 lh-20 w75 bg-primary me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl ms-auto"
                onClick={handleSubmit}
            >
                Comment
            </a>
         
            </div>
        </div>
            <div className="card w-100 border-0 shadow-none right-scroll-bar">
                {commentList.map((item, index)=>{
                    return <CommentCard key={index} comment={item} />
                })}
              
            </div>
        </div>
        </>
    )
}

export default RightComment;