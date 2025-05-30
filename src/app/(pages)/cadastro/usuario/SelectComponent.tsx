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
}

export const SelectNaipe = ({ naipe, placeholder }: ValidaNaipe) => {

    const [vozes, setVozes] = useState<NaipeProps[]>([])
    const [naipeEscolhido, setNaipeEscolhido] = useState('')

    useEffect(() => {
        async function buscaDados() {
            var response = await fetch(`http://localhost:9000/naipe/${naipe}`)
            var dados = await response.json()

            if (!dados) {
                throw new Error("Erro")
            }
            console.log(dados)
            return setVozes(dados)
        }

        buscaDados()
    }, [])

    return (
        <select value={naipeEscolhido} onChange={(e) => setNaipeEscolhido(e.target.value)}>
            <option value="">
                {placeholder}
            </option>
            {
                vozes.map(card => (
                    <option key={card.id} value={card.naipe}>
                        {card.naipe}
                    </option>
                ))
            }
        </select>
    )
}