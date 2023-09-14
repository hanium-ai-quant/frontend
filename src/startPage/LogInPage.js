//로그인 페이지
//로그인 토큰 추가 필요
//API 주소 필요

import React, {useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import "./styles/LogInPage.css";



function LogInPage(){

    const {register,  formState : {errors}, handleSubmit} = useForm();
    const [loading, setLoading] = useState(false);

    //submit시 수행 -> 데이터 전송
    const onSubmit = async (data) => {
        setLoading(true);
        console.log("렌더링");
        const {userEmail, userPwd} = data;
        try{
            const response = await axios.post("API 주소", {
                userEmail,
                userPwd,
            });
            console.log(response);
        }
        catch (error) {
            console.log(error.response.data);
        }
        setLoading(false);

    }

    return(
        <div className="Login_Container">
                <div className="LogIn">
                    <h1> Welcome </h1>
                    <p style={{backgroundColor : "#f3e77e79", fontSize:"13px", marginBottom:"50px"}}> 
                        <span style={{color : "#6425fe"}}>StockWise</span>에 오신 걸 환영합니다
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="Login_textArea">
                            <label className="Text_Name" htmlFor="userEmail"> e-mail </label>
                            <input 
                                type="email" 
                                id="userEmail" 
                                name="userEmail" 
                                placeholder="e-mail" 
                                className="Text_input"
                                {...register("userEmail", {
                                    required : true,
                                })}
                            />
                            <div className="errMsg">
                                {errors.userEmail && <p> 이메일을 입력하세요 </p>}
                            </div>
                        </div>
                        <div className="Login_textArea">
                            <label className="Text_Name" htmlFor="userPwd"> password </label>
                            <input
                                type="password"
                                id="userPwd"
                                name="userPwd"
                                placeholder="password"
                                className="Text_input"
                                {...register("userPwd",{
                                    required : true,
                                })}
                            />
                            <div className="errMsg">
                                {errors.userPwd && <p> 비밀번호를 입력하세요 </p>}
                            </div>
                        </div>
                        <input type="submit" value="LOG IN" className="LoginBtn" disabled={loading}/>
                    </form>
                    <p  className="Go_Signup"> 아직 회원이 아니신가요? <a className="go_SignUp" href="/SignUp"> 회원가입 하러 가기 </a> </p>
                </div>
        </div>
    )
}

export default LogInPage;