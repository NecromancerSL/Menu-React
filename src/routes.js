import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cardapio from './pages/cardapio';
import Menu from './components/menu';
import Homepage from './components/homepage';
import Sobre from 'pages/sobre';
import Footer from 'components/footer';
import NotFound from 'pages/not found';
import Prato from 'pages/prato';

export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<Menu />
				<Routes>
					<Route path='/' element={<Homepage/>}> // O elemento Homepage será renderizado em todas as rotas filhas
						<Route index element={<Home />} /> // O elemento Home será renderizado na rota raiz
						<Route path='cardapio' element={<Cardapio />} /> // O elemento Cardapio será renderizado na rota /cardapio	
						<Route path='sobre' element={<Sobre />} /> // O elemento Sobre será renderizado na rota /sobre
					</Route>
					<Route path='*' element={<NotFound />} /> // O elemento NotFound será renderizado em qualquer outra rota
					<Route path='/prato/:id' element={<Prato />} /> // O elemento Prato será renderizado na rota /prato
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}	