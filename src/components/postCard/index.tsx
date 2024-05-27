import { useCallback, useEffect, useState } from "react";
import { Params } from "react-router-dom";
import SERVER_URL from "../../variables";
import { useAppSelector } from "../../hooks";

/* eslint-disable jsx-a11y/anchor-is-valid */
interface PostCardProps {
    post_id: Readonly<Params<string>>;
}

interface Post {
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
    const [checkPopup, setCheckPopup] = useState<Boolean>(false);
    const getPost  = useCallback(async()=>{
        try {
            const response = await fetch(`${SERVER_URL}/post/${post_id.id}`,{
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

    function handlePopup(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();
        setCheckPopup(preValue=>!preValue);
    }

    return (
        <>
        <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-0">
            <div className="card-body p-0 d-flex">
                <figure className="avatar me-3">
                    <img
                    src={post.avatar_user}
                    alt=""
                    className="shadow-sm rounded-circle w45"
                    />
                </figure>
                <h4 className="fw-700 text-grey-900 font-xssss mt-1">
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
                {post.content}{" "}
                <a href="#" className="fw-600 text-primary ms-2">
                See more
                </a>
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
                className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
            >
                <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                {post.likeid.length} Like
            </a>
            <div className="emoji-wrap">
                <ul className="emojis list-inline mb-0">
                <li className="emoji list-inline-item">
                    <i className="em em---1" />{" "}
                </li>
                <li className="emoji list-inline-item">
                    <i className="em em-angry" />
                </li>
                <li className="emoji list-inline-item">
                    <i className="em em-anguished" />{" "}
                </li>
                <li className="emoji list-inline-item">
                    <i className="em em-astonished" />{" "}
                </li>
                <li className="emoji list-inline-item">
                    <i className="em em-blush" />
                </li>
                <li className="emoji list-inline-item">
                    <i className="em em-clap" />
                </li>
                <li className="emoji list-inline-item">
                    <i className="em em-cry" />
                </li>
                <li className="emoji list-inline-item">
                    <i className="em em-full_moon_with_face" />
                </li>
                </ul>
            </div>
            <a
                href="#"
                className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
            >
                <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                <span className="d-none-xss">{post.commentid.length} Comment</span>
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