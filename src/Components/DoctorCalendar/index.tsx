import { useHistory } from "react-router";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useUser } from "../../Providers/User";
import { StyledCalendar } from "./style";
import { api } from "../../Services/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const DocCalendar = () => {
  const { user } = useUser();
  const history = useHistory();
  const [doctorEvents, setDoctorEvents] = useState<any>([]);

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
    const newUserEvnt = { title: doctor.username.split(" ")[0], date: event };
    const newDocEvnt = { title: user.username.split(" ")[0], date: event };

    handleUnity(newUserEvnt, newDocEvnt);
  };

  const handleUnity = async (userCalendar: any, docCalendar: any) => {
    const newDoc = {
      events: [...doctorEvents, docCalendar],
    };
    const newUser = {
      events: [...doctorEvents, userCalendar],
    };

    let output = [];
    for (let i = 0; i < doctorEvents.length; i++) {
      if (doctorEvents[i].date === docCalendar.date) {
        output.push(true);
      } else {
        output.push(false);
      }
    }
    if (!output.includes(true)) {
      try {
        await api.patch(`/users/${user.id}`, newUser);
        await api.patch(`/users/${doctor.id}`, newDoc);
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error(
        `${user.username.split(" ")[0]} sua consulta já foi marcada!!`
      );
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
