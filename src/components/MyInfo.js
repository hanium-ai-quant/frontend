//로그인 정보에서 이름, 사진 가져오기
//마이페이지의 Information 창

import React , {useState} from "react";
import axios from "axios";

import "./styles//MyInfo.css";
import defaultImg from "../assets/user.png";


function MyInfo () {

    const userName = "Matt";
    //이미지 가져오기 추가 필요!
    const [userImg, setUserImg] = useState(null);

    const handleImageUpload = (e) => {
        e.preventDefault();
        const selectedImg = e.target.files[0];
        const reader = new FileReader();
        //formdata 객체
        const formData = new FormData();
        formData.append('files', selectedImg);

        //이미지 미리보기
        reader.onload = (event) => {
            setUserImg(event.target.result);
        }

        if (selectedImg){
            reader.readAsDataURL(selectedImg);
        }

        //서버로 전송
        axios({
            method : 'post',
            url : 'API 주소',
            data : formData,
        })
            .then((response) => {console.log(response)})
            .then((error) => {console.log(error)})
        console.log(formData);
    }

    return(
        <div className="user-profile">
            <h3 style={{fontWeight:"bold"}}> <span>{userName}</span>님. </h3>
            <div className="profile-img">
                {userImg ?
                    (<img src={userImg} alt="user-img"/>) : (<img src={defaultImg} alt="기본이미지"/>)
                }
                <input type="file" accept="image/*" onChange={handleImageUpload} style={{display : 'none'}} id="image-upload"/>
                <label htmlFor="image-upload"> 변경하기 </label>
            </div>
        </div>
    )
}

export default MyInfo;