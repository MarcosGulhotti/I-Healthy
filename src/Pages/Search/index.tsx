import { Container, BoxSearch, Header, Modal } from "./style";
import { CardUser } from "../../Components/CardUser";
import { useEffect, useState } from "react";
import { api } from "../../Services/api";
import { IUserSearch } from "../../Types";
import BounceLoader from "react-spinners/BounceLoader";
import { Menu } from "../../Components/Menu";
import { useHistory } from "react-router";
import { useAuth } from "../../Providers/Auth";
import { MenuDesktop } from '../../Components/MenuDesktop'
import { motion } from "framer-motion";

const PageSearch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(true);
  const [modal1, setModal1] = useState<boolean>(false);
  const [modal2, setModal2] = useState<boolean>(false);
  const [modal3, setModal3] = useState<boolean>(false);

  const [users, setUsers] = useState<IUserSearch[]>([]);
  const history = useHistory();

  const { isAuth } = useAuth();

  if (isAuth === "null") {
    history.push("/login");
  }

  const toSchedule = async (doctor: object) => {
    setLoading(true);
    history.push("/doctorcalendar", doctor);
  };

  const getUsers = async () => {
    const { data } = await api.get("/users/?isProfessional=true");
    setLoad(false);
    setUsers(data);
  };

  const search = async (
    type: string,
    name: string,
    setModal: (bol: boolean) => void
  ) => {
    setModal(false);
    setLoad(true);
    const { data } = await api.get(`/users/?${type}=${name}`);
    setLoad(false);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (

    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 1}}
>
  
      <Container>
        <MenuDesktop />
        <Header
          className="header"
          onMouseLeave={() => {
            setModal1(false);
            setModal2(false);
            setModal3(false);
          }}
          >
          <button
            onClick={() => {
              setModal1(!modal1);
              setModal2(false);
              setModal3(false);
            }}
          >
            <i className="fas fa-venus-mars"></i>
            Gênero
            {modal1 && (
              <div className="modal-left">
                <Modal modal={modal1} className="modal">
                  
                  <button
                    onClick={() => search("gender", "Masculino", setModal1)}
                    
                    >
                    Masculino
                  </button>
                  <button onClick={() => search("gender", "Feminino", setModal1)}>
                    Feminino
                  </button>
                  <button onClick={() => search("gender", "Outros", setModal1)}>
                    Outros
                  </button>
                  <button onClick={() => getUsers()}>ver todos</button>
                </Modal>
              </div>
            )}
          </button>

          <button
            onClick={() => {
              setModal2(!modal2);
              setModal1(false);
              setModal3(false);
            }}
          >
            <i className="fas fa-phone-alt"></i>
            Atendimento
            {modal2 && (
              <Modal modal={modal2} className="modal">
                <button onClick={() => search("typeCalls", "Online", setModal2)}>
                  Online
                </button>
                <button
                  onClick={() => search("typeCalls", "Presencial", setModal2)}
                  >
                  Presencial
                </button>
                <button onClick={() => search("typeCalls", "Ambos", setModal2)}>
                  Ambos
                </button>
                <button onClick={() => getUsers()}>ver todos</button>
              </Modal>
            )}
          </button>

          <button
            onClick={() => {
              setModal3(!modal3);
              setModal1(false);
              setModal2(false);
            }}
            >
            <i className="fas fa-book"></i>
            Especialidade
            {modal3 && (
              <div className="modal-right">
                <Modal modal={modal3} className="modal">
                  <button
                    onClick={() => search("specialty", "Psicólogo", setModal3)}
                    >
                    Psicólogo
                  </button>
                  <button
                    onClick={() => search("specialty", "Psiquiatria", setModal3)}
                    >
                    Psiquiatra
                  </button>
                  <button
                    onClick={() =>
                      search("specialty", "Neurocirurgião", setModal3)
                    }
                  >
                    Neurocirurgião
                  </button>
                  <button
                    onClick={() => search("specialty", "Oftalmologia", setModal3)}
                  >
                    Oftalmologia
                  </button>
                  <button
                    onClick={() => search("specialty", "Cardiologia", setModal3)}
                  >
                    Cardiologia
                  </button>
                  <button
                    onClick={() => search("specialty", "Radiologia", setModal3)}
                    >
                    Radiologia
                  </button>
                  <button
                    onClick={() => search("specialty", "Dermatologia", setModal3)}
                    >
                    Dermatologia
                  </button>
                  <button
                    onClick={() =>
                      search("specialty", "Otorrinolaringologia", setModal3)
                    }
                    >
                    Otorrinolari..
                  </button>
                  <button
                    onClick={() =>
                      search("specialty", "Cirurgia geral", setModal3)
                    }
                    >
                    Cirurgia geral
                  </button>
                  <button
                    onClick={() => search("specialty", "Pediatria", setModal3)}
                    >
                    Pediatria
                  </button>
                  <button
                    onClick={() =>
                      search("specialty", "Ortopedia e Traumatologia", setModal3)
                    }
                  >
                    Ortopedia e Traumatologia
                  </button>
                  <button
                    onClick={() => search("specialty", "Nefrologia", setModal3)}
                    >
                    Nefrologia
                  </button>
                  <button onClick={() => search("specialty", "Outro", setModal3)}>
                    Outro
                  </button>
                  <button onClick={() => getUsers()}>ver todos</button>
                </Modal>
              </div>
            )}
          </button>
        </Header>

        <BoxSearch className="box-search">
          {load ? (
            <>
              <BounceLoader color="#37DB7F" size="100px" />
            </>
          ) : (
            <>
              {users.length === 0 && <h2> Nenhum Profissional encontrado :(</h2>}
              {users.map((user) => {
                return (
                  <CardUser
                  key={user.id}
                  username={user.username}
                    gender={user.gender}
                    specialty={user.specialty}
                    typeCalls={user.typeCalls}
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
    </motion.div>
  );
};

export default PageSearch;
