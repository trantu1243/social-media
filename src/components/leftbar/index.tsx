import { useAppDispatch } from "../../hooks";
import { logout } from "../../views/auth/auth.slice";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Leftbar(){
    const dispatch = useAppDispatch();
    return (
        <>
            <nav className="navigation scroll-bar">
                <div className="container ps-0 pe-0">
                    <div className="nav-content">
                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                        <div className="nav-caption fw-600 font-xssss text-grey-500">
                        <span>New </span>Feeds
                        </div>
                        <ul className="mb-1 top-content">
                            <li className="logo d-none d-xl-block d-lg-block" />
                            <li>
                                <a href="default.html" className="nav-content-bttn open-font">
                                <i className="feather-tv btn-round-md bg-blue-gradiant me-3" />
                                <span>Newsfeed</span>
                                </a>
                            </li>
                            <li>
                                <a href="default.html" className="nav-content-bttn open-font">
                                <i className="feather-lock btn-round-md bg-gold-gradiant me-3" />
                                <span>Secret</span>
                                </a>
                            </li>

                            <li>
                                <a href="user-page.html" className="nav-content-bttn open-font">
                                <i className="feather-bell btn-round-md bg-red-gradiant me-3" />
                                <span>Notifications</span>
                                </a>
                            </li>
                      
                            <li>
                                <a href="user-page.html" className="nav-content-bttn open-font">
                                <i className="feather-user btn-round-md bg-primary me-3" />
                                <span>Author Profile </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
                        <div className="nav-caption fw-600 font-xssss text-grey-500">
                        <span /> Account
                        </div>
                        <ul className="mb-1">
                            <li className="logo d-none d-xl-block d-lg-block" />
                            <li>
                                <a href="user-page.html" className="nav-content-bttn open-font">
                                <i className="feather-settings btn-round-md bg-mini-gradiant me-3" />
                                <span>Settings</span>
                                </a>
                            </li>

                            <li>
                                <a href="user-page.html" className="nav-content-bttn open-font">
                                <i className="feather-message-square btn-round-md bg-primary me-3" />
                                <span>Chat</span>
                                <span className="circle-count bg-warning mt-0">23</span>
                                </a>
                            </li>

                            <li>
                                <a href="/auth/login" className="nav-content-bttn open-font" 
                                    onClick={()=>{dispatch(logout());}}
                                >
                                    <i className="feather-log-out btn-round-md bg-red-gradiant me-3" />
                                    <span>Logout</span>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Leftbar