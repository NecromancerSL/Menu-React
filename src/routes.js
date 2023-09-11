import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cardapio from './pages/cardapio';
import Menu from './components/menu';
import Homepage from './components/homepage';

export default function AppRouter() {
	return (
		<main>
			<Router>
				<Menu />
				<Routes>
					<Route path='/' element={<Homepage/>}> // O elemento Homepage será renderizado em todas as rotas filhas
						<Route index element={<Home />} /> // O elemento Home será renderizado na rota raiz
						<Route path='cardapio' element={<Cardapio />} /> // O elemento Cardapio será renderizado na rota /cardapio	
					</Route>
				</Routes>
			</Router>
		</main>
	);
}	