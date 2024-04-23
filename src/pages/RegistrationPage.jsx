import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WrapperComponent from "./WrapperComponent";

const RegistrationPage = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [agency, setAgency] = useState("");
    const naviagteTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        naviagteTo("/profile");
    };

    return (
        <WrapperComponent>

            <div className=" mb-3">
                <h1 className="font-bold text-2xl mb-2 leading-[28px]">Create your <br />PopX account</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mt-5">
                    <label className=" text-[#4513ab] font-semibold text-xs ml-3 bg-[#f0f0f0] w-fit px-2 -mb-2 z-10">Full Name<sup className="text-red-600">*</sup></label>
                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="py-2 px-3 border-2 border-[#cdcdcd] rounded-lg bg-transparent z-0 text-sm"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className=" text-[#4513ab] font-semibold text-xs ml-3 bg-[#f0f0f0] w-fit px-2 -mb-2 z-10">Phone Number<sup className="text-red-600">*</sup></label>
                    <input
                        placeholder="Enter Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        className="py-2 px-3 border-2 border-[#cdcdcd] rounded-lg bg-transparent z-0 text-sm"
                    />
                </div>
                <div className="flex flex-col mt-2">
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
                <div className="flex flex-col mt-2">
                    <label className=" text-[#4513ab] font-semibold text-xs ml-3 bg-[#f0f0f0] w-fit px-2 -mb-2 z-10">Company Name</label>
                    <input
                        type="text"
                        placeholder="Enter Company Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="py-2 px-3 border-2 border-[#cdcdcd] rounded-lg bg-transparent z-0 text-sm"
                    />
                </div>

                <div className="mt-4">
                    <label>Are you an agency?</label>
                    <div className="flex gap-8 items-center mt-1">
                        <div className=" flex items-center gap-2">
                            <input
                                type="radio"
                                value="yes"
                                checked={agency === "yes"}
                                onChange={(e) => setAgency(e.target.value)}
                                className="w-4 h-4"
                            />
                            <label className="">Yes</label>
                        </div>
                        <div className=" flex items-center gap-2">
                            <input
                                type="radio"
                                value="no"
                                checked={agency === "no"}
                                onChange={(e) => setAgency(e.target.value)}
                                className="w-4 h-4"
                            />
                            <label className="">No</label>
                        </div>
                    </div>
                </div>
                <button type="submit"
                    className="bg-[#6c25ff] hover:bg-[#4513ab] text-white hover:opacity-100 opacity-75 font-bold py-3 px-4 rounded-lg w-full text-sm tracking-wide mt-16"
                >
                    Create Account
                </button>
            </form>
        </WrapperComponent>
    );
};

export default RegistrationPage;
