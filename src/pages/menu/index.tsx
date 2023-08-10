import styles from './Menu.module.scss';
import { ReactComponent as Logo} from 'assets/logo.svg'


export default function Menu(){
    return(
        <main>
            <nav className={styles.menu}>
                <Logo />
                <header className={styles.header}>
                    <div className={styles.header__text}>
                        Ensinando como um italiano segura uma arma e fazendo deliciosas massas
                    </div>
                </header>
            </nav>
        </main>
    );
}