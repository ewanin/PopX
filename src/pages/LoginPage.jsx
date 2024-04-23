import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WrapperComponent from "./WrapperComponent";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigateTo("/profile");
    };

    return (
        <WrapperComponent>

            <div className=" mb-3">
                <h1 className="font-bold text-2xl mb-2 leading-[28px]">Signin to your <br />PopX account</h1>
                <p className=" font-semibold text-black opacity-50 text-[16px] leading-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mt-5">
                    <label className=" text-[#4513ab] font-semibold text-xs ml-3 bg-[#f0f0f0] w-fit px-2 -mb-2 z-10">Email Address<sup className="text-red-600">*</sup></label>
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="py-2 px-3 border-2 border-[#cdcdcd] rounded-lg bg-transparent z-0 text-sm"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className=" text-[#4513ab] font-semibold text-xs ml-3 bg-[#f0f0f0] w-fit px-2 -mb-2 z-10">Password<sup className="text-red-600">*</sup></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="py-2 px-3 border-2 border-[#cdcdcd] rounded-lg bg-transparent z-0 text-sm"
                    />
                </div>
                <button type="submit"
                    className="bg-[#cebafb] hover:opacity-100 text-white opacity-75 font-bold py-3 px-4 rounded-lg w-full text-sm tracking-wide mt-4"
                >
                    Login
                </button>
            </form>
        </WrapperComponent>
    );
};

export default LoginPage;
