import { Container, Modal, User } from "./style";
import img from "./../../Assets/Images/User.svg";
import { api } from "../../Services/api";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useState } from "react";
import { IUserHeaderProps, IuserData } from "../../Types";

const UserHeader = ({ isPacient = false }: IUserHeaderProps) => {
  const [modal, setModal] = useState<boolean>(false);
  const [id, setId] = useState<number>(() => {
    const data = localStorage.getItem("@Kenzie:id");
    if (data) {
      return JSON.parse(data);
    }
    return 0;
  });
  const [user, setUser] = useState<IuserData>({} as IuserData);
  const handleModal = () => setModal(!modal);
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
  return (
    <Container isPacient={isPacient}>
      <div>
        <figure>
          <img src={img} alt="userImage" />
        </figure>
      </div>
      {isPacient ? (
        <User>
          <h2>Doutor</h2>
          <p>{user?.name}</p>
          <button onClick={handleModal}> Ver mais </button>
        </User>
      ) : (
        <User>
          <h2>Paciente</h2>
          <p>{user?.name}</p>
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
