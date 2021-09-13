import { useHistory } from "react-router";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useUser } from "../../Providers/User";
import { StyledCalendar } from "./style";
import { api } from "../../Services/api";
import { useEffect, useState } from "react";

export const DocCalendar = () => {
  const { user } = useUser();
  const history = useHistory();
  const [doctorEvents, setDoctorEvents] = useState<{}[]>([]);

  const doctor: any = history.location.state;

  const getDoctorEvents = async () => {
    const doutor = await api.get(`users/${doctor.id}`);
    setDoctorEvents([...doutor.data.events]);
  };

  useEffect(() => {
    getDoctorEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doctorEvents]);

  const handleEvent = async (event: string) => {
    const newDoc = {
      events: [
        ...doctorEvents,
        { title: user.username.split(" ")[0], date: event },
      ],
    };
    const newUser = {
      events: [
        ...doctorEvents,
        { title: doctor.username.split(" ")[0], date: event },
      ],
    };

    try {
      await api.patch(`/users/${doctor.id}`, newDoc);
      await api.patch(`/users/${user.id}`, newUser);

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledCalendar>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={doctorEvents}
        dateClick={function (info) {
          handleEvent(info.dateStr);
        }}
      />
    </StyledCalendar>
  );
};
