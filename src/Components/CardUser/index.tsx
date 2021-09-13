import { Container } from './style'
import { IUserSearch } from '../../Types'
import BeatLoader from 'react-spinners/BeatLoader'

export const CardUser = ({name, specialty, genre, city, loading=false, func}: IUserSearch) => {
    
    return(
        <Container>

            <div className="box-pai">
                <div className="box box-img">
                </div>
                
                <div className="box box-content">
                    <h2>{name}</h2>
                    <p>{genre}</p>
                    <p>{specialty}</p>
                    <p>{city}</p>
                </div>
            </div>

            <div className="box-button">
                {loading?
                (
                    <button className="button-loading" disabled ><BeatLoader size="10px" color="#ffff"/></button>
                )
                :
                (
                    <button onClick={() => func()}>Agendar</button>
                )}
            </div>

        </Container>
    )
}