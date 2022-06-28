import React,{useState} from "react"
import doctorsList from "../../service/doctors"
import Doctor from "./Doctor"
import { connect } from "react-redux";
export interface doctorsInterface{
    id: number,
    name: string;
    phone: string;
    fax: string;
    address: string;
    specialist: string;
    imageUrl: string;
}
const Doctors=()=>{
    const [doctors, getDoctors] = useState<doctorsInterface[] | []>(doctorsList)
    return(
        <div className="container-full flex flex-wrap justify-center">
           { doctors.map((doctor: doctorsInterface)=>{
                return <Doctor doctor={doctor}/>
            })
            }
        </div>
    )
}

export default connect()(Doctors)
// export default Doctors