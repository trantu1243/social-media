/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react";
import { useAppSelector } from "../../hooks";
import { confirmRequest } from "../../views/portal/userPage";
import { SearchUser } from "../navbar";

interface FriendRequestProps {
    user: SearchUser
}

const FriendRequestCard : React.FC<FriendRequestProps> = ({ user }) =>{

    const token = useAppSelector((state) => state.auth).data.token;
    const [confirm, setConfirm] = useState<boolean>(false);

    async function handleConfirm(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        try{
            await confirmRequest(user.id, token);
            setConfirm(true);
        }
        catch(e){
            console.log(e);
        }
    }

    return <>
        <div className="card-body d-flex pt-0 ps-4 pe-4 pb-0">
            <figure className="avatar me-3">
                <img
                src={user.avatar}
                alt=""
                className="shadow-sm rounded-circle w45"
                style={{height: "45px" ,objectFit:"cover"}}
                />
            </figure>
            <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                {user.name}
                <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                {user.followerid.length + " followers"}
                </span>
            </h4>
            {confirm && <a
                href={`/portal/user/${user.id}`}
                className="btn-round-sm bg-white text-grey-900 feather-chevron-right font-xss ms-auto mt-2"
            />}
        </div>
        {!confirm && <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
            <a
                href="#"
                className="p-2 lh-20 w100 bg-primary me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl"
                onClick={handleConfirm}
            >
                Confirm
            </a>
            <a
                href="#"
                className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
            >
                Delete
            </a>
        </div>}
    </>
}

export default FriendRequestCard;