import React from "react";

const HeroSection = () => {
    return (
        <div className="main-container overflow-hidden ">

            <div className="logo-img pl-6"><img src="/images/LOGO.png" alt="Logo" /></div>

            <div className="flex hero-content justify-center items-center mx-auto max-w-screen-xl h-full">
                <div className="text-container w-6/12 p-8">
                    <h2 className="text-6xl font-semibold w-11/12 text-white">Automate Your Finance Function</h2>
                    <p className="text-2xl font-bold text-white">WITHOUT Reworking Your ERP</p>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">Learn more</button>
                </div>
                <div className="img-container w-6/12">
                    <img src="/images/Frame.png" alt="Image" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
