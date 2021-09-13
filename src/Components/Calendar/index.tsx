import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { StyledCalendar } from "./style";

export const Calendar = () => {
  const [events, setEvents] = useState([
    { title: "teste", date: "2021-09-08" },
  ]);

  const handleDateClick = (event: any) => {
    const newE = { title: "evento", date: event };
    setEvents([...events, newE]);
  };

  return (
    <StyledCalendar>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        dateClick={function (info) {
          handleDateClick(info.dateStr);
        }}
      />
    </StyledCalendar>
  );
};
