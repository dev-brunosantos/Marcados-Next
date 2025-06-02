"use client"

import { BtnComponent } from "@/src/components/Buttons";
import { Tela, TelaContainer } from "@/src/components/Tela";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SelectNaipe } from "./SelectComponent";
import { Formulario } from "./Formulario";
import { api } from "@/src/configs/axios";

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
    const [naipeEscolhido, setNaipeEscolhido] = useState('')

    useEffect(() => {
        async function buscaDados() {
            // var response = await fetch('http://192.168.0.176:9000/cargos')
            var response = await api.get('/cargos')
            var dados = await response.data

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
                <select
                    className="w-[100%] h-[54px] mt-2 mb-2 border rounded-xl flex items-center justify-center"
                    value={cargo} onChange={(e) => setCargo(e.target.value)}
                >
                    <option className="w-full h-full text-center" value="">Escolha seu cargo</option>
                    {
                        cargos.map(card => (
                            <option className="w-[50%] text-center" key={card.id} value={card.cargo}>
                                {card.cargo}
                            </option>
                        ))
                    }
                </select>
                {
                    cargo == "Vocal" && (
                        <SelectNaipe
                            naipe="Vozes"
                            placeholder="Escolha seu Naipe"
                            naipeEscolhido={naipeEscolhido}
                            setNaipeEscolhido={setNaipeEscolhido}
                        />
                    )
                }
                {
                    cargo == "Musico" && (
                        <SelectNaipe
                            naipe="Instrumentos"
                            placeholder="Escolha seu instrumento"
                            naipeEscolhido={naipeEscolhido}
                            setNaipeEscolhido={setNaipeEscolhido}
                        />
                    )
                }
            </TelaContainer>

            <TelaContainer>
                <BtnComponent
                    titulo="Cadastrar"
                    onClick={() => {
                        if (nome.trim() == "" || email.trim() == "" || senha.trim() == "") {
                            return alert("Todos os campos devem ser preenchidos")
                        }

                        if (confirmacaoSenha != senha) {
                            return alert("As senhas não são iguais.")
                        }
                        console.log(`${nome}, ${email}, ${senha}, ${cargo}, ${naipeEscolhido}`)
                        alert(`${nome}, ${email}, ${senha}, ${cargo}, ${naipeEscolhido}`)
                    }}
                />

                <Link href="/login">Já tem conta? Faça login aqui</Link>
            </TelaContainer>
        </Tela>
    )
}