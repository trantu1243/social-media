/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import Leftbar from "../../components/leftbar";

function PortalLayout(){
    return (
        <div className="main-wrapper">
            <Navbar />
            <Leftbar />
            <Outlet />
            <div className="right-chat nav-wrap mt-2 right-scroll-bar">
                <div className="middle-sidebar-right-content bg-white shadow-xss rounded-xxl">
                    {/* loader wrapper */}
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
                    {/* loader wrapper */}
                    <div className="section full pe-3 ps-4 pt-4 position-relative feed-body">
                    <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">
                        CONTACTS
                    </h4>
                    <ul className="list-group list-group-flush">
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                        <figure className="avatar float-left mb-0 me-2">
                            <img src="/assets/images/user-8.png" alt="" className="w35" />
                        </figure>
                        <h3 className="fw-700 mb-0 mt-0">
                            <a
                            className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                            href="#"
                            >
                            Hurin Seary
                            </a>
                        </h3>
                        <span className="badge badge-primary text-white badge-pill fw-500 mt-0">
                            2
                        </span>
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                        <figure className="avatar float-left mb-0 me-2">
                            <img src="/assets/images/user-7.png" alt="" className="w35" />
                        </figure>
                        <h3 className="fw-700 mb-0 mt-0">
                            <a
                            className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                            href="#"
                            >
                            Victor Exrixon
                            </a>
                        </h3>
                        <span className="bg-success ms-auto btn-round-xss" />
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                        <figure className="avatar float-left mb-0 me-2">
                            <img src="/assets/images/user-6.png" alt="" className="w35" />
                        </figure>
                        <h3 className="fw-700 mb-0 mt-0">
                            <a
                            className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                            href="#"
                            >
                            Surfiya Zakir
                            </a>
                        </h3>
                        <span className="bg-warning ms-auto btn-round-xss" />
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                        <figure className="avatar float-left mb-0 me-2">
                            <img src="/assets/images/user-5.png" alt="" className="w35" />
                        </figure>
                        <h3 className="fw-700 mb-0 mt-0">
                            <a
                            className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                            href="#"
                            >
                            Goria Coast
                            </a>
                        </h3>
                        <span className="bg-success ms-auto btn-round-xss" />
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                        <figure className="avatar float-left mb-0 me-2">
                            <img src="/assets/images/user-4.png" alt="" className="w35" />
                        </figure>
                        <h3 className="fw-700 mb-0 mt-0">
                            <a
                            className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                            href="#"
                            >
                            Hurin Seary
                            </a>
                        </h3>
                        <span className="badge mt-0 text-grey-500 badge-pill pe-0 font-xsssss">
                            4:09 pm
                        </span>
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                        <figure className="avatar float-left mb-0 me-2">
                            <img src="/assets/images/user-3.png" alt="" className="w35" />
                        </figure>
                        <h3 className="fw-700 mb-0 mt-0">
                            <a
                            className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                            href="#"
                            >
                            David Goria
                            </a>
                        </h3>
                        <span className="badge mt-0 text-grey-500 badge-pill pe-0 font-xsssss">
                            2 days
                        </span>
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                        <figure className="avatar float-left mb-0 me-2">
                            <img src="/assets/images/user-2.png" alt="" className="w35" />
                        </figure>
                        <h3 className="fw-700 mb-0 mt-0">
                            <a
                            className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                            href="#"
                            >
                            Seary Victor
                            </a>
                        </h3>
                        <span className="bg-success ms-auto btn-round-xss" />
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                        <figure className="avatar float-left mb-0 me-2">
                            <img src="/assets/images/user-12.png" alt="" className="w35" />
                        </figure>
                        <h3 className="fw-700 mb-0 mt-0">
                            <a
                            className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                            href="#"
                            >
                            Ana Seary
                            </a>
                        </h3>
                        <span className="bg-success ms-auto btn-round-xss" />
                        </li>
                    </ul>
                    </div>
                    <div className="section full pe-3 ps-4 pt-4 pb-4 position-relative feed-body">
                    <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">
                        GROUPS
                    </h4>
                    <ul className="list-group list-group-flush">
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                        <span className="btn-round-sm bg-primary-gradiant me-3 ls-3 text-white font-xssss fw-700">
                            UD
                        </span>
                        <h3 className="fw-700 mb-0 mt-0">
                            <a
                            className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                            href="#"
                            >
                            Studio Express
                            </a>
                        </h3>
                        <span className="badge mt-0 text-grey-500 badge-pill pe-0 font-xsssss">
                            2 min
                        </span>
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                        <span className="btn-round-sm bg-gold-gradiant me-3 ls-3 text-white font-xssss fw-700">
                            AR
                        </span>
                        <h3 className="fw-700 mb-0 mt-0">
                            <a
                            className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                            href="#"
                            >
                            Armany Design
                            </a>
                        </h3>
                        <span className="bg-warning ms-auto btn-round-xss" />
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                        <span className="btn-round-sm bg-mini-gradiant me-3 ls-3 text-white font-xssss fw-700">
                            UD
                        </span>
                        <h3 className="fw-700 mb-0 mt-0">
                            <a
                            className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                            href="#"
                            >
                            De fabous
                            </a>
                        </h3>
                        <span className="bg-success ms-auto btn-round-xss" />
                        </li>
                    </ul>
                    </div>
                    <div className="section full pe-3 ps-4 pt-0 pb-4 position-relative feed-body">
                    <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">
                        Pages
                    </h4>
                    <ul className="list-group list-group-flush">
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                        <span className="btn-round-sm bg-primary-gradiant me-3 ls-3 text-white font-xssss fw-700">
                            AB
                        </span>
                        <h3 className="fw-700 mb-0 mt-0">
                            <a
                            className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                            href="#"
                            >
                            Armany Seary
                            </a>
                        </h3>
                        <span className="bg-success ms-auto btn-round-xss" />
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                        <span className="btn-round-sm bg-gold-gradiant me-3 ls-3 text-white font-xssss fw-700">
                            SD
                        </span>
                        <h3 className="fw-700 mb-0 mt-0">
                            <a
                            className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                            href="#"
                            >
                            Entropio Inc
                            </a>
                        </h3>
                        <span className="bg-success ms-auto btn-round-xss" />
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                {/* right chat */}
                <div className="app-footer border-0 shadow-lg bg-primary-gradiant">
                <a href="default.html" className="nav-content-bttn nav-center">
                    <i className="feather-home" />
                </a>
                <a href="default-video.html" className="nav-content-bttn">
                    <i className="feather-package" />
                </a>
                <a
                    href="default-live-stream.html"
                    className="nav-content-bttn"
                    data-tab="chats"
                >
                    <i className="feather-layout" />
                </a>
                <a href="shop-2.html" className="nav-content-bttn">
                    <i className="feather-layers" />
                </a>
                <a href="default-settings.html" className="nav-content-bttn">
                    <img
                    src="/assets/images/female-profile.png"
                    alt="user"
                    className="w30 shadow-xss"
                    />
                </a>
                </div>
                <div className="app-header-search">
                <form className="search-form">
                    <div className="form-group searchbox mb-0 border-0 p-1">
                    <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Search..."
                    />
                    <i className="input-icon">
                        
                    </i>
                    <a
                        href="#"
                        className="ms-1 mt-1 d-inline-block close searchbox-close"
                    >
                        <i className="ti-close font-xs" />
                    </a>
                    </div>
                </form>
                </div>
     
            <div
                className="modal bottom side fade"
                id="Modalstory"
                tabIndex={-1}
                role="dialog"
                style={{ overflowY: "auto" }}
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content border-0 bg-transparent">
                    <button
                    type="button"
                    className="close mt-0 position-absolute top--30 right--10"
                    data-dismiss="modal"
                    aria-label="Close"
                    >
                    <i className="ti-close text-grey-900 font-xssss" />
                    </button>
                    <div className="modal-body p-0">
                    <div className="card w-100 border-0 rounded-3 overflow-hidden bg-gradiant-bottom bg-gradiant-top">
                        <div className="owl-carousel owl-theme dot-style3 story-slider owl-dot-nav nav-none">
                        <div className="item">
                            <img src="/assets/images/story-5.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/story-6.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/story-7.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/story-8.jpg" alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="form-group mt-3 mb-0 p-3 position-absolute bottom-0 z-index-1 w-100">
                        <input
                        type="text"
                        placeholder="Write Comments"
                        className="style2-input w-100 bg-transparent border-light-md p-3 pe-5 font-xssss fw-500 text-white"
                        defaultValue="Write Comments"
                        />
                        <span
                        className="feather-send text-white font-md text-white position-absolute"
                        style={{ bottom: 35, right: 30 }}
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="modal-popup-chat">
                <div className="modal-popup-wrap bg-white p-0 shadow-lg rounded-3">
                <div className="modal-popup-header w-100 border-bottom">
                    <div className="card p-3 d-block border-0 d-block">
                    <figure className="avatar mb-0 float-left me-2">
                        <img src="/assets/images/user-12.png" alt="" className="w35 me-1" />
                    </figure>
                    <h5 className="fw-700 text-primary font-xssss mt-1 mb-1">
                        Hendrix Stamp
                    </h5>
                    <h4 className="text-grey-500 font-xsssss mt-0 mb-0">
                        <span className="d-inline-block bg-success btn-round-xss m-0" />{" "}
                        Available
                    </h4>
                    <a
                        href="#"
                        className="font-xssss position-absolute right-0 top-0 mt-3 me-4"
                    >
                        <i className="ti-close text-grey-900 mt-2 d-inline-block" />
                    </a>
                    </div>
                </div>
                <div className="modal-popup-body w-100 p-3 h-auto">
                    <div className="message">
                    <div className="message-content font-xssss lh-24 fw-500">
                        Hi, how can I help you?
                    </div>
                    </div>
                    <div className="date-break font-xsssss lh-24 fw-500 text-grey-500 mt-2 mb-2">
                    Mon 10:20am
                    </div>
                    <div className="message self text-right mt-2">
                    <div className="message-content font-xssss lh-24 fw-500">
                        I want those files for you. I want you to send 1 PDF and 1 image
                        file.
                    </div>
                    </div>
                    <div
                    className="snippet pt-3 ps-4 pb-2 pe-3 mt-2 bg-grey rounded-xl float-right"
                    data-title=".dot-typing"
                    >
                    <div className="stage">
                        <div className="dot-typing" />
                    </div>
                    </div>
                    <div className="clearfix" />
                </div>
                <div className="modal-popup-footer w-100 border-top">
                    <div className="card p-3 d-block border-0 d-block">
                    <div className="form-group icon-right-input style1-input mb-0">
                        <input
                        type="text"
                        placeholder="Start typing.."
                        className="form-control rounded-xl bg-greylight border-0 font-xssss fw-500 ps-3"
                        />
                        <i className="feather-send text-grey-500 font-md" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    ) 
}

export default PortalLayout;