import { useSelector } from 'react-redux';
import avatar from './assets/img/avatar.svg';
import bg from './assets/img/bg.svg';
import wave from './assets/img/wave.png';
import { Button } from './components/Button';
import Input from './components/Input';
import './style.css';

interface Request {
  data: string[]
  errors: boolean
  loading: boolean
}
interface ReducerTitle {
  title: string
}

interface SelectorProps {
  ReducerRequest: Request
  ReducerTitle: ReducerTitle
}

function App() : JSX.Element {
  // const dispatchers = useDispatch()
  const title = useSelector((state : SelectorProps) => state.ReducerTitle.title)

  return (
    <>
     <img className="wave" src={wave} alt=""/>
    <div className="container">
      <div className="img">
        <img src={bg} alt=""/>
      </div>
      <div className="login-content">
        <form action="index.html">
          <img src={avatar} alt=""/>
          <h2 className="title">{title}</h2>
          <Input
            icon="user"
            className="one"
            placeholder="Digite seu usuário"
          />
          <Input
            icon="lock"
            className="pass"
            placeholder="Digite sua senha"
            typeInput="password"
          />
          <a href="#">Forgot Password?</a>
         <Button />
        </form>
      </div>
    </div>
    </>
  );
}

export default App;
