import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../../Services/api";
import { Iteste, RegisterProfissional } from "../../Types";
import { Container, User, Modal } from "./styles";
import img from "./../../Assets/Images/User.svg";

const DoctorHeader = ({ DocId }: Iteste) => {
  const [doctor, setDoctor] = useState<RegisterProfissional>(
    {} as RegisterProfissional
  );
  const [modal, setModal] = useState<boolean>(false);
  const handleModal = () => setModal(!modal);

  const GetDoctor = async () => {
    try {
      const { data } = await api.get(`/users?id=${DocId}`);
      setDoctor(data[0]);
    } catch {
      toast.error("algo deu errado");
    }
  };

  useEffect(() => {
    GetDoctor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container isPacient={!doctor.isProfessional}>
      <div>
        <figure>
          <img src={img} alt="userImage" />
        </figure>
      </div>
      <User>
        <h2>Doutor</h2>
        <p>{doctor?.username}</p>
        <button onClick={handleModal}> Ver mais </button>
      </User>
      {modal && (
        <Modal modal={modal}>
          <ul>
            <li>CPF: {doctor?.cpf}</li>
            <li>Gênero: {doctor?.gender}</li>
            <li>Endereço: {doctor?.address}</li>
          </ul>
        </Modal>
      )}
    </Container>
  );
};

export default DoctorHeader;
