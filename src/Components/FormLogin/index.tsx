import { Input } from '../Input'
import { Button } from '../Button'
import { useForm } from 'react-hook-form'
import { api } from '../../Services/api'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { ILoginUser } from '../../Types'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container } from './style'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import toast from 'react-hot-toast'
import BeatLoader from "react-spinners/BeatLoader";

export const FormLogin = () => {


    const formSchema = yup.object().shape({
        email: yup.string().required("email obrigatório").email("email obrigatŕoio"),
        password: yup.string().min(8, "Mínimo de 8 dígitos")
        .matches(
          /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial"
        ), 
    })

    const { register, handleSubmit, reset ,formState: {errors} } = useForm({
        resolver: yupResolver(formSchema)
    })

    const [ loading, setLoading ] = useState<boolean>(false)
    const history = useHistory()

    const onSubmit = async (user: ILoginUser) => {
        setLoading(true)
        const { data } = await api.post("/login", user)
        setLoading(false)
        toast.success("Seja bem vindo")
        console.log(data)
       /*  history.push("/dashboard") */
        reset()
    }

   return(
    <Container>
        <form onSubmit={handleSubmit(onSubmit)}>

            <Input
                icon={<HiOutlineMail/>}
                type="email"
                name="email"
                register={register}
                error={errors.email?.message}
                placeholder="Digite seu email"
                />

            <Input
                icon={<RiLockPasswordLine/>}
                type="password"
                name="password"
                register={register}
                error={errors.password?.message}
                placeholder="uma senha"
                />
            
            <p className="link"><Link to="/">Não possui conta?</Link></p>

              
            <div className="container-Buttons">
                <div className="box-left">
                    {
                        loading?
                        (
                            <Button GreenTheme > .  .  .  .</Button> // colocar spinners
                        )
                        :
                        (
                            <Button type="submit" GreenTheme >Entrar</Button>
                        )
                    }
                </div>

                <p className="span-text"> Ou </p>

                <div className="box-right">
                    <Button onClick={() => history.push("/")}>Cadastrar-se</Button>
                </div>
            </div>
                    
        </form>
     </Container>
    ) 
}