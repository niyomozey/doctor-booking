import React from "react"
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from 'react-redux'

type doctorsType={
    id: number,
    name: string;
    phone: string;
    fax: string;
    address: string;
    specialist: string;
    imageUrl: string;
}

export interface doctorType{
    doctor: doctorsType
}


const Doctor=({doctor}: doctorType)=>{
    const {name,phone,fax, address, specialist, imageUrl} = doctor
    let navigate = useNavigate()
    let dispatch = useDispatch()

    const handleRequest = ():void =>{
        dispatch({type: 'SINGLE_DOCTOR', payload: doctor})
        navigate("/profile", { replace: true });
    }
    return (
        <div className="bg-zinc-200 sm:w-2/5 m-4 w-full rounded-xl flex flex-col">
            <div className=" flex flex-row ">
                <div className="w-1/4">
                    <img className="rounded-full w-16 h-16 mx-auto mt-4" src={imageUrl}/>
                </div>
                <div className="w-3/4">
                    <div>
                        <h1 className="text-2xl py-2 font-bold">{name}</h1>
                    </div>
                    <div className=" flex md:flex-row flex-col">
                        <div className="md:w-2/4 w-full">
                            <p>{specialist}</p>
                            <p className="py-2">{address}</p>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <button onClick={()=> handleRequest()} className="bg-teal-700 md:px-6 px-2 text-white py-1 rounded-2xl">Request Button</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-3 border-t border-gray-300">
                <div className="w-1/4"></div>
                <div className="w-3/4 py-3 flex md:flex-row flex-col justify-start">
                    <div>
                        <p>Phone: {phone}</p>
                    </div>
                    <div className="md:w-1/2 w-full  flex justify-center items-center">
                        <p>Fax: {fax}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()(Doctor)