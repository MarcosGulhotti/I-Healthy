import { useHistory } from "react-router";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useUser } from "../../Providers/User";
import { StyledCalendar } from "./style";
import { api } from "../../Services/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IEvents } from "../../Types";

export const DocCalendar = () => {
  const { user } = useUser();
  const history = useHistory();
  const [doctorEvents, setDoctorEvents] = useState<
    { title: string; date: string }[]
  >([]);

  const doctor: any = history.location.state;

  const getDoctorEvents = async () => {
    const doutor = await api.get(`/users/${doctor.id}`);
    setDoctorEvents([...doutor.data.events]);
  };

  useEffect(() => {
    getDoctorEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doctorEvents]);

  const handleEvent = async (event: string) => {
    const newUserEvnt = {
      title: `${doctor.username.split(" ")[0]}`,
      date: event,
    };
    const newDocEvnt = { title: user.username.split(" ")[0], date: event };

    handleUnity(newUserEvnt, newDocEvnt);
  };

  const handleUnity = async (userCalendar: IEvents, docCalendar: IEvents) => {
    const newDoc = {
      events: [...doctorEvents, docCalendar],
    };
    const newUser = {
      events: [...user.events, userCalendar],
    };
    const checkUnity = [];

    for (let i = 0; i < doctorEvents.length; i++) {
      if (doctorEvents[i].date === docCalendar.date) {
        checkUnity.push(true);
      } else {
        checkUnity.push(false);
      }
    }
    if (!checkUnity.includes(true)) {
      try {
        await api.patch(`/users/${user.id}`, newUser);
        await api.patch(`/users/${doctor.id}`, newDoc);
        toast.success("Consulta marcada!!");
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
