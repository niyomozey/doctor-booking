import React from "react";

const Profile = ()=>{
    return(
        <div className="None:container h-screen flex flex-row justify-around">
            <div className="w-[28%] rounded-2xl mt-10 border border-green-600 shadow-lg h-[95vh]">
                <div className="relative flex flex-col h-[97%] rounded-2xl m-2 bg-gray-100">
                    <div className="h-[45%]">
                        <div className="flex flex-row w-full justify-between absolute">
                            <i className="fa fa-arrow-left fa-lg text-white ml-6 mt-6 cursor-pointer" aria-hidden="true"></i>
                            <i className="fa fa-heart fa-lg text-white mr-6 mt-6 cursor-pointer"  aria-hidden="true"></i>
                        </div>
                        <img className="rounded-t-2xl h-full w-full" src="/assets/doctor3.jpg"/>
                    </div>
                    <div className="absolute z-100 rounded-t-2xl bg-gray-100 top-[40%] bottom-0 border border-red-600 w-full h-[55%]">
                        <h1>Detail's doctor</h1>
                    </div>
                    <div className="absolute cursor-pointer rounded-b-2xl z-100 bg-blue-500 bottom-0 left-0 right-0 h-[8%]">
                        <p className="text-white text-center p-2 text-lg">BOOK AN APPOINTMENT</p>
                    </div>
                </div>               
            </div>
            <div className="w-[30%] rounded-2xl mt-10 shadow-lg bg-gray-100 h-[90vh]">

            </div>
        </div>
    )
}

export default Profile;