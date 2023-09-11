/* eslint-disable no-mixed-spaces-and-tabs */
import styles from './Homepage.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';

export default function Homepage() {
	return (
		<>
		    <header className={styles.header}>
				<div className={styles.header__text}>
                    Ensinando como segurar uma arma e fazendo deliciosas massas
				</div>
		    </header>
			<div className={stylesTheme.container}>
				<Outlet/> 
			</div>
	    </>
	);
}