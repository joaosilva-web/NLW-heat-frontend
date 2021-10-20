import { VscGithubInverted } from "react-icons/vsc";

import S from "./styles.module.scss";

export function LoginBox() {
    return(
        <div className={S.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href="#" className={S.signInWithGithub}>
                <VscGithubInverted size="24"/>
                entrar com github
            </a>
        </div>
    )
}