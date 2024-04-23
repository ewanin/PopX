import React from "react";
import { Link } from "react-router-dom";
import WrapperComponent from "./WrapperComponent";

const HomePage = () => {
    return (
        <WrapperComponent>
            <div className="flex flex-col justify-end h-full">
                <div>
                    <h1 className="font-bold text-2xl mb-2 leading-[28px]">Welcome to PopX</h1>
                    <p className=" font-semibold text-black opacity-50 text-[16px] leading-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="mt-6">
                    <Link to="/register">
                        <button className="bg-[#6c25ff] hover:bg-[#4513ab] text-white font-semibold py-3 px-4 rounded-lg w-full text-sm tracking-wide">
                            Create Account
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="bg-[#cebafb] hover:opacity-100 text-black opacity-75 font-bold py-3 px-4 rounded-lg w-full text-sm tracking-wide mt-2">
                            Already Registered? Login
                        </button>
                    </Link>
                </div>
            </div>
        </WrapperComponent>
    );
};

export default HomePage;
