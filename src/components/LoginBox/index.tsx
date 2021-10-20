import { useContext } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { AuthContext } from "../../contexts/authContext";

import S from "./styles.module.scss";

export function LoginBox() {
    const { signInUrl } = useContext(AuthContext);


    return(
        <div className={S.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={S.signInWithGithub}>
                <VscGithubInverted size="24"/>
                entrar com github
            </a>
        </div>
    )
}