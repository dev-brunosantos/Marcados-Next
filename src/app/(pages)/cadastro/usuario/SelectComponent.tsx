import { api } from "@/src/configs/axios";
import { useEffect, useState } from "react"

interface NaipeProps {
    id: number;
    naipe: string;
    categoria: string;
    dtCriacao: string;
    dtAtualizacao: string;
}

interface ValidaNaipe {
    naipe: string;
    placeholder: string;
    naipeEscolhido: string;
    setNaipeEscolhido: (naipe: string) => void;
}

export const SelectNaipe = ({ naipe, placeholder, naipeEscolhido, setNaipeEscolhido}: ValidaNaipe) => {

    const [vozes, setVozes] = useState<NaipeProps[]>([])

    useEffect(() => {
        async function buscaDados() {
            // var response = await fetch(`http://192.168.0.176:9000/naipe/${naipe}`)
            var response = await api.get(`/naipe/${naipe}`)
            var dados = await response.data

            if (!dados) {
                throw new Error("Erro")
            }
            console.log(dados)
            return setVozes(dados)
        }

        buscaDados()
    }, [])

    return (
        <select 
            className="w-[100%] h-[54px] mt-2 mb-2 border rounded-xl flex items-center justify-center"
            value={naipeEscolhido} onChange={(e) => setNaipeEscolhido(e.target.value)}
        >
            <option className="w-full h-full text-center" value="">
                {placeholder}
            </option>
            {
                vozes.map(card => (
                    <option className="w-full h-full text-center" key={card.id} value={card.naipe}>
                        {card.naipe}
                    </option>
                ))
            }
        </select>
    )
}