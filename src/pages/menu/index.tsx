import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Buscador from "./search";
import { useState } from "react";
import Filter from "./filter";
import Computer from "./computer";
import Items from './items';

export default function Menu() {
    const [busca,setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador,setOrdenador] = useState("");
    return (
        <main>
        <nav className={styles.menu}>
            <Logo />
        </nav>
        <header className={styles.header}>
            <div className={styles.header__text}>
            Ensinando como segurar uma arma e fazendo deliciosas massas
            </div>
        </header>
        <section className={styles.cardapio}>
            <h3 className={styles.cardapio__titulo}>Menu</h3>
            <Buscador busca={busca} setBusca={setBusca}/>
            <div className={styles.cardapio__filtros}>
                <Filter filtro={filtro} setFiltro={setFiltro}/>
                <Computer ordenador={ordenador} setOrdenador={setOrdenador}/>
            </div>
            <Items />
        </section>
        </main>
    )
}