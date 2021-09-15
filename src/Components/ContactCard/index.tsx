import { StyledContainer, StyledImage, StyledNameRole, StyledLinks, StyledCellphone} from './style'
import { IContactCardProps } from "../../Types";
import Linkedin from "../../Assets/Images/linkedin.png";
import GitHub from "../../Assets/Images/github.png";
import GitLab from "../../Assets/Images/gitlab.png";

export const ContactCard = ({ Dados }: IContactCardProps) => {
  const { name, img, role, cellphone, linkedin, github, gitlab } = Dados;

  return (
    <StyledContainer>
      <StyledImage className="Profile" src={img} />
      <StyledNameRole>
        <h1>{name}</h1>
        <h2>{role}</h2>
      </StyledNameRole>
      <StyledLinks>
        <a rel="noreferrer" target="_blank" href={linkedin}>
          <img alt="Linkedin" src={Linkedin} />
        </a>
        <a rel="noreferrer" target="_blank" href={github}>
          <img alt="GitHub" src={GitHub} />
        </a>
        <a rel="noreferrer" target="_blank" href={gitlab}>
          <img alt="GitLab" src={GitLab} />
        </a>
      </StyledLinks>
      <StyledCellphone>
        <i className="fas fa-phone-square-alt"></i>
        <p>{cellphone}</p>
      </StyledCellphone>
    </StyledContainer>
  );
};
