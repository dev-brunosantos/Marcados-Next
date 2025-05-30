"use client"

import { InputHTMLAttributes, useState } from "react"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isPassword: boolean;
}

export const InputComponent = ({ isPassword, ...rest }: InputProps) => {

    const [type, setType] = useState('password')

    const verSenha = () => {
        type == "password" ? setType("text") : setType("password")
    }

    if (isPassword) {
        return (
            <div className="w-[100%] h-[54px] mt-2 mb-2 border rounded-[8px] flex items-center justify-center overflow-hidden relative">
                <input
                    type={type}
                    className="w-[100%] h-[100%] pl-2.5 text-[16px]"
                    {...rest}
                />

                <button
                    type="button"
                    className="h-[100%] p-2 flex items-center justify-center absolute top-0 right-1"
                    onClick={verSenha}
                >
                    {
                        type == "password" ? <FaRegEyeSlash size={35} /> : <FaRegEye size={35} />
                    }
                </button>
            </div>
        )
    }

    return (
        <div className="w-[100%] h-[54px] mt-2 mb-2 border rounded-[8px] flex items-center justify-center overflow-hidden">
            <input
                type="text"
                className="w-[100%] h-[100%] pl-2.5 text-[16px]"
                {...rest}
            />
        </div>
    )
}