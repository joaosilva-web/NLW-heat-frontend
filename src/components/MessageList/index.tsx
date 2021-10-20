import S from './styles.module.scss';

import logo from '../../assets/logo.svg';

export function MessageList() {
    return(
        <div className={S.messageListWrapper}>
            <img src={logo} alt="DoWhile 2021" />

            <ul className={S.messageList}>
                <li className={S.message}>
                    <p className={S.messageContent}>
                    Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
                    </p>
                    <div className={S.messageUser}>
                        <div className={S.userImage}>
                            <img src="https://github.com/joaosilva-web.png" alt="João Gustavo" />
                        </div>
                        <span>João Gustavo</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}