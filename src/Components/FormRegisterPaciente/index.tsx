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
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../Button";
import { RegisterPaciente } from "../../Types/index";
import { api } from "../../Services/api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

export const FormRegisterPaciente = () => {
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Nome obrigatório")
      .max(16, "Maximo de 16 caracteres"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Email obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial"
      ),
    date: yup.date().required("Data obrigatório"),
    cpf: yup
      .string()
      .required("CPF obrigatório")
      .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF invalido"),
    gender: yup.string().required("Gênero obrigatório"),
    address: yup.string().required("Endereço obigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  const onSubmit = async (user: RegisterPaciente) => {
    setLoading(true);
    try {
      reset();
      const { data } = await api.post("/register", {
        ...user,
        isProfessional: false,
        events: [],
      });
      toast.success("Cadastro realizado com sucesso");
      history.push("/login"); // ou dashboard
      setLoading(false);
    } catch {
      toast.error("Algo deu errado");
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
        </div>
        <p className="link">
          <Link to="/login">Já possui conta?</Link>
        </p>

        <div className="container-Buttons">
          <div className="box-left">
            {loading ? (
              <Button type="submit" GreenTheme>
                {" "}
                . . . .{" "}
              </Button> // colocar spinners
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
