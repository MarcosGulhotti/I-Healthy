import { Container } from "./style";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import {
  FaUser,
  FaRegCalendarAlt,
  FaAddressCard,
  FaTransgender,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RegisterProfissional } from "../../Types/index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../Button";
import { api } from "../../Services/api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
/* import BeatLoader  from 'react-spinners/BeatLoader' */

export const FormRegisterProfissional = () => {
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Nome obrigatório")
      .max(16, "Maximo de 16 caracteres"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Email obrigatŕoio"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial"
      ),
    date: yup.date().required("Data obrigatório"),
    cpf: yup.string().required("CPF obrigatório"),
    gender: yup.string().required("Gênero obrigatório"),
    address: yup.string().required("Endereço obigatório"),
    register: yup.string().required("Registro obrigatório"),
    specialty: yup.string().required("Especialidade Obrigatória"),
    demands: yup.string().required("Demandas obrigatória"),
    typeCalls: yup.string().required("Tipos de atendimentos obrigatório"),
    schedule: yup.string().required("Disponibilidade obrigatória"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (user: RegisterProfissional) => {
    setLoading(true);
    try {
      reset();
      const { data } = await api.post("/register", {
        ...user,
        isProfessional: true,
        events: [],
      });
      toast.success("Cadastro realizado com sucesso");
      setLoading(false);
      history.push("/login"); 
    } catch {
      setLoading(false);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container-inputs">
          <Input
            icon={<FaUser />}
            type="text"
            name="username"
            register={register}
            error={errors.username?.message}
            placeholder="Digite seu nome"
          />

          <Input
            icon={<HiOutlineMail />}
            type="email"
            name="email"
            register={register}
            error={errors.email?.message}
            placeholder="Digite seu email"
          />

          <Input
            icon={<RiLockPasswordLine />}
            type="password"
            name="password"
            register={register}
            error={errors.password?.message}
            placeholder="Digite sua senha"
          />

          <Input
            icon={<FaRegCalendarAlt />}
            type="date"
            name="date"
            register={register}
            error={errors.date?.message}
          />

          <Input
            icon={<FaAddressCard />}
            type="text"
            name="cpf"
            register={register}
            error={errors.cpf?.message}
            placeholder="Digite seu CPF"
          />

          <Input
            icon={<FaTransgender />}
            type="text"
            name="gender"
            register={register}
            error={errors.gender?.message}
            placeholder="Seu gênero"
            IsSelect
          >
            <option value="">Gênero</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
            <option value="Não informado">Prefiro não dizer</option>
          </Input>

          <Input
            icon={<FaMapMarkedAlt />}
            type="text"
            name="address"
            register={register}
            error={errors.address?.message}
            placeholder="Seu endereço"
          />

          <Input
            icon={<FaAddressCard />}
            type="text"
            name="register"
            register={register}
            error={errors.register?.message}
            placeholder="Registro Profissional (CRM)"
          />

          <Input
            icon={<FaAddressCard />}
            type="text"
            name="specialty"
            register={register}
            error={errors.specialty?.message}
            placeholder="Sua especialidade"
            IsSelect
          >
            <option value="">Especialidade</option>
            <option value="Cirurgia geral">Cirurgia geral</option>
            <option value="Pediatria">Pediatria</option>
            <option value="Ginecologia">
              Ginecologia
            </option>
            <option value="Ortopedia">
              Ortopedia
            </option>
            <option value="Oftalmologia">Oftalmologia</option>
            <option value="Cardiologia">Cardiologia</option>
            <option value="Radiologia">Radiologia</option>
            <option value="Psiquiatria">Psiquiatria</option>
            <option value="Dermatologia">Dermatologia</option>
            <option value="Otorrinolaringologia">Otorrinolaringologia</option>
            <option value="Endocrinologia">
              Endocrinologia
            </option>
            <option value="Cirurgia plástica">Cirurgia plástica</option>
            <option value="Infectologia">Infectologia</option>
            <option value="Cirurgia vascular">Cirurgia vascular</option>
            <option value="Urologia">Urologia</option>
            <option value="Cancerologia">Cancerologia</option>
            <option value="Nefrologia">Nefrologia</option>
            <option value="Outro">Outro</option>
          </Input>

          <Input
            icon={<BiTimeFive />}
            type="text"
            name="demands"
            register={register}
            error={errors.demands?.message}
            placeholder="Demandas de atendimento"
            IsSelect
          >
            <option value="">Demandas</option>
            <option value="Diária">Diária</option>
            <option value="Semanal">Semanal</option>
            <option value="Mensal">Mensal</option>
            <option value="Trimestral">Trimestral</option>
            <option value="Anual">Anual</option>
          </Input>

          <Input
            icon={<FaAddressCard />}
            type="text"
            name="typeCalls"
            register={register}
            error={errors.typeCalls?.message}
            IsSelect
          >
            <option value="">Tipos de atendimentos</option>
            <option value="Presencial">Consulta Presencial</option>
            <option value="Online">Consulta Online</option>
            <option value="Ambos">Ambos</option>
          </Input>

          <Input
            icon={<BiTimeFive />}
            type="text"
            name="schedule"
            register={register}
            error={errors.schedule?.message}
            placeholder="Disponibilidade de horário"
            IsSelect
          >
            <option value="">Disponibilidade de horário</option>
            <option value="Matutino">Matutino</option>
            <option value="Vespertino">Vespertino</option>
            <option value="Noturno">Noturno</option>
            <option value="Matutino e Vespertino">Matutino e Vespertino</option>
            <option value="Matutino e Noturno">Matutino e Noturno</option>
            <option value="Vespertino e Noturno">Vespertino e Noturno</option>
            <option value="Dia inteiro">Dia inteiro</option>
          </Input>
        </div>

        <p className="link">
          <Link to="/login">Já possui conta?</Link>
        </p>

        <div className="container-Buttons">
          <div className="box-left">
            {loading ? (
              <Button type="submit" GreenTheme>
                {" "}
                . . . . .{" "}
              </Button>
            ) : (
              <Button type="submit" GreenTheme>
                Cadastrar-se
              </Button>
            )}
          </div>

          <p className="span-text"> Ou </p>

          <div className="box-right">
            <Button onClick={() => history.push("/")}>Voltar</Button>
          </div>
        </div>
      </form>
    </Container>
  );
};
