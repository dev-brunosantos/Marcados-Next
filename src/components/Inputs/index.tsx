import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isPassword: boolean;
}

export const InputComponent = ({ isPassword, ...rest }:InputProps) => {
    return(
        <div className="w-[100%] h-[54px] border rounded-xl flex items-center justify-center">
            <input type="text" />
        </div>
    )
}