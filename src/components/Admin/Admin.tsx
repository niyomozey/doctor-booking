import React,{useState} from 'react'
import Calendar from 'react-calendar'

const Admin = ()=>{
const [value, setValue] = useState(new Date())
    return (
        <div className='container w-[50%] mx-auto flex flex-row'>
            <div>
                <Calendar value={value} onChange={setValue}/>
            </div>
            <div>
                <p>
                    {value.toDateString()}
                </p>
            </div>
            
        </div>
    )
}

export default Admin

