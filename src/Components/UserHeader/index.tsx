import { Container, User } from "./style";
import img from "./../../Assets/Images/User.svg";
interface IUserHeaderProps {
  isPacient?: boolean;
}

const UserHeader = ({ isPacient = false }: IUserHeaderProps) => {
  return (
    <Container>
      <div>
        <figure>
          <img src={img} alt="userImage" />
        </figure>
      </div>
      {isPacient ? (
        <User>
          <h2>Paciente</h2>
          <p>Nome do usuario</p>
          <button> Ver mais </button>
        </User>
      ) : (
        <User>
          <h2>Doutor</h2>
          <p>Nome do usuario</p>
          <button> Ver mais </button>
        </User>
      )}
    </Container>
  );
};

export default UserHeader;
