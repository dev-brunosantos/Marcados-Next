"use client"

import { BtnComponent } from "@/src/components/Buttons";
import { Tela, TelaContainer } from "@/src/components/Tela";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SelectNaipe } from "./SelectComponent";
import { Formulario } from "./Formulario";

interface CargoProps {
    id: number;
    cargo: string;
    dtCriacao: string;
    dtAtualizacao: string;
}

export default function CadastroUsuario(naipe: string) {

    const [cargos, setCargos] = useState<CargoProps[]>([])
    const [cargo, setCargo] = useState('')

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('')

    useEffect(() => {
        async function buscaDados() {
            var response = await fetch('http://localhost:9000/cargos')
            var dados = await response.json()

            if (!dados) {
                throw new Error("Erro")
            }
            console.log(dados)
            return setCargos(dados)
        }

        buscaDados()
    }, [])

    return (
        <Tela>
            <TelaContainer>
                <h1 className="text-[3rem] font-bold">
                    {/* Marcados */}
                </h1>
            </TelaContainer>

            <TelaContainer>
                <Formulario
                    nome={nome} setNome={setNome}
                    email={email} setEmail={setEmail}
                    senha={senha} setSenha={setSenha}
                    confirmacaoSenha={confirmacaoSenha}
                    setConfirmacaoSenha={setConfirmacaoSenha}
                />
            </TelaContainer>

            <TelaContainer>
                <select value={cargo} onChange={(e) => setCargo(e.target.value)}>
                    <option value="">Escolha seu cargo</option>
                    {
                        cargos.map(card => (
                            <option key={card.id} value={card.cargo}>
                                {card.cargo}
                            </option>
                        ))
                    }
                </select>
                {
                    cargo == "Vocal" && (
                        <SelectNaipe naipe="Vozes" placeholder="Escolha seu Naipe" />
                    )
                }
                {
                    cargo == "Musico" && (
                        <SelectNaipe naipe="Instrumentos" placeholder="Escolha seu instrumento" />
                    )
                }
            </TelaContainer>

            <TelaContainer>
                <BtnComponent
                    titulo="Cadastrar"
                    onClick={() => {
                        if(nome.trim() == "" || email.trim() == "" || senha.trim() == "") {
                            return alert("Todos os campos devem ser preenchidos")
                        }

                        if (confirmacaoSenha != senha) {
                            return alert("As senhas não são iguais.")
                        }
                        console.log(`${nome}, ${email}, ${senha}`)
                    }}
                />

                <Link href="/login">Já tem conta? Faça login aqui</Link>
            </TelaContainer>
        </Tela>
    )
}