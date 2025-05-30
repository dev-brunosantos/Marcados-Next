import { ReactNode } from "react"

export const Tela = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full h-[100vh] p-5">
            {children}
        </div>
    )
}

export const TelaContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full h-auto py-2 flex flex-col items-center justify-center border">
            {children}
        </div>
    )
}
