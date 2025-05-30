import { InputComponent } from "@/src/components/Inputs";
import { Tela, TelaContainer } from "@/src/components/Tela";

export default function Login() {
    return (
        <Tela>
            <TelaContainer>
                <InputComponent
                    isPassword={false}
                />
                <InputComponent
                    isPassword={true}
                />
            </TelaContainer>
        </Tela>
    )
}