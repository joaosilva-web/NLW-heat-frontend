import { useContext } from 'react';
import S from './app.module.scss';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './contexts/authContext';


export function App() {
  const { user } = useContext(AuthContext)

  return (
    <main className={S.contentWrapper}>
      <MessageList/>
      {!!user ? <SendMessageForm/> : <LoginBox/>}
    </main>
  )
}
