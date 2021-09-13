import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useState } from "react";
import { StyledCalendar } from "./style";
import { api } from "../../Services/api";
import toast from "react-hot-toast";
import { IuserData } from "../../Types";

export const UserCalendar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [id, setId] = useState<number>(() => {
    const data = localStorage.getItem("@Kenzie:id");
    if (data) {
      return JSON.parse(data);
    }
    return 0;
  });
  const [user, setUser] = useState<IuserData>({} as IuserData);

  const getUser = async (id: number) => {
    try {
      const { data } = await api.get(`/users?id=${id}`);
      setUser(data[0]);
    } catch {
      toast.error("algo deu errado");
    }
  };

  useEffect(() => {
    getUser(id);
  }, [id]);

  const handleDateClick = async (event: string) => {
    const newE = {
      events: [
        ...user.events,
        { title: user.username.split(" ")[0], date: event },
      ],
    };

    try {
      await api.patch(`/users/${id}`, newE);
      getUser(id);
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
        events={user.events}
        dateClick={function (info) {
          handleDateClick(info.dateStr);
        }}
      />
    </StyledCalendar>
  );
};
