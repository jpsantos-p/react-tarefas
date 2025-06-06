import { useContext, useRef } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router";

const Login = () => {

    const emailInput = useRef();
    const senhaInput = useRef();

    const {setLogado} = useContext (LoginContext)
    const navigate = useNavigate()  



    function logar(event) {
        event.preventDefault();

        let dados = {
            email: emailInput.current.value,
            senha: senhaInput.current.value
        }
        if (dados.email == "jpedro.santos@yahoo.com" && dados.senha == "12345"){
            sessionStorage.setItem ("logado", true);
            setLogado(true)
            navigate("/");
        }else{
            alert("Email ou senha incorretos!")
        }
        console.log(dados)
    }
    return (
        <div className="h-screen flex justify-center items-center bg-slate-100">
            <form onSubmit={logar} className="w-[350px] p-4 rounded-lg bg-white">
                <h3 className="tex-lg text-slate-500 font-bold mb-8">Seja Bem Vindo</h3>
                <label className="block text-slate-700 font bold mb-1">Email</label>
                <input ref={emailInput} type="text" placeholder="Digite seu email" className="w-full pl-4 rounded border border-slate-300 h-[40px] mb-4" />
                <label className="block text-slate-700 font bold mb-1">Senha</label>
                <input ref={senhaInput} type="password" placeholder="********" className="w-full pl-4 rounded border border-slate-300 h-[40px] mb-4" />
                <button className="leading-[46px] bg-slate-500 text-white px-4 rounded font-semibold w-full">Entrar</button>



            </form>

        </div>



    );
}

export default Login;