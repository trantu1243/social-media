/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import Leftbar from "../../components/leftbar";
import Rightbar from "../../components/rightbar";

function PortalLayout(){
    return (
        <div className="main-wrapper">
            <Navbar />
            <Leftbar />
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
                            <Outlet />
                            <Rightbar />
                        </div>                  
                    </div>
                </div>
            </div>
          
        </div>
    ) 
}

export default PortalLayout;