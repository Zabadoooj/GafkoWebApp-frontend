import Image from "next/image";
import firstplayToggle from './utils';
import styles from "../page.module.css";

export default function StartPage() {
    return(
      <div className={styles.firstplayMenu}>
          <main>
            <Image
              className={styles.logo}
              src='/icon.png'
              alt='icon'

              width={256}
              height={256}
            />
          <div>
            <h1>Гафкошмыг теперь WebApp!</h1>
            <h2>Добро пожаловать</h2>
          </div>

          <button className={styles.playBtn}>Начать играть</button>
        </main>
      </div>
    );
};