import styles from "./page.module.css";

import StartPage from './components/StartPage';
import MainPage from './components/MainPage';

export default function Home() {
  let firstplay = true;

  const startPlay = () => {
    firstplay = !firstplay;
  } 


  return(
    <div>
      {firstplay ? <StartPage/> : <MainPage/>}
    </div>
  )
}