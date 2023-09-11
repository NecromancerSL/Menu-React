import styles from './Cardapio.module.scss';
import Buscador from './search';
import { useState } from 'react';
import Filter from './filter';
import Computer from './computer';
import Items from './items';
import stylesTheme from 'styles/Theme.module.scss';

export default function Cardapio() {
	const [busca,setBusca] = useState('');
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador,setOrdenador] = useState('');
	return (
		<>
			<section className={styles.cardapio}>
				<h3 className={stylesTheme.titulo}>Menu</h3>
				<Buscador busca={busca} setBusca={setBusca}/>
				<div className={styles.cardapio__filtros}>
					<Filter filtro={filtro} setFiltro={setFiltro}/>
					<Computer ordenador={ordenador} setOrdenador={setOrdenador}/>
				</div>
				<Items busca={busca} filtro={filtro} ordenador={ordenador}/>
			</section>
		</>
	);
}