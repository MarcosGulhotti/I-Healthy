import { useState } from "react";
import toast from "react-hot-toast";
import { api } from "../../Services/api";
import { IuserData } from "../../Types";
import { Container, User, Modal } from "./styles";
import img from "./../../Assets/Images/User.svg";

const DoctorHeader = async (id: number) => {
  const [user, setUser] = useState<IuserData>({} as IuserData);
  const [modal, setModal] = useState<boolean>(false);
  const handleModal = () => setModal(!modal);

  try {
    const { data } = await api.get(`/users?id=${id}`);
    setUser(data[0]);
  } catch {
    toast.error("algo deu errado");
  }

  return (
    <Container isPacient={!user.isProfessional}>
      <div>
        <figure>
          <img src={img} alt="userImage" />
        </figure>
      </div>
      {!user.isProfessional ? (
        <User>
          <h2>Paciente</h2>
          <p>{user?.username}</p>
          <button onClick={handleModal}> Ver mais </button>
        </User>
      ) : (
        <User>
          <h2>{user?.username}</h2>
          <p>{user?.specialty}</p>
          <button onClick={handleModal}> Ver mais </button>
        </User>
      )}

      <Modal modal={modal}>
        <ul>
          <li>CPF: {user?.cpf}</li>
          <li>Gênero: {user?.gender}</li>
          <li>Endereço: {user?.address}</li>
        </ul>
      </Modal>
    </Container>
  );
};

export default DoctorHeader;
