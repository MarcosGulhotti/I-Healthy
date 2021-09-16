import { Menu } from "../../Components/Menu";
import { StyledContainer, StyledContactDiv } from "./style";
import { ContactCard } from "../../Components/ContactCard";
import { MenuDesktop } from "../../Components/MenuDesktop";

const Dados = {
  Marcos: {
    name: "Marcos Vinicius Gulhotti",
    img: "https://ca.slack-edge.com/TQZR39SET-U01PPAZEEPQ-5eed9ffeb4a2-512",
    role: "Tech Leader",
    cellphone: "(45) 9 9912-7745",
    linkedin: "https://www.linkedin.com/in/marcos-vinicius-gulhotti-35b4571a1/",
    gitlab: "https://gitlab.com/Markinn",
    github: "https://github.com/MarcosGulhotti",
  },
  Arthur: {
    name: "Arthur Fenili Linemburg",
    img: "https://ca.slack-edge.com/TQZR39SET-U01SJTKSRRR-086832d3d4a5-512",
    role: "Quality Assurance",
    cellphone: "(48) 9 9601-0693",
    linkedin: "https://www.linkedin.com/in/arthur-fenili-linemburg-ab8936184/",
    gitlab: "https://gitlab.com/tukinhafl",
    github: "https://github.com/tukinhafl",
  },
  Anthony: {
    name: "Seu nome aqui",
    img: "sua foto do slack aqui",
    role: "sua role aqui",
    cellphone: "seu celular aqui",
    linkedin: "link do seu linkedin",
    gitlab: "link do seu gitlab",
    github: "link do seu github",
  },
  Leonardo: {
    name: "Seu nome aqui",
    img: "sua foto do slack aqui",
    role: "sua role aqui",
    cellphone: "seu celular aqui",
    linkedin: "link do seu linkedin",
    gitlab: "link do seu gitlab",
    github: "link do seu github",
  },
  Leandro: {
    name: "Leandro Soares da Silva Bezerra",
    img: "https://ca.slack-edge.com/TQZR39SET-U01RU9TD7HC-bd1d01ce9d40-48",
    role: "Quality Assurance",
    cellphone: "(11) 9 6728-3772",
    linkedin:
      "https://www.linkedin.com/in/leandro-soares-da-silva-bezerra-386089177/",
    gitlab: "https://gitlab.com/LeandroSSB",
    github: "https://github.com/LeandroSSB",
  },
};

export const ContactPage = () => {
  const { Marcos, Arthur, Anthony, Leonardo, Leandro } = Dados;

  return (
    <StyledContainer>
      <MenuDesktop />
      <StyledContactDiv>
        <ContactCard Dados={Marcos} />
        <ContactCard Dados={Arthur} />
        <ContactCard Dados={Anthony} />
        <ContactCard Dados={Leonardo} />
        <ContactCard Dados={Leandro} />
      </StyledContactDiv>
      <Menu />
    </StyledContainer>
  );
};
