import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import { connect, useSelector } from 'react-redux'

const Admin = () => {
    const [date, setDate] = useState(new Date())
    const [list, setList] = useState([])
    const select: any = useSelector((state) => state)

    useEffect(() => {
        const dayPlan = select.AppointmentReducer.filter((element: any) => element.date === date.toDateString())
        setList(dayPlan)
    }, [date])
    return (
        <div className='container w-[70%] mx-auto flex flex-col'>
            <div>
                <p className='text-5xl text-center font-bold py-6'>Admin Page</p>
            </div>
            <div className='container w-full mx-auto flex flex-row'>
                <div>
                    <Calendar value={date} onChange={setDate} />
                </div>
                <div className='flex flex-col w-1/2'>
                    <div>
                        <p className='text-3xl text-center font-bold py-6'>List of Activities</p>
                    </div>
                    <div>
                        {list.map((element: any, index: number) => (
                            <div key={index}>
                                <p>{element.date}</p>
                                <p>{element.startAt}</p>
                                <p>{element.user.name}</p>
                                <p>{element.user.surname}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()(Admin)

