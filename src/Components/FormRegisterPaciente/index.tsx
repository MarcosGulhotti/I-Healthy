import { Container, } from "./style"
import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { FaUser, FaRegCalendarAlt, FaAddressCard, FaTransgender, FaMapMarkedAlt }  from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link } from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from "../Button"
import { RegisterPaciente } from '../../Types/index'
import { api} from '../../Services/api'
import { useState } from "react"
import { useHistory } from "react-router-dom"
import toast from "react-hot-toast"

export const FormRegisterPaciente = () => {

    const formSchema = yup.object().shape({
        username: yup.string().required("nome obrigatório"),
        email: yup.string().required("email obrigatório").email("email obrigatŕoio"), 
        password: yup.string().min(8, "Mínimo de 8 dígitos")
        .matches(
          /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial"
        ), 
        date: yup.date().required("data obrigatório"),
        cpf: yup.string().required("CPF obrigatório"),
        genre: yup.string().required("gênero obrigatório"),
        address: yup.string().required("endereço obigatório")
    })
    
    const { register, handleSubmit, reset ,formState: {errors} } = useForm({
        resolver: yupResolver(formSchema)
    })

    const [loading, setLoading ] = useState<boolean>(false)
    const history = useHistory() 
  
    const onSubmit = async (user: RegisterPaciente) => {
        setLoading(true)
        reset()
        const {data} = await api.post("/register",  {...user, isProfessional: false})
        console.log(data)
        toast.success("Cadastro realizado com sucesso")
        setLoading(false) 
        history.push("/login")   // ou dashboard
    }
    
    return(
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    icon={<FaUser/>}
                    type="text"
                    name="username"
                    register={register}
                    error={errors.username?.message}
                    placeholder="Digite seu nome"
                    />

                
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
                
                <Input 
                    icon={<FaRegCalendarAlt/>}
                    type="date"
                    name="date"
                    register={register}
                    error={errors.date?.message}
                    placeholder="Sua data de nascimento"
                    
                    />

                <Input 
                    icon={<FaAddressCard/>}
                    type="text"
                    name="cpf"
                    register={register}
                    error={errors.cpf?.message}
                    placeholder="Seu CPF"
                    
                    />

               <Input 
                    icon={<FaTransgender/>}
                    type="text"
                    name="genre"
                    register={register}
                    error={errors.genre?.message}
                    placeholder="Seu gênero"
                    IsSelect
                    >
                    <option value="">gênero</option>
                    <option value="F">F</option>
                    <option value="M">M</option>

                </Input>
 
                <Input 
                    icon={<FaMapMarkedAlt/>}
                    type="text"
                    name="address"
                    register={register}
                    error={errors.address?.message}
                    placeholder="Seu endereço"
                    />

                    <p className="link"><Link to="/login">Já possui conta?</Link></p>

                    <div className="container-Buttons">
                        <div className="box-left">
                            {
                                loading?
                                (
                                    <Button type="submit" GreenTheme > . . . .  </Button> // colocar spinners
                                    
                                )
                                    :
                                (
                                    <Button type="submit" GreenTheme >Cadastrar-se</Button>

                                )
                            }
                        </div>

                        <p className="span-text"> Ou </p>

                        <div className="box-right">
                            <Button>Voltar</Button>
                        </div>
                    </div>
                </form>
            </Container>
    )
}