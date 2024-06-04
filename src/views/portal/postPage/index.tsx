import { useParams } from "react-router-dom";
import PostCard from "../../../components/postCard";
import RightComment from "../../../components/rightComment";

function PostPage(){
    const id = useParams().id;

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
                                {typeof(id) ==="string" && <PostCard post_id = {id}/>}
                            </div>
                            <div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
                                {typeof(id) ==="string" && <RightComment post_id = {id}/>}
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>
            </>
    )
}

export default PostPage;