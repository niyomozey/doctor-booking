import React from "react";

const Profile = ()=>{
    return(
        <div className="None:container h-screen flex flex-row justify-around">
            <div className="w-[28%] rounded-2xl mt-10 border border-gray-100 shadow-lg h-[95vh]">
                <div className="relative flex flex-col h-[97%] rounded-2xl m-2 bg-gray-100">
                    <div className="h-[45%]">
                        <div className="flex flex-row w-full justify-between absolute">
                            <i className="fa fa-arrow-left fa-lg text-white ml-6 mt-6 cursor-pointer" aria-hidden="true"></i>
                            <i className="fa fa-heart fa-lg text-white mr-6 mt-6 cursor-pointer"  aria-hidden="true"></i>
                        </div>
                        <img className="rounded-t-2xl h-full w-full" src="/assets/doctor3.jpg"/>
                    </div>
                    <div className="absolute z-100 flex flex-col rounded-t-2xl bg-gray-100 top-[40%] bottom-0 w-full h-[54%]">
                        <div className="px-4 pt-4 border-b border-gray-200">
                            <p className="text-green-700 font-bold">ONLINE NOW</p>
                            <p className="text-4xl font-bold py-1">Anderson Doe</p>
                            <p className="text-gray-500 ">Family medecine physian</p>
                        </div>
                        <div className="overflow-scroll px-4" >
                            <p className="text-lg py-2 font-bold">About</p>
                            <p>Middleware functions have access to the request and response objects.  
                                It can attach to any place in the request-response cycle. 
                                A third argument that middleware receives is the next function. 
                                When called, the next middleware in the chain is executed. 
                                An example of a middleware is the get callback that handles 
                                the HTTP GET request that we’ve written above. It is a very specific 
                                middleware that executes on a particular case. They can also perform 
                                more generic tasks. Let’s create a very simple logger middleware that 
                                will log to console what requests were made.</p>
                        </div>
                    </div>
                    <div className="absolute cursor-pointer rounded-b-2xl z-100 bg-blue-500 bottom-0 left-0 right-0 h-[8%]">
                        <p className="text-white text-center p-2 text-lg">BOOK AN APPOINTMENT</p>
                    </div>
                </div>               
            </div>
            <div className="w-[28%] rounded-2xl mt-10 border border-gray-100 shadow-lg h-[95vh]">
                <div className="relative flex flex-col h-[97%] rounded-2xl m-2 bg-gray-100">
                    <div className="">
                        <div className="flex flex-row w-full justify-between">
                            <i className="fa fa-arrow-left fa-lg text-black ml-6 mt-6 cursor-pointer" aria-hidden="true"></i>
                            <i className="fa fa-heart fa-lg text-black mr-6 mt-6 cursor-pointer"  aria-hidden="true"></i>
                        </div>
                    </div>
                    <div>
                        <p>Details</p>
                        <img className="rounded-full bolder bolder-red-900 h-40 w-40" src="/assets/doctor3.jpg"/>
                        <p className="text-4xl font-bold py-1">Anderson Doe</p>
                        <p className="text-gray-500 ">Family medecine physian</p>
                    </div>
                    <div className="z-100 flex flex-col rounded-t-2xl bg-gray-100 top-[40%] bottom-0 w-full h-[54%]">
                        <div className="px-4 pt-4 border-b border-gray-200">
                            <p className="text-green-700 font-bold">ONLINE NOW</p>
                            <p className="text-4xl font-bold py-1">Anderson Doe</p>
                            <p className="text-gray-500 ">Family medecine physian</p>
                        </div>
                    </div>
                    <div>
                        <i className="fa fa-message fa-2x"></i>
                        <i className="fa fa-facebook fa-2x"></i>
                        <i className="fa fa-message fa-2x"></i>
                    </div>
                    <div className="absolute cursor-pointer rounded-b-2xl z-100 bg-blue-500 bottom-0 left-0 right-0 h-[8%]">
                        <p className="text-white text-center p-2 text-lg">BOOK AN APPOINTMENT</p>
                    </div>
                </div>               
            </div>
            {/* <div className="w-[30%] rounded-2xl mt-10 shadow-lg bg-gray-100 h-[90vh]">

            </div> */}
        </div>
    )
}

export default Profile;