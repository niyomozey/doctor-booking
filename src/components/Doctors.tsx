import React,{useState} from "react"
import doctorsList from "../service/doctors"
import Doctor from "./Doctor"
export interface doctorsInterface{
    name: string;
    phone: string;
    fax: string;
    adree: string;
    specialist: string;
    imageUrl: string;
}
const Doctors=()=>{
    const [doctors, getDoctors] = useState<doctorsInterface[] | []>(doctorsList)
    return(
        <div>
           { doctors.map((doctor: doctorsInterface)=>{
                return <Doctor doctor={doctor}/>
            })
            }
        </div>
    )
}

export default Doctors