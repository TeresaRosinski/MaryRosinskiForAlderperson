import "./Calendar.styles.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useState } from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Modal_Form_Holder from "../Modal_Form_Holder/Modal_Form_Holder.component.jsx";

const allViews = Object.keys(Views).map((k) => Views[k]);

const localizer = momentLocalizer(moment);

export default function CalendarSection() {
  const [date, setDate] = useState(new Date());

  const ColoredDateCellWrapper = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
      style: {
        //backgroundColor: "lightblue",
      },
    });
  const [showModal, setShowModal] = useState(false);

  const setShowModalTrue = () => {
    
  };
  const ShowDetails = e =>{
      console.log(e.title);
      setShowModal(true);
     
    }
      

    const events = [{
      title: "Martin Luther King Day",
      location:"Everywhere",
      description:"A day to commemorate Dr.King",
      start: "01-18-2021",
      end: "01-18-2021",
      allDay: true,
      startTime: "",
      endTime: "",
    }]

  return (
    <section className="CalendarSection">
      <h2>Events</h2>
      <Calendar
        events={events}
        views={['month']}
        step={60}
        defaultDate={new Date(2021, 0, 1)}
        components={{
          timeSlotWrapper: ColoredDateCellWrapper,
        }}
        localizer={localizer}
        className="CalendarStyles"
        onSelectEvent={ShowDetails}
      />
    
    </section>
  );
}
