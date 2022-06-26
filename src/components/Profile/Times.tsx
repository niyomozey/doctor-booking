import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';

const time = ['08:00', '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00']
const customStyles: any = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    background: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6),rgba(0,0,0,0.6))"
  },
  content: {
    top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', background: '#404142'
  },
};

function Times(props: any) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)
  const [info, setInfo] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [startAt, setStartAt] = useState('')
  function openModal(time: any) {
    setIsOpen(true);
    setStartAt(time)
  }

  function closeModal() {
    setIsOpen(false);
  }
  function HandleSubmit(e: any) {
    e.preventDefault()
    const name = e.target.name.value
    const surname = e.target.surname.value
    const telphone = e.target.telphone.value
    const email = e.target.email.value
    const user = { name, surname, telphone, email }
    dispatch({
      type: 'ADD_APPOINTMENT', payload: {
        user,
        date: props.date.toDateString(),
        startAt
      }
    })
    navigate('/admin', { replace: true })
  }

  function displayInfo(e: any): void {
    setInfo(true);
    setEvent(e.target.innerText);
  }

  return (

    <div className="flex flex-wrap w-[90%] mx-auto">
      {time.map(times => {
        return (
          <div className='m-1'>
            {/* <button className='text-blue-500 text-bold bg-white rounded-lg px-4 py-2' onClick={(e) => displayInfo(e)}> {times} </button> */}
            <button className='text-blue-500 text-bold bg-white rounded-lg px-4 py-2' onClick={() => openModal(times)}> {times} </button>
          </div>
        )
      })}
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="container w-[500px] flex flex-row shadow-xl rounded">

            <div className="w-3/3">
              <form onSubmit={HandleSubmit} className="px-8 pt-6 pb-8 mb-4">
                <div className="mb-2">
                  <label className="block text-white text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="name" />
                </div>
                <div className="mb-2">
                  <label className="block text-white text-sm font-bold mb-2">
                    Surname
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="surname"
                    name="surname"
                    type="text"
                    required
                    placeholder="Surname" />
                </div>
                <div className="mb-2">
                  <label className="block text-white text-sm font-bold mb-2">
                    Telphone
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="telphone"
                    name="telphone"
                    type="text"
                    required
                    placeholder="Telphone" />
                </div>
                <div className="mb-2">
                  <label className="block text-white text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    type="text"
                    required
                    placeholder="Email" />
                </div>

                <div className="flex items-center justify-between">
                  <button className="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Confirm
                  </button>
                  <button className="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={closeModal}>close</button>
                </div>
              </form>
            </div>
          </div>

        </Modal>
      </div>
      {/* <div>
        {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
      </div> */}
    </div>
  )
}

export default connect()(Times);