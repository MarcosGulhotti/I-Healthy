import { Input } from "../Input";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import { api } from "../../Services/api";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { ILoginUser } from "../../Types";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useAuth } from "../../Providers/Auth";
import { useUser } from "../../Providers/User";

export const FormLogin = () => {
  const { setIsAuth } = useAuth();
  const { getUser } = useUser();
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email invalido"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos 1 letra maiúscula, 1 minúscula, 1 número e 1 caracter especial"
      ),
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

  const onSubmit = async (userData: ILoginUser) => {
    setLoading(true);
    try {
      const { data } = await api.post("/login", userData);

      setLoading(false);

      getUser(data.user.id);

      localStorage.setItem("@Kenzie:id", data.user.id);

      setIsAuth(localStorage.getItem("@Kenzie:id") || "null");

      history.push("/dashboard");

      toast.success(`Seja bem vindo ${data.user.username}`);
    } catch (e) {
      toast.error("Senha ou email inválido");
      setLoading(false);
    }
    reset();
  };

  return (
    <Container className="container-form">
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <p className="link">
          <Link to="/choosepage">Não possui conta?</Link>
        </p>

        <div className="container-Buttons">
          <div className="box-left">
            {loading ? (
              <Button GreenTheme> . . . .</Button> // colocar spinners
            ) : (
              <Button type="submit" GreenTheme>
                Entrar
              </Button>
            )}
          </div>

          <p className="span-text"> Ou </p>

          <div className="box-right">
            <Button onClick={() => history.push("/choosepage")}>
              Cadastrar-se
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
};
