import styles from './Prato.module.scss';
import { useParams } from 'react-router-dom';

export default function Prato() {
	return (
		<div className={styles.container}>
			<h1>Prato</h1>
		</div>
	);
}