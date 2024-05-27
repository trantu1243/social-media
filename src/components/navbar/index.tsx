/* eslint-disable jsx-a11y/anchor-is-valid */
import { useAppSelector } from "../../hooks";

function Navbar(){
    const user = useAppSelector((state) => state.auth).data.user;
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
                    />
                    </div>
                </form>
                <a
                    href="/portal/home"
                    className="p-2 text-center ms-3 menu-icon center-menu-icon"
                >
                    <i className="feather-home font-lg alert-primary btn-round-lg theme-dark-bg text-current " />
                </a>
                <a
                    href="default-storie.html"
                    className="p-2 text-center ms-0 menu-icon center-menu-icon"
                >
                    <i className="feather-lock font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 " />
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
                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                    <img
                        src="/assets/images/user-8.png"
                        alt="user"
                        className="w40 position-absolute left-0"
                    />
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                        Hendrix Stamp{" "}
                        <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                        {" "}
                        3 min
                        </span>
                    </h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                        There are many variations of pass..
                    </h6>
                    </div>
                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                    <img
                        src="/assets/images/user-4.png"
                        alt="user"
                        className="w40 position-absolute left-0"
                    />
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                        Goria Coast{" "}
                        <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                        {" "}
                        2 min
                        </span>
                    </h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                        Mobile Apps UI Designer is require..
                    </h6>
                    </div>
                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                    <img
                        src="/assets/images/user-7.png"
                        alt="user"
                        className="w40 position-absolute left-0"
                    />
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                        Surfiya Zakir{" "}
                        <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                        {" "}
                        1 min
                        </span>
                    </h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                        Mobile Apps UI Designer is require..
                    </h6>
                    </div>
                    <div className="card bg-transparent-card w-100 border-0 ps-5">
                    <img
                        src="/assets/images/user-6.png"
                        alt="user"
                        className="w40 position-absolute left-0"
                    />
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                        Victor Exrixon{" "}
                        <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                        {" "}
                        30 sec
                        </span>
                    </h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                        Mobile Apps UI Designer is require..
                    </h6>
                    </div>
                </div>
                <a href="#" className="p-2 text-center ms-3 menu-icon chat-active-btn">
                    <i className="feather-message-square font-xl text-current" />
                </a>
                <div className="p-2 text-center ms-3 position-relative dropdown-menu-icon menu-icon cursor-pointer">
                    <i className="feather-settings animation-spin d-inline-block font-xl text-current" />
                </div>
                <a href={`/portal/user/${user.id}`} className="p-0 ms-3 menu-icon" >
                    <img src={user.avatar} alt="user" className="w40 mt--1" style={{borderRadius: "50%"}}/>
                </a>
                </div>
        </>
    )
}

export default Navbar