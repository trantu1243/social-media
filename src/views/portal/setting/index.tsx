import { useAppDispatch } from "../../../hooks";
import { logout } from "../../auth/auth.slice";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Setting(){
    const dispatch = useAppDispatch();
    return <>
        <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
            <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left">
                <div className="middle-wrap">
                    <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                    <div className="card-body p-lg-5 p-4 w-100 border-0">
                        <div className="row">
                        <div className="col-lg-12">
                            <h4 className="mb-4 font-xxl fw-700 mont-font mb-lg-5 mb-4 font-md-xs">
                            Settings
                            </h4>
                            <ul className="list-inline mb-4">
                            <li className="list-inline-item d-block border-bottom me-0">
                                <a
                                href="/portal/setting/user-information"
                                className="pt-2 pb-2 d-flex align-items-center"
                                >
                                <i className="btn-round-md bg-primary text-white feather-home font-md me-3" />{" "}
                                <h4 className="fw-600 font-xsss mb-0 mt-0">
                                    Acount Information
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3" />
                                </a>
                            </li>
                            <li className="list-inline-item d-block  me-0">
                                <a
                                href="/portal/setting/change-password"
                                className="pt-2 pb-2 d-flex align-items-center"
                                >
                                <i className="btn-round-md bg-blue-gradiant text-white feather-inbox font-md me-3" />{" "}
                                <h4 className="fw-600 font-xsss mb-0 mt-0">Password</h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3" />
                                </a>
                            </li>
                            <li className="list-inline-item d-block border-bottom me-0">
                                <a
                                href="help-box.html"
                                className="pt-2 pb-2 d-flex align-items-center"
                                >
                                <i className="btn-round-md bg-gold-gradiant text-white feather-help-circle font-md me-3" />{" "}
                                <h4 className="fw-600 font-xsss mb-0 mt-0">Help</h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3" />
                                </a>
                            </li>
                            <li className="list-inline-item d-block me-0">
                                <a href="/auth/login" className="pt-2 pb-2 d-flex align-items-center" onClick={()=>{dispatch(logout());}}>
                                <i className="btn-round-md bg-red-gradiant text-white feather-lock font-md me-3" />{" "}
                                <h4 className="fw-600 font-xsss mb-0 mt-0">Logout</h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3" />
                                </a>
                            </li>
                            </ul>

             
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

    </>
}

export default Setting;