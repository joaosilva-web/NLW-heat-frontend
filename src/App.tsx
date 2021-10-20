import S from './app.module.scss';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';


export function App() {

  return (
    <main className={S.contentWrapper}>
      <MessageList/>
      <LoginBox/>
    </main>
  )
}
