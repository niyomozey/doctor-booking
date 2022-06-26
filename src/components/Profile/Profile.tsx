import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";
import Time from "./Time";
import 'react-calendar/dist/Calendar.css';
import './Profile.css'

const Profile = () => {

    const [value, onChange] = useState(new Date());
    const [event, setEvent] = useState(null)
    const [info, setInfo] = useState(false)
    const [showTime, setShowTime] = useState(false)
    
    function displayInfo(e: any) {
        setInfo(true);
        setEvent(e.target.innerText);
    }

    return (
        <div className="None:container h-screen flex flex-row justify-around">
            <div className="w-[28%] rounded-2xl mt-10 border border-gray-100 shadow-lg h-[95vh]">
                <div className="relative flex flex-col h-[97%] rounded-2xl m-2 bg-gray-100">
                    <div className="h-[45%]">
                        <div className="flex flex-row w-full justify-between absolute">
                            <i className="fa fa-arrow-left fa-lg text-white ml-6 mt-6 cursor-pointer" aria-hidden="true"></i>
                            <i className="fa fa-heart fa-lg text-white mr-6 mt-6 cursor-pointer" aria-hidden="true"></i>
                        </div>
                        <img className="rounded-t-2xl h-full w-full" src="/assets/doctor3.jpg" />
                    </div>
                    <div className="absolute z-100 flex flex-col rounded-t-2xl bg-gray-100 top-[40%] bottom-0 w-full h-[54%]">
                        <div className="px-4 pt-4 border-b border-gray-200">
                            <p className="text-green-700 font-bold">ONLINE NOW</p>
                            <p className="text-4xl font-bold py-1">Anderson Doe</p>
                            <p className="text-gray-500 pb-3">Family medecine physian</p>
                        </div>
                        <div>
                            <div className="flex flex-col">
                                <div>
                                    <p className="text-blue-500 px-4 text-lg">GOOD REVIEWS</p>
                                </div>
                                <div className="flex flex-row  justify-center items-center">
                                    <div className="w-[80%] bg-gray-200 h-3 rounded-lg">
                                        <div className="bg-blue-500 h-3 w-[95%] rounded-lg"></div>
                                    </div>
                                    <p className="text-blue-500 px-4 text-xl">95</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <p className="text-blue-500 px-4 text-lg">TOTAL SCORE</p>
                                </div>
                                <div className="flex flex-row  justify-center items-center">
                                    <div className="w-[80%] bg-gray-200 h-3 rounded-lg">
                                        <div className="bg-blue-500 h-3 w-[87%] rounded-lg"></div>
                                    </div>
                                    <p className="text-blue-500 px-4 text-xl ">87</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <p className="text-blue-500 px-4 text-lg">Satisfaction</p>
                                </div>
                                <div className="flex flex-row  justify-center items-center">
                                    <div className="w-[80%] bg-gray-200 h-3 rounded-lg">
                                        <div className="bg-blue-500 h-3 w-[90%] rounded-lg"></div>
                                    </div>
                                    <p className="text-blue-500 px-4 text-xl">90</p>
                                </div>
                            </div>
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
                            <i className="fa fa-heart fa-lg text-black mr-6 mt-6 cursor-pointer" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold py-1">Details</p>
                        <img className="rounded-full mx-auto bolder bolder-red-900 h-40 w-40" src="/assets/doctor3.jpg" />
                        <p className="text-2xl font-bold py-1">Anderson Doe</p>
                        <p className="text-gray-500 ">Family medecine physian</p>
                    </div>
                    <div className="z-100 flex flex-col rounded-t-2xl bg-gray-100 top-[40%] bottom-0 w-full h-[54%]">
                        {/* <div className="px-4 pt-4 border-b border-gray-200">
                            <p className="text-green-700 font-bold">ONLINE NOW</p>
                            <p className="text-4xl font-bold py-1">Anderson Doe</p>
                            <p className="text-gray-500 ">Family medecine physian</p>
                        </div> */}
                    </div>
                    <div>
                        <Calendar onChange={onChange} value={value} onClickDay={() => setShowTime(true)} />
                        <Time showTime={showTime} date={value} />
                    </div>
                    <div className="mb-16 flex flex-center w-full border-t border-gray-200">
                        <div className="w-[50%] mx-auto py-4">
                            <i className="fa fa-comment fa-2x p-2 bg-blue-500 text-white rounded-full mx-1"></i>
                            <i className="fa fa-phone fa-2x py-2 px-3 bg-blue-500 text-white rounded-full mx-2"></i>
                            <i className="fa fa-info fa-2x py-2 px-[30px] m-2 bg-blue-500 text-white rounded-full mx-1"></i>
                        </div>
                    </div>
                    <div className="absolute cursor-pointer rounded-b-2xl z-100 bg-blue-500 bottom-0 left-0 right-0 h-[8%]">
                        <p className="text-white text-center p-2  text-lg">BOOK AN APPOINTMENT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()(Profile)