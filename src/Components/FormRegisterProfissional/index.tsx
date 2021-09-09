import { Container, } from "./style"
import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { FaUser, FaRegCalendarAlt, FaAddressCard, FaTransgender, FaMapMarkedAlt }  from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'
import { RiLockPasswordLine,  } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from "react-router-dom"
import { RegisterProfissional } from '../../Types/index'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from "../Button"
import { api } from "../../Services/api"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import toast from "react-hot-toast"


export const FormRegisterProfissional = () => {

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
        address: yup.string().required("endereço obigatório"),
        register: yup.string().required("Registro obrigatório"),
        specialty: yup.string().required("Especialidade Obrigatória"),
        demands: yup.string().required("Demandas obrigatória"),
        typeCalls: yup.string().required("Tipos de atendimentos obrigatório"),
        schedule: yup.string().required("Disponibilidade obrigatória")
    
    })

    const { register, handleSubmit, reset ,formState: {errors} } = useForm({
        resolver: yupResolver(formSchema)
    })

    const history = useHistory()
    const [ loadind, setLoading ] = useState<boolean>(false)

    const onSubmit = async (user: RegisterProfissional) => {
        
        setLoading(true)
        const { data } = await api.post("/register", user)
        setLoading(false)   
        toast.success("Cadastro realizado com sucesso")
        console.log(data)
       /*  history.push("/login") */ // ou dashboard
        reset()
    }

    
    return(
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="container-inputs">

            

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
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </Input>      

                <Input 
                    icon={<FaMapMarkedAlt/>}
                    type="text"
                    name="address"
                    register={register}
                    error={errors.address?.message}
                    placeholder="Seu endereço"
                    />

                <Input 
                    icon={<FaAddressCard/>}
                    type="text"
                    name="register"
                    register={register}
                    error={errors.register?.message}
                    placeholder="Registro Profissional"
                    />

                <Input 
                    icon={<FaAddressCard/>}
                    type="text"
                    name="specialty"
                    register={register}
                    error={errors.specialty?.message}
                    placeholder="Sua especialidade"
                    IsSelect
                    >
                    <option value="">Especialidade</option>
                    <option value="PO">P</option>
                    <option value="PA">P</option>
                </Input>

                <Input 
                    icon={<BiTimeFive/>}
                    type="text"
                    name="demands"
                    register={register}
                    error={errors.demands?.message}
                    placeholder="Demandas de atendimento"
                    IsSelect
                    >
                        <option value="">demandas</option>
                        <option value="as">9:00h as </option>
                        <option value="sa">10hr</option>
                </Input>

                <Input 
                    icon={<FaAddressCard/>}
                    type="text"
                    name="typeCalls"
                    register={register}
                    error={errors.typeCalls?.message}
                    placeholder="Tipos de atendimentos"
                    />

                <Input 
                    icon={<BiTimeFive/>}
                    type="text"
                    name="schedule"
                    register={register}
                    error={errors.schedule?.message}
                    placeholder="Disponibilidade de horário"
                    />
            </div>
                
                     <p className="link"><Link to="/login">Já possui conta?</Link></p>

                    <div className="container-Buttons">

                        <div className="box-left">
                             <Button type="submit" GreenTheme >Cadastrar-se</Button>
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