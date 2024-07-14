/* eslint-disable jsx-a11y/anchor-has-content */

import { useCallback, useEffect, useState } from "react";
import InputCard from "../../../components/inputCard";
import PostCard from "../../../components/postCard";
import Rightbar from "../../../components/rightbar";
import SERVER_URL from "../../../variables";
import { useAppSelector } from "../../../hooks";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Home(){

    const [postidList, setPostidList] = useState<Number[]>([]);
    const [idList, setIdList] = useState<Number[]>([]);
    const [index, setIndex] = useState<number>(0);
    const token = useAppSelector((state)=>state.auth.data.token);

    const getPostIds = useCallback(async()=>{
        try{
            const response = await fetch(`${SERVER_URL}/posts/following`, {
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

    const handleScroll = useCallback(() => {
        if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
            setIndex(preVal => preVal + 1);
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    useEffect(()=>{
        if (index <= Math.floor(postidList.length / 5)){
            if (index === Math.floor(postidList.length / 5)) setIdList(postidList);
            else {
                let nums: Number[] = [];
                for (let i=0; i<(index+1)*5; i++){
                    nums.push(postidList[i]);
                }       
                setIdList(nums);
            }
            window.addEventListener("scroll", handleScroll);
        }
    }, [index, postidList, handleScroll])

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
                        <div className="card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0">
                            <div className="owl-carousel category-card owl-theme overflow-hidden nav-none">
                            <div className="item">
                                <div
                                data-bs-toggle="modal"
                                data-bs-target="#Modalstory"
                                className="card w125 h200 d-block border-0 shadow-none rounded-xxxl bg-dark overflow-hidden mb-3 mt-3"
                                >
                                <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                                    <a href="#">
                                    <span className="btn-round-lg bg-white">
                                        <i className="feather-plus font-lg" />
                                    </span>
                                    <div className="clearfix" />
                                    <h4 className="fw-700 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                        Add Story{" "}
                                    </h4>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div
                                data-bs-toggle="modal"
                                data-bs-target="#Modalstory"
                                className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3"
                                style={{ backgroundImage: "url(/assets/images/s-1.jpg)" }}
                                >
                                <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                                    <a href="#">
                                    <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                        <img
                                        src="/assets/images/user-11.png"
                                        alt=""
                                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                        />
                                    </figure>
                                    <div className="clearfix" />
                                    <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                        Victor Exrixon{" "}
                                    </h4>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div
                                data-bs-toggle="modal"
                                data-bs-target="#Modalstory"
                                className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3"
                                style={{ backgroundImage: "url(/assets/images/s-2.jpg)" }}
                                >
                                <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                                    <a href="#">
                                    <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                        <img
                                        src="/assets/images/user-12.png"
                                        alt=""
                                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                        />
                                    </figure>
                                    <div className="clearfix" />
                                    <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                        Surfiya Zakir{" "}
                                    </h4>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div
                                data-bs-toggle="modal"
                                data-bs-target="#Modalstory"
                                className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3"
                                >
                                <video autoPlay={undefined} loop={undefined} className="float-right w-100">
                                    <source src="/assets/images/s-4.mp4" type="video/mp4" />
                                </video>
                                <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                                    <a href="#">
                                    <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                        <img
                                        src="/assets/images/user-9.png"
                                        alt=""
                                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                        />
                                    </figure>
                                    <div className="clearfix" />
                                    <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                        Goria Coast{" "}
                                    </h4>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div
                                data-bs-toggle="modal"
                                data-bs-target="#Modalstory"
                                className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3 me-1"
                                >
                                <video autoPlay={undefined} loop={undefined} className="float-right w-100">
                                    <source src="/assets/images/s-3.mp4" type="video/mp4" />
                                </video>
                                <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                                    <a href="#">
                                    <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                        <img
                                        src="/assets/images/user-4.png"
                                        alt=""
                                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                        />
                                    </figure>
                                    <div className="clearfix" />
                                    <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                        Hurin Seary{" "}
                                    </h4>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div
                                data-bs-toggle="modal"
                                data-bs-target="#Modalstory"
                                className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3"
                                style={{ backgroundImage: "url(/assets/images/s-5.jpg)" }}
                                >
                                <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                                    <a href="#">
                                    <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                        <img
                                        src="/assets/images/user-3.png"
                                        alt=""
                                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                        />
                                    </figure>
                                    <div className="clearfix" />
                                    <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                        David Goria{" "}
                                    </h4>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div
                                data-bs-toggle="modal"
                                data-bs-target="#Modalstory"
                                className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3"
                                style={{ backgroundImage: "url(/assets/images/s-6.jpg)" }}
                                >
                                <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                                    <a href="#">
                                    <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                        <img
                                        src="/assets/images/user-2.png"
                                        alt=""
                                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                        />
                                    </figure>
                                    <div className="clearfix" />
                                    <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                        Seary Victor{" "}
                                    </h4>
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <InputCard />
                        {idList.map((item, index)=>{
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

export default Home;