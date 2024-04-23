import React from "react";
import { Link } from "react-router-dom";
import WrapperComponent from "./WrapperComponent";

const ProfilePage = () => {
    const user = {
        fullName: "Marry Doe",
        email: "Marry@Gmail.com",
    };

    return (
        <div className='flex justify-center items-center h-screen font-sans'>
            <div className='w-[320px] h-[600px] border-[1px] border-[#cdcdcd]  bg-[#f0f0f0]'>
                <div className=" bg-white p-4 font-bold opacity-70">Account Setting</div>
                <div className='w-[320px] h-[600px] border-[1px] border-[#cdcdcd] px-4 py-8 bg-[#f0f0f0]'>
                    <div className="flex gap-4 items-center">
                        <img src="https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-thumbnail.png" alt="Default Profile" className=" rounded-full w-[100px]" />
                        <div>
                            <p className=" font-bold text-md">{user.fullName}</p>
                            <p className=" font-semibold opacity-70 text-base">{user.email}</p>
                        </div>
                    </div>
                    <p className="font-semibold opacity-70 text-[14px] leading-[16px] mt-4">Lorem Ipsum Dolor Sit Amet. Consetetur Sadipscing Elit. Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat. Sed Diam</p>
                    <p>
                        <Link to="/">
                            <button
                                className="bg-[#6c25ff] hover:bg-[#4513ab] text-white font-semibold py-3 px-4 rounded-lg w-full text-sm tracking-wide mt-[38vh]"
                            >
                                Logout
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
