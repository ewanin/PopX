import React from 'react';

const WrapperComponent = ({ children }) => {
    return (
        <div className='flex justify-center items-center h-screen font-sans'>
            <div className='w-[320px] h-[600px] border-[1px] border-[#cdcdcd] px-4 py-8 bg-[#f0f0f0]'>
                {children}
            </div>
        </div>
    );
};

export default WrapperComponent;
