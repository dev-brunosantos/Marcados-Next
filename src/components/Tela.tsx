import { ReactNode } from "react"

export const Tela = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full h-[100vh] p-5 flex flex-col items-center justify-center">
            {children}
        </div>
    )
}

export const TelaContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full h-auto mt-2 mb-2 py-2 flex flex-col items-center justify-center">
            {children}
        </div>
    )
}
