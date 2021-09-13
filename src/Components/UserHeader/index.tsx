import { Container, Modal, User } from "./style";
import img from "./../../Assets/Images/User.svg";
import { useState } from "react";
import { useUser } from "../../Providers/User";

const UserHeader = () => {
  const [modal, setModal] = useState<boolean>(false);
  const handleModal = () => setModal(!modal);
  const { user } = useUser();

  return (
    <Container isPacient={!user.isProfessional}>
      <div>
        <figure>
          <img src={img} alt="userImage" />
        </figure>
      </div>
      {!user.isProfessional ? (
        <User>
          <h2>{user?.username}</h2>
          <p>usuário</p>
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
          <li>Genero: {user?.gender === "M" ? "Masculino" : "Feminino"}</li>
          <li>Endereco: {user?.adress}</li>
        </ul>
      </Modal>
    </Container>
  );
};

export default UserHeader;
