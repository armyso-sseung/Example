import Link from "next/link";
import style from "./index.module.css"
import {TitleMessage} from "@/messages/messages";

export default function Index () {
    return (
        <div>
            <Link href={'/login'} className={style.login}>{ TitleMessage.login }</Link>
        </div>
    )
}