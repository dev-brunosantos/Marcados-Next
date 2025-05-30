"use client"

import { BtnComponent } from "@/src/components/Buttons";
import { InputComponent } from "@/src/components/Inputs";
import { Tela, TelaContainer } from "@/src/components/Tela";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {

    const route = useRouter()

    function login() {
        return route.push('/home')
    }

    return (
        <Tela>
            <TelaContainer>
                <h1 className="text-[3rem] font-bold">
                    {/* Marcados */}
                </h1>
            </TelaContainer>

            <TelaContainer>
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu e-mail"
                />
                <InputComponent
                    isPassword={true}
                    placeholder="Digite sua senha"
                />
            </TelaContainer>

            <TelaContainer>
                <BtnComponent
                    titulo="Entrar"
                    onClick={login}
                />

                <Link href="/cadastro/usuario">Não tem conta? Cadastre-se aqui</Link>
            </TelaContainer>
        </Tela>
    )
}