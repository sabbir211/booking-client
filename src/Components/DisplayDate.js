import FullCalendar from '@fullcalendar/react';
import React from 'react';
import dayGridPlugin from '@fullcalendar/daygrid'

const DisplayDate = ({x}) => {


    return (
        <div className='container my-4'>
             <FullCalendar
            events={x}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
        ></FullCalendar>
        </div>
       
    );
};

export default DisplayDate;