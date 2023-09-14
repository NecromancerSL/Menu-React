import cardapio from 'data/menu.json';
import styles from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import nossaCasa from  'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';


export default function Home() {

	let lista= [...cardapio];
	lista = lista.sort(() => 0.5 - Math.random()).splice(0,3);
	const navigate = useNavigate();

	function redirecionarVerMais(prato: typeof cardapio[0]){
		navigate('/prato/{prato.id}',{state: {...prato}, replace: true});
	}

	return(
		<section>
			<h3 className={stylesTheme.titulo}>Recomendações da cozinha</h3>
			<div className={styles.recomendados}>
				{lista.map(item =>(
					<div key={item.id} className={styles.recomendado}>
						<div className={styles.recomendado__imagem}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button 
							className={styles.recomendado__botao}
							onClick={() => redirecionarVerMais(item)}
						>
							Ver mais
						</button>
					</div>
				))}
			</div>
			<h3 className={stylesTheme.titulo}>Nossa casa</h3>
			<div className={styles.nossaCasa}>
				<img src={nossaCasa} alt="Casa Mamma Mia Marcello" />
				<div className={styles.nossaCasa__endereco}>
					Rua Manoel Alher 123 <br /> <br /> Centro, São Paulo - SP
				</div>
			</div>
		</section>
	);
}
