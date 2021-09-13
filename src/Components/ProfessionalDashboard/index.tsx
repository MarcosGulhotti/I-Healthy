import { PButton, PContainer, Title } from "./style";
import { useUser } from "../../Providers/User";

export const ProfessionalDashboard = () =>{

const {user} = useUser()

return(
    <>
    <Title>Seus Pacientes</Title>
    <PContainer>
        {
            user.events.length > 1 ? (
            user.events.map((e) => 
                <PButton>{e.title}</PButton>
            )
            ) : (
                <PButton>Nada para exibir</PButton>
            )
        }
    </PContainer>
    </>
)
}