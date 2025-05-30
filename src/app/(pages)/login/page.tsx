import { BtnComponent } from "@/src/components/Buttons";
import { InputComponent } from "@/src/components/Inputs";
import { Tela, TelaContainer } from "@/src/components/Tela";
import Link from "next/link";

export default function Login() {
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
                />
                
                <Link href="/">Não tem conta? Cadastre-se aqui</Link>
            </TelaContainer>
        </Tela>
    )
}