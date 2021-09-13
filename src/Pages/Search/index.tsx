import { Container, BoxSearch, Header, Modal } from "./style";
import { CardUser } from "../../Components/CardUser";
import { useEffect, useState } from "react";
import { api } from "../../Services/api";
import { IUserSearch } from "../../Types";
import BounceLoader from "react-spinners/BounceLoader";
import { Menu } from "../../Components/Menu";
import { useHistory } from "react-router";

const PageSearch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(true);
  const [modal1, setModal1] = useState<boolean>(false);
  const [modal2, setModal2] = useState<boolean>(false);
  const [modal3, setModal3] = useState<boolean>(false);

  const [users, setusers] = useState<IUserSearch[]>([]);

  const history = useHistory();

  const toSchedule = async (doctor: object) => {
    setLoading(true);
    console.log(doctor);
    history.push("/doctorcalendar", doctor);
  };

  const getUsers = async () => {
    const { data } = await api.get("/users?_limit=3");
    setLoad(false);
    setusers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {}, [users]);

  const search = async (
    type: string,
    name: string,
    setModal: (bol: boolean) => void
  ) => {
    setModal(false);
    setLoad(true);
    const { data } = await api.get(`/users?=${type}=${name}`);
    setusers(data);
    setLoad(false);
    console.log(`/users?=${type}=${name}`);
  };

  return (
    <Container>
      <Header>
        <button onClick={() => setModal1(!modal1)}>
          Gênero
          {modal1 && (
            <Modal modal={modal1}>
              <button onClick={() => search("gender", "M", setModal1)}>
                Masculino
              </button>
              <button onClick={() => search("gender", "F", setModal1)}>
                Feminino
              </button>
              <button onClick={() => search("gender", "Outros", setModal1)}>
                Outros
              </button>
            </Modal>
          )}
        </button>

        <button onClick={() => setModal2(!modal2)}>
          Atendimento
          {modal2 && (
            <Modal modal={modal2}>
              <button onClick={() => search("typeCalls", "Online", setModal2)}>
                Online
              </button>
              <button
                onClick={() => search("typeCalls", "Presecial", setModal2)}
              >
                Presencial
              </button>
            </Modal>
          )}
        </button>

        <button onClick={() => setModal3(!modal3)}>
          Especialidade
          {modal3 && (
            <Modal modal={modal3}>
              <button
                onClick={() => search("specialty", "Psicólogo", setModal3)}
              >
                Psicólogo
              </button>
              <button
                onClick={() => search("specialty", "Psiquiatra", setModal3)}
              >
                Psiquiatra
              </button>
              <button
                onClick={() => search("specialty", "Neurocirurgião", setModal3)}
              >
                Neurocirurgião
              </button>
            </Modal>
          )}
        </button>
      </Header>

      <BoxSearch>
        {load ? (
          <BounceLoader color="#37DB7F" size="100px" />
        ) : (
          <>
            {users.map((user) => {
              return (
                <CardUser
                  key={user.id}
                  name={user.name ? user.name.split(" ")[0] : "Nome"}
                  genre={user.genre ? user.genre : "Gênero"}
                  specialty={user.specialty}
                  city={user.city ? user.city : "Cidade"}
                  func={() => toSchedule(user)}
                  loading={loading}
                />
              );
            })}
          </>
        )}

        <Menu />
      </BoxSearch>
    </Container>
  );
};

export default PageSearch;
