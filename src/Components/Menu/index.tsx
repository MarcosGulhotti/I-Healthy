import { StyledMenu, StyledMarker } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../Providers/User";

export const Menu = () => {
  const { user } = useUser();
  const [color, setColor] = useState<number>(0);
  const [left, setLeft] = useState("");
  const [width, setWidth] = useState("");

  const moveIndicator = (e: any, num: number) => {
    setLeft(`${e.target.offsetLeft}px`);
    setWidth(`${e.target.offsetWidth}px`);
    setColor(num);
  };

  const handleLogout = () => {
    localStorage.clear()
  }

  return (
    <StyledMenu>
      <li>
        <Link
          to="/contact"
          onClick={(e) => moveIndicator(e, 2)}
          //className={color === 2 && "active"}
        >
          <i className={`far fa-id-card ${color === 2 && "active"}`}></i>
        </Link>
      </li>
      <li>
        <Link
          to="/search"
          onClick={(e) => moveIndicator(e, 4)}
          //className={color === 4 && "active"}
        >
          <i className={`fas fa-search ${color === 4 && "active"}`}></i>
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          onClick={(e) => moveIndicator(e, 1)}
          //className={color === 1 && "active"}
        >
          <i className={`fas fa-home ${color === 1 && "active"}`}></i>
        </Link>
      </li>
      <li>
        <Link
          to="/calendar"
          onClick={(e) => moveIndicator(e, 5)}
          //className={color === 5 && "active"}
        >
          <i className={`far fa-calendar-alt ${color === 5 && "active"}`}></i>
        </Link>
      </li>
      <li>
        <Link 
          to="/login" 
          onClick={() => handleLogout()}>
          <i className='fas fa-sign-out-alt'></i>
        </Link>
      </li>
      <StyledMarker
        id="marker"
        left={left}
        width={width}
        isProfessional={user?.isProfessional}
      />
    </StyledMenu>
  );
};
