import { Container } from "./style";
import { IUserSearch } from "../../Types";
import BeatLoader from "react-spinners/BeatLoader";

export const CardUser = ({
  username,
  specialty,
  gender,
  typeCalls,
  loading = false,
  func,
}: IUserSearch) => {
  return (
    <Container className="container-card-user">
      <div className="box-pai">
        <div className="box box-img"></div>

        <div className="box box-content">
          <h2>{username?.split(" ")[0]}</h2>
          <p>{gender}</p>
          <p>{specialty}</p>
          <p>{typeCalls}</p>
        </div>
      </div>

      <div className="box-button">
        {loading ? (
          <button className="button-loading" disabled>
            <BeatLoader size="10px" color="#ffff" />
          </button>
        ) : (
          <button onClick={() => func()}>Agendar</button>
        )}
      </div>
    </Container>
  );
};
