import styles from "./page.module.css";

import StartPage from './components/start_page';

export default function Home() {

  let firstplay = true;

  if(firstplay){
    return (
    <div className={styles.page}>
      <StartPage/>
    </div>
  )

  }

  
}