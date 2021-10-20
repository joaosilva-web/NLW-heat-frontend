import { useContext, useState, FormEvent } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/authContext';
import { api } from '../../services/api';
import S from './styles.module.scss';

export function SendMessageForm() {
    const { user, signOut } = useContext(AuthContext);
    const [message, setMessage] = useState('');

    async function handleSendMessage(event: FormEvent) {
        event.preventDefault();
        
        if (!message.trim()) {
            return;
        }
        
        await api.post('messages', { message });

        setMessage('');
    }

    return(
        <div className={S.sendMessageFormWrapper}>
            <button onClick={signOut} className={S.signOutButton}>
                <VscSignOut size="32"/>
            </button>

            <header className={S.userInformation}>
                <div className={S.userImage}>
                    <img src={user?.avatar_url} alt={user?.name} />
                </div>
                <strong className={S.userName}>
                    {user?.name}
                </strong>
                <span className={S.userGithub}>
                    <VscGithubInverted size="16" />
                    {user?.login}
                </span>
            </header>

            <form onSubmit={handleSendMessage} className={S.sendMessageForm}>
                <label htmlFor="message">Mensagem</label>
                <textarea
                 name="message"
                 id="message"
                 placeholder="Qual a sua expectativa para o evento?"
                 onChange={event => setMessage(event.target.value)}
                 value={message}
                 />

                <button type="submit">Enviar mensagem</button>
            </form>
        </div>
    )
}