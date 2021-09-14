import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { StyledCalendar } from "./style";
import { useAuth } from "../../Providers/Auth";
import { useUser } from "../../Providers/User";
import { useHistory } from "react-router";
export const UserCalendar = () => {
  const { user } = useUser();
  const { isAuth } = useAuth();
  const history = useHistory();

  if (isAuth === "null") {
    history.push("/login");
  }

  return (
    <StyledCalendar>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={user.events}
      />
    </StyledCalendar>
  );
};
