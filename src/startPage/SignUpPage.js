//회원가입 페이지
//API 주소 추가 필요

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import "./styles/SignUpPage.css";

function SignUpPage() {
    //useForm의 return prop 가져오기
    const { register, formState : {errors}, watch, handleSubmit } = useForm();
    const userPassword = useRef();
    userPassword.current = watch("userPassword");
    const [loading, setLoading] = useState(false);

    //submit시 수행
    const onSumit = async (data) => {
        setLoading(true);
        console.log(data);
        const { userEmail, userPassword, userName } = data;
        try {
        const response = await axios.post("API 주소", {
            userEmail,
            userPassword,
            userName,
        });
        console.log(response);
        } catch (error) {
        alert(error.response.data);
        }
        setLoading(false);
    };

    return (
        <div className="Signup_Container">
        <div className="SignUp">
            <p style={{ fontSize: "30px" }}> create an <b>Account</b></p>
            <p
            style={{
                backgroundColor: "#f3e77e79",
                fontSize: "13px",
                marginBottom: "50px",
            }}
            >
            개인화된 맞춤형 추천 서비스를 받아보세요!
            </p>

            <form onSubmit={handleSubmit(onSumit)} style={{textAlign:"left"}}>
                <div className="Signup_Text">
                    <label htmlFor="userEmail" className="Text_Name"> e-mail </label>
                    <input
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        placeholder="e-mail"
                        className="Text_input"
                        {...register("userEmail", {
                            required: true,
                            pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                        })}
                    />
                    <div className="errorMsg">
                    {errors.userEmail && <p> 이메일을 입력해주세요 </p>}
                    </div>
                </div>
                <div className="Signup_Text">
                    <label htmlFor="userPassword" className="Text_Name"> password </label>
                    <input
                        type="password"
                        id="userPassword"
                        name="userPassword"
                        placeholder="password"
                        className="Text_input"
                        {...register("userPassword", {
                        required: true,
                        pattern:
                            /(?=.*\d{1,50})(?=.*[~`!@#$%&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/,
                        })}
                    />
                    <div className="errorMsg">
                        {errors.userPassword && errors.userPassword.type === "required" && (
                            <p> 비밀번호를 입력해주세요 </p>
                        )}
                        {errors.userPassword && errors.userPassword.type === "pattern" && (
                            <p> 비밀번호는 영문 소문자, 숫자, 특수기호를 조합한 8~16자로 입력하세요 </p>
                        )}
                    </div>
                </div>
                <div className="Signup_Text">
                    <label htmlFor="checkUserPassword" className="Text_Name"> check password </label>
                    <input
                        type="password"
                        id="checkUserPassword"
                        name="checkUserPassword"
                        className="Text_input"
                        {...register("checkUserPassword", {
                        required: true,
                        validate: (value) => value === userPassword.current,
                        })}
                    />
                    <div className="errorMsg">
                        {errors.checkUserPassword && errors.checkUserPassword.type === "required" && (
                            <p> 비밀번호를 확인하세요 </p>
                        )}
                        {errors.checkUserPassword && errors.checkUserPassword.type === "validate" && (
                            <p> 비밀번호가 일치하지 않습니다. </p>
                        )}
                    </div>
                </div>
                <div className="Signup_Text">
                    <label htmlFor="userName" className="Text_Name"> nickname </label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        placeholder="Matt"
                        className="Text_input"
                        {...register("userName", {
                        required: true,
                        pattern: /^[가-힣a-zA-Z]{1,8}$/,
                        })}
                    />
                    <div className="errorMsg">
                        {errors.userName && errors.userName.type === "required" && (
                            <p> 닉네임을 입력해주세요 </p>
                        )}
                        {errors.userName && errors.userName.type === "pattern" && (
                            <p> 이름을 2-7자로 작성해주세요 </p>
                        )}
                    </div>
                </div>
                <input type="submit" disabled={loading} value="SGINUP" className="SignupBtn"/>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;
