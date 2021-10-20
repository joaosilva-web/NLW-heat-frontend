import { api } from "../../services/api";

import S from './styles.module.scss';

import logo from '../../assets/logo.svg';
import { useEffect, useState } from "react";

type Message = {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

export function MessageList() {
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        api.get<Message[]>('messages/last3').then(res => {
            setMessages(res.data);
        })
    }, [])

    return(
        <div className={S.messageListWrapper}>
            <img src={logo} alt="DoWhile 2021" />

            <ul className={S.messageList}>

                {messages.map(message => {
                    return (     
                        <li key={message.id} className={S.message}>
                            <p className={S.messageContent}>
                            {message.text}
                            </p>
                            <div className={S.messageUser}>
                                <div className={S.userImage}>
                                    <img src={message.user.avatar_url} alt={message.user.name} />
                                </div>
                                <span>{message.user.name}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}