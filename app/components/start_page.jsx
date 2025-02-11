import Image from "next/image";
import styles from "../page.module.css";

export default function StartPage() {
    return(
      <div className={styles.firstplayMenu}>
          <main>
            <Image
              className={styles.logo}
              src='/logo.png'
              alt='logo'

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