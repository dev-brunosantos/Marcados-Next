import { HtmlHTMLAttributes } from "react";

interface BtnProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    titulo: string;
}

export const BtnComponent = ({ titulo, ...rest }: BtnProps) => {
    return(
        <button className="w-[100%] h-[54px] mt-2 mb-2 border rounded-xl flex items-center justify-center" {...rest}>
            { titulo }
        </button>
    )
}