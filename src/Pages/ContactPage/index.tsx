import { Menu } from "../../Components/Menu";
import { StyledContainer, StyledContactDiv } from "./style";
import { ContactCard } from "../../Components/ContactCard";
import { MenuDesktop } from "../../Components/MenuDesktop";
import { motion } from "framer-motion";

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
    name: "Anthony Freitas Maciel",
    img: "https://ca.slack-edge.com/TQZR39SET-U01SZULQYUR-13eaa02e9506-512",
    role: "Scrum Master",
    cellphone: "(92) 9 9517-1372",
    linkedin: "https://www.linkedin.com/in/anthony07m/",
    gitlab: "https://gitlab.com/Anthony07M",
    github: "https://github.com/Anthony07M",
  },
  Leonardo: {
    name: "Leonardo Machado Pereira",
    img: "https://ca.slack-edge.com/TQZR39SET-U01SZULRKQR-8f698d8137af-512",
    role: "Product Owner",
    cellphone: "(51) 9 9236-6547)",
    linkedin: "https://www.linkedin.com/in/leonardo-pereira-967139b7/",
    gitlab: "https://gitlab.com/leokito",
    github: "https://github.com/leokito",
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
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 1}}
    >

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
    </motion.div>
  );
};
