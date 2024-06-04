import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SERVER_URL from "../../variables";
import { useAppSelector } from "../../hooks";

/* eslint-disable jsx-a11y/anchor-is-valid */
export interface PostCardProps {
    post_id: string;
}

export interface Post {
    id: Number;
    userid: Number;
    name: string;
    avatar_user: string;
    content: string;
    image: string[];
    interact_date: string;
    post_date: string;
    likeid: Number[];
    commentid: Number[];
    shareid: Number[];
    secret: boolean;
}
  
const PostCard: React.FC<PostCardProps> = ({ post_id }) =>{
    const [post, setPost] = useState<Post>({
        id: 0,
        userid: 0,
        name: "",
        avatar_user: "",
        content: "",
        image: [],
        interact_date: "",
        post_date: "",
        likeid: [],
        commentid: [],
        shareid: [],
        secret: false
    });
    const token = useAppSelector((state) => state.auth).data.token;
    const id = useAppSelector((state) => state.auth).data.user.id;
    const [checkPopup, setCheckPopup] = useState<Boolean>(false);
    const [checkContent, setCheckContent] = useState<Boolean>(true);
    const [checkLike, setCheckLike] = useState<Boolean>(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if (post.content.length > 50) setCheckContent(false);
    },[post.content]);

    useEffect(()=>{
        if (post.likeid.includes(id)) setCheckLike(true);
        else setCheckLike(false);
    },[post.likeid, id])

    const getPost  = useCallback(async()=>{
        try {
            const response = await fetch(`${SERVER_URL}/post/${post_id}`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': `${SERVER_URL}`,
                    'Authorization': token,
                }
            });
            if (response.ok){
                const res = await response.json();
                console.log(res);
                setPost(res);
            }
        }
        catch(e) {
            console.log(e);
        }
    },[post_id, token]);
    useEffect(()=>{
        getPost();
    },[getPost]);

    async function handleLike(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();
        try{
            const response = await fetch(`${SERVER_URL}/post/like`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': `${SERVER_URL}`,
                    'Authorization': token,
                },
                body: JSON.stringify({id: post.id})
            });
            if (response.ok){
                const res = await response.json();
                console.log(res);
                getPost();
            }
        }
        catch (e) {
            console.log(e);
        }  
    }

    function handlePopup(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();
        setCheckPopup(preValue=>!preValue);
    }

    function navigateUserPage(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.stopPropagation();
        event.preventDefault();
        navigate(`/portal/user/${post.userid}`);
    }

    function handleMore(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();
        setCheckContent(true);
    }

    return (
        <>
        <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
            <div className="card-body p-0 d-flex pointer-class" onClick={()=>{navigate(`/portal/post/${post.id}`)}}>
                <figure className="avatar me-3 pointer-class" onClick={navigateUserPage}>
                    <img
                    src={post.avatar_user}
                    alt=""
                    className="shadow-sm rounded-circle w45"
                    />
                </figure>
                <h4 className="fw-700 text-grey-900 font-xssss mt-1 pointer-class" onClick={(e)=>{e.stopPropagation();navigate(`/portal/user/${post.userid}`)}}>
                    {post.name}{" "}
                    <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                    2 hour ago
                    </span>
                </h4>
                <a href="#" className="ms-auto" onClick={handlePopup}>
                    <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                </a>
                {checkPopup && <div className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg show" aria-labelledby="dropdownMenu2" style={{margin: '0px', position: 'absolute', inset: '0px auto auto 0px', transform: 'translate(349.143px, 86.8571px)'}} data-popper-placement="bottom-end">
                    <div className="card-body p-0 d-flex">
                    <i className="feather-bookmark text-grey-500 me-3 font-lg" />
                    <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Save Link <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Add this to your saved items</span></h4>
                    </div>
                    <div className="card-body p-0 d-flex mt-2">
                    <i className="feather-alert-circle text-grey-500 me-3 font-lg" />
                    <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide Post <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                    </div>
                    <div className="card-body p-0 d-flex mt-2">
                    <i className="feather-alert-octagon text-grey-500 me-3 font-lg" />
                    <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide all from Group <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                    </div>
                    <div className="card-body p-0 d-flex mt-2">
                    <i className="feather-lock text-grey-500 me-3 font-lg" />
                    <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">Unfollow Group <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                    </div>
                </div>}
            </div>
            <div className="card-body p-0 me-lg-5">
            <p className="fw-500 text-grey-500 lh-26 font-xssss w-100">
                {checkContent ? post.content : post.content.substring(0, 50)}{" "}
                {!checkContent && <a href="#" className="fw-600 text-primary ms-2" onClick={(e)=>{}}>
                See more
                </a>}
            </p>
            </div>
            {post.image.length > 0 && <div className="card-body d-block p-0 mb-3">
                <div className="row ps-2 pe-2">
                    <div className="col-sm-12 p-1">
                        <a href="images/t-30.jpg" data-lightbox="roadtr">
                            <img src={post.image[0]} className="rounded-3 w-100" alt="" />
                        </a>
                    </div>
                </div>
            </div>}
            <div className="card-body d-flex p-0">
            <a
                href="#"
                className={checkLike ? "emoji-bttn d-flex align-items-center fw-600 text-instagram lh-26 font-xssss me-2":"emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"}
                onClick={handleLike}
        
            >
                <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                {post.likeid.length} Like
            </a>
            <a
                href="#"
                className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
            >
                <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                <span className="d-none-xss" onClick={(e)=>{e.preventDefault();navigate(`/portal/post/${post.id}`)}}>{post.commentid.length} Comment</span>
            </a>
            <a
                href="#"
                className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
            >
                <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg" />
                <span className="d-none-xs">Share</span>
            </a>
            </div>
        </div>
        </>
    )
}

export default PostCard;