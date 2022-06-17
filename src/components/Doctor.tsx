import React from "react"

type doctorsType={
    name: string;
    phone: string;
    fax: string;
    adree: string;
    specialist: string;
    imageUrl: string;
}

export interface doctorType{
    doctor: doctorsType
}

const Doctor=({doctor}: doctorType)=>{
    const {name,phone,fax, adree, specialist, imageUrl} = doctor
    return(
        <div>
            <img src={imageUrl}/>
            <h1>{name}</h1>
            <div>
                <p>{specialist}</p>
                <p>{phone}</p>
                <p>{adree}</p>
            </div>
            <div>
                <button>Request Button</button>
            </div>
        </div>
    )
}

export default Doctor