import { BtnComponent } from "@/src/components/Buttons";
import { InputComponent } from "@/src/components/Inputs";
import { Tela, TelaContainer } from "@/src/components/Tela";
import Link from "next/link";

export default function CadastroUsuario() {
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
                    placeholder="Digite seu nome"
                />
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu e-mail"
                />
                <InputComponent
                    isPassword={true}
                    placeholder="Digite sua senha"
                />
                <InputComponent
                    isPassword={true}
                    placeholder="Confirme sua senha"
                />
            </TelaContainer>

            <TelaContainer>
                <BtnComponent
                    titulo="Entrar"
                />
                
                <Link href="/login">Já tem conta? Faça login aqui</Link>
            </TelaContainer>
        </Tela>
    )
}