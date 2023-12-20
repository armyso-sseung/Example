import {ReactNode} from "react";
import style from "./index.module.css"


type PropsType = {
    children :ReactNode,
    modal :ReactNode
}


export default function beforeLayout({ children, modal } :PropsType) {
    return (
        <main className={style.container}>
            { children }
            { modal }
        </main>
    )
}