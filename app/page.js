import styles from "./page.module.css";

import firstplayToggle from './components/utils';
import StartPage from './components/StartPage';
import MainPage from './components/MainPage';

export default function Home() {
  let firstplay = true;
  
  return(
    <div>
      {firstplay ? <StartPage/> : <MainPage/>}
    </div>
  )
}