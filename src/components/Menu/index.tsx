"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface MenuProps {
    abrir: boolean;
}

export const Menu = ({ abrir }: MenuProps) => {
    const [largura, setLargura] = useState(0);
    const [border, setBorder] = useState('1px solid');

    useEffect(() => {
        setLargura(abrir ? 75 : 0);
        setBorder(border == 'none' ? '1px solid' : 'none')
    }, [abrir]);

    return (
        <div
            style={{ width: `${largura}%`, border: `${border}` }}
            className={`
                transition-all duration-500 ease-in-out
                h-[80%] absolute top-[54px] left-0
                flex flex-col items-center justify-evenly overflow-hidden
            `}
        >
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>

            <Link href='/login'>Sair</Link>
        </div>
    );
};
