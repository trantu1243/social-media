/* eslint-disable jsx-a11y/anchor-is-valid */

import { Comment } from "../rightComment";

interface CommentCardProps {
    comment: Comment
}

const CommentCard : React.FC<CommentCardProps> = ({ comment }) => {
    return <>
        <div className="card-body border-top-xs pt-2 pb-2 pe-4 d-block ps-5">
        
            <figure className="avatar position-absolute left-0 ms-2 mt-1">
                <img
                src={comment.avatar_user}
                alt=""
                className="shadow-sm rounded-circle w35"
                style={{borderRadius: "50%", height: "30px", objectFit:"cover"}}
                />
            </figure>
            <div className="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg">
                <h4 className="fw-700 text-grey-900 font-xssss mt-0 mb-1">
                {comment.name}{" "}
                <a href="#" className="ms-auto">
                    <i className="ti-more-alt float-right text-grey-800 font-xsss" />
                </a>
                </h4>
                <p className="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">
                {comment.content}
                </p>
            </div>
        </div>
    </>
}

export default CommentCard;