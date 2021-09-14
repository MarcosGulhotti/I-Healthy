import { useState } from "react";
import toast from "react-hot-toast";
import { api } from "../../Services/api";
import { IuserData } from "../../Types";
import { Container } from "./styles";
import img from "./../../Assets/Images/User.svg";
const DoctorHeader = async (id: number) => {
  const [user, setUser] = useState<IuserData>({} as IuserData);

  try {
    const { data } = await api.get(`/users?id=${id}`);
    setUser(data[0]);
  } catch {
    toast.error("algo deu errado");
  }

  return (
    <Container>
      <div>
        <figure>
          <img src={img} alt="userImage" />
        </figure>
      </div>
      {!user.isProfessional ? (
        <div>
          <h2>Paciente</h2>
          <p>{user?.username}</p>
          <button> Ver mais </button>
        </div>
      ) : (
        <div>
          <h2>{user?.username}</h2>
          <p>{user?.specialty}</p>
          <button> Ver mais </button>
        </div>
      )}
    </Container>
  );
};

export default DoctorHeader;
