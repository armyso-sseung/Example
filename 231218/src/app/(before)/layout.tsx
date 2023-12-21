import {ReactNode} from "react";
import style from "./index.module.css"


type PropsType = {
    children :ReactNode,
    modal :ReactNode,
    sub :ReactNode
}


export default function beforeLayout({ children, modal, sub } :PropsType) {
    return (
        <main className={style.container}>
            { children }
            { modal }
            { sub }
        </main>
    )
}