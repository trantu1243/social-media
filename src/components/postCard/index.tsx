/* eslint-disable jsx-a11y/anchor-is-valid */
function PostCard(){
    return (
        <>
        <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-0">
            <div className="card-body p-0 d-flex">
                <figure className="avatar me-3">
                    <img
                    src="/assets/images/user-8.png"
                    alt=""
                    className="shadow-sm rounded-circle w45"
                    />
                </figure>
                <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                    Anthony Daugloi{" "}
                    <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                    2 hour ago
                    </span>
                </h4>
                <a href="#" className="ms-auto">
                    <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                </a>
                <div className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg show" aria-labelledby="dropdownMenu2" style={{margin: '0px', position: 'absolute', inset: '0px auto auto 0px', transform: 'translate(349.143px, 86.8571px)'}} data-popper-placement="bottom-end">
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
                </div>
            </div>
            <div className="card-body p-0 me-lg-5">
            <p className="fw-500 text-grey-500 lh-26 font-xssss w-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi nulla dolor, ornare at commodo non, feugiat non nisi.
                Phasellus faucibus mollis pharetra. Proin blandit ac massa
                sed rhoncus{" "}
                <a href="#" className="fw-600 text-primary ms-2">
                See more
                </a>
            </p>
            </div>
            <div className="card-body d-block p-0 mb-3">
            <div className="row ps-2 pe-2">
                <div className="col-xs-6 col-sm-6 p-1">
                <a href="/assets/images/t-36.jpg" data-lightbox="roadtri">
                    <img
                    src="/assets/images/t-21.jpg"
                    className="rounded-3 w-100"
                    alt=""
                    />
                </a>
                </div>
                <div className="col-xs-6 col-sm-6 p-1">
                <a href="/assets/images/t-32.jpg" data-lightbox="roadtri">
                    <img
                    src="/assets/images/t-22.jpg"
                    className="rounded-3 w-100"
                    alt=""
                    />
                </a>
                </div>
            </div>
            <div className="row ps-2 pe-2">
                <div className="col-xs-4 col-sm-4 p-1">
                <a href="/assets/images/t-33.jpg" data-lightbox="roadtri">
                    <img
                    src="/assets/images/t-23.jpg"
                    className="rounded-3 w-100"
                    alt=""
                    />
                </a>
                </div>
                <div className="col-xs-4 col-sm-4 p-1">
                <a href="/assets/images/t-34.jpg" data-lightbox="roadtri">
                    <img
                    src="/assets/images/t-24.jpg"
                    className="rounded-3 w-100"
                    alt=""
                    />
                </a>
                </div>
                <div className="col-xs-4 col-sm-4 p-1">
                <a
                    href="/assets/images/t-35.jpg"
                    data-lightbox="roadtri"
                    className="position-relative d-block"
                >
                    <img
                    src="/assets/images/t-25.jpg"
                    className="rounded-3 w-100"
                    alt=""
                    />
                    <span className="img-count font-sm text-white ls-3 fw-600">
                    <b>+2</b>
                    </span>
                </a>
                </div>
            </div>
            </div>
            <div className="card-body d-flex p-0">
            <a
                href="#"
                className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
            >
                <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                2.8K Like
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
                <span className="d-none-xss">22 Comment</span>
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