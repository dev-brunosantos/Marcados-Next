import { InputComponent } from "@/src/components/Inputs"

interface UsuarioDadosProps {
    nome: string;
    setNome: (valor: string) => void;
    email: string;
    setEmail: (valor: string) => void;
    senha: string;
    setSenha: (valor: string) => void;
    confirmacaoSenha: string;
    setConfirmacaoSenha: (valor: string) => void;
}

export const Formulario = ({
    nome, setNome,
    email, setEmail,
    senha, setSenha,
    confirmacaoSenha, setConfirmacaoSenha
}: UsuarioDadosProps) => {
    return (
        <form className="w-full h-full">
            <div>
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputComponent
                    isPassword={true}
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <InputComponent
                    isPassword={true}
                    placeholder="Confirme sua senha"
                    value={confirmacaoSenha}
                    onChange={(e) => setConfirmacaoSenha(e.target.value)}
                />
            </div>
        </form>
    )
}
