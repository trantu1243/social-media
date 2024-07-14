/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import { useNavigate } from "react-router-dom";
import { SearchUser } from "../navbar";

interface FriendProps {
    user: SearchUser,
}

const FriendCard : React.FC<FriendProps> = ({ user }) => {
    const navigate = useNavigate();
    return <>
        <div className="card-body bg-transparent-card d-flex p-3 bg-greylight mt-0 mx-3 mb-3 rounded-3">
            <figure className="avatar me-2 mb-0">
                <img
                src={user.avatar}
                alt=""
                className="shadow-sm rounded-circle w45"
                style={{height: "45px" ,objectFit:"cover"}}
                onClick={()=>{navigate(`/portal/user/${user.id}`)}}
                />
            </figure>
            <h4 className="fw-700 text-grey-900 font-xssss mt-2" onClick={()=>{navigate(`/portal/user/${user.id}`)}}>
                {user.name}
                <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                {user.followerid.length + " followers"}
                </span>
            </h4>
            <a
                href={`/portal/user/${user.id}`}
                className="btn-round-sm bg-white text-grey-900 feather-chevron-right font-xss ms-auto mt-2"
            />
        </div>
    </>
}

export default FriendCard;