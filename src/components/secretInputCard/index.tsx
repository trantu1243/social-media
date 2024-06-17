/* eslint-disable jsx-a11y/anchor-is-valid */

import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { useState } from "react";
import SERVER_URL from "../../variables";

function SecretInputCard(){
    const location = useLocation();

    const [yourPost, setYourPost] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [checkImage, setCheckImage] = useState<boolean>(false);
    const [checkErrorInput, setCheckErrorInput] = useState<boolean>(false);
    const [previewImage, setPreviewImage] = useState<string>("");
    const token = useAppSelector((state) => state.auth).data.token;
    const navigate = useNavigate();

    function handleImageInput(event: React.ChangeEvent<HTMLInputElement>){
        const files = event.target.files;
        if (files && files.length > 0) {
            setImageFile(files[0]);
            setCheckImage(true);
            const previewURL = URL.createObjectURL(files[0]);
            setPreviewImage(previewURL);
        }
    }
    function handleImageCancel(){
        setImageFile(null);
        setCheckImage(false);
        URL.revokeObjectURL(previewImage);
        setPreviewImage('');
    }

    async function handleSubmit(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): Promise<any>{
        event.preventDefault();
        if (imageFile || yourPost)
            try {
                const formData = new FormData();
                if (imageFile) {
                    formData.append('file', imageFile);
                    formData.append('type', imageFile.type);
                } else {
                    formData.append('file', "");
                    formData.append('type', "");
                }
                formData.append('text', yourPost);
                const response = await fetch(`${SERVER_URL}/upload/secret`, {
                    method: "POST",
                    body: formData,
                    headers:{
                        'Access-Control-Allow-Origin': `${SERVER_URL}`,
                        'Authorization': token,
                    },
                });
                if (response.ok){
                    const res = await response.json();
                    console.log(res);
                    navigate(`/portal/post/${res.id}`);
                }
            }
            catch (e){
                console.log(e);
            }
        else setCheckErrorInput(true);
    }

    return (
        <>
        <div className={location.pathname==="/portal/home" ? 
            "card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3"
            :"card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3 mt-3"}>
            <div className="card-body p-0">
            <a
                href="#"
                className=" font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center"
            >
                <i className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight" />
                Create Secret Post
            </a>
            </div>
            <div className="card-body p-0 mt-3 position-relative">
                <figure className="avatar position-absolute ms-2 mt-1 top-5">
                    <img
                    src={"https://trantu-secret.s3.ap-southeast-2.amazonaws.com/4123763.png"}
                    alt=""
                    className="shadow-sm rounded-circle w30"
                    />
                </figure>
                <textarea
                    name="yourPost"
                    value={yourPost}
                    onChange={(e)=> setYourPost(e.target.value)}
                    className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg"
                    cols={30}
                    rows={10}
                    placeholder="What's on your mind?"
                />
                {checkErrorInput && <div className="error-message">
                    Please enter your post.
                </div>}
            </div>
            {checkImage && <div className="card-body p-0 my-3">
                <div className="loadImage" >
                        <img src={previewImage} alt="" />
                        <div className="cancelIcon" onClick={handleImageCancel}>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="25px" height="25px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#dcdcdc" stroke="none">
                                    <path d="M2325 5109 c-1079 -100 -1982 -871 -2244 -1916 -347 -1379 478 -2768 1849 -3113 1054 -265 2155 156 2757 1055 576 860 576 1989 0 2850 -180 269 -433 522 -702 702 -483 324 -1081 476 -1660 422z m-573 -1455 c18 -9 207 -190 421 -402 l387 -386 388 386 c213 212 403 394 422 404 22 11 57 18 95 19 121 0 210 -89 210 -210 -1 -38 -8 -73 -19 -95 -10 -19 -192 -209 -404 -422 l-386 -388 386 -387 c212 -214 394 -404 404 -423 11 -22 18 -57 19 -95 0 -121 -89 -210 -210 -210 -38 1 -73 8 -95 19 -19 10 -209 192 -422 404 l-388 387 -387 -387 c-214 -212 -404 -394 -423 -404 -22 -11 -57 -18 -95 -19 -121 0 -210 89 -210 210 1 38 8 73 19 95 10 19 192 209 404 423 l386 387 -386 388 c-212 213 -394 403 -404 422 -11 22 -18 57 -19 95 0 97 58 175 153 206 37 12 114 4 154 -17z"/>
                                </g>
                            </svg>
                        </div>                        
                    </div>
            </div>}
            <div className="card-body d-flex p-0 mt-0">
            <label
                className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
                htmlFor="image"
            >
                <i className="font-md text-success feather-image me-2" />
                <span className="d-none-xs">Photo/Video</span>
            </label>
            <input 
                type="file" 
                id="image" 
                accept="image/*" 
                style={{display: 'none'}}
                onChange={handleImageInput}
            />           
            <a
                href="#"
                className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
            >
                <i className="font-md text-warning feather-camera me-2" />
                <span className="d-none-xs">Feeling/Activity</span>
            </a>
          
            <a
                href="#"
                className="py-2 px-0 lh-20 w75 bg-primary me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl ms-auto"
                onClick={handleSubmit}
            >
                Post
            </a>
         
            </div>
        </div>
        </>
    )
}

export default SecretInputCard;