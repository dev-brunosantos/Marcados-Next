"use client"

import { Menu } from "@/src/components/Menu";
import { Tela, TelaContainer } from "@/src/components/Tela";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from 'react-icons/io'

export default function Home() {
    
    const [modalMenu, setModalMenu] = useState(false)

    const abrirMenu = () => {
        setModalMenu(!modalMenu)
    }

    return (
        <Tela>
            <div className="w-full h-[54px] fixed top-0 left-0">
                <button
                    className="h-[100%] p-2 flex items-center justify-center absolute top-0 right-1"
                    onClick={abrirMenu}
                >
                    <IoMdMenu size={35} />
                </button>
            </div>

            <Menu abrir={modalMenu}/>
        </Tela>
    )
}