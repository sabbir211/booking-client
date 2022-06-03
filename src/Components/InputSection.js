import { format } from 'date-fns';
import React, { useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from 'sweetalert';
const InputSection = ({ refetch }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const nameRef = useRef('')
   
    const handleSubmit = () => {
        const name = nameRef.current.value     
        const start = format(startDate, "yyyy-MM-dd")
        const end = format(endDate, "yyyy-MM-dd")
        
        if (name && start && end) {
            fetch("https://booking-pial.herokuapp.com/addDate", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ title: name, start, end })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        refetch()
                        swal("SUCCESS", "Booking Success", "success")
                    }
                })
        }
        else{
            swal("Information missing","Please insert all information","error")
        }

    }

    return (
        <div className='text-center my-4'>
            <div className="d-flex container my-4 justify-content-center align-items-center flex-md-row flex-column">
                <div className='me-4'>
                    <p className="fs-4 font-bold">Name</p>
                    <input ref={nameRef} type="text" name="name" id="name" className='form-control' />
                </div>
                <div className='me-4'>
                    <p className="fs-4 font-bold">Check in</p>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="yyyy/MM/dd"
                        minDate={new Date()}
                        className='form-control'
                    />
                </div>
                <div>
                    <p className="fs-4 font-bold">Check Out</p>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        dateFormat="yyyy/MM/dd"
                        className='form-control'
                    />
                </div>

            </div>

            <div>
                <button onClick={handleSubmit} className="btn btn-primary">Book Now</button>
            </div>

        </div>
    );
};

export default InputSection;