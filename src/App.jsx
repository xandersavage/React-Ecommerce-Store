/* eslint-disable no-unused-vars */
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider
} from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenStorePage from './pages/MenStorePage';
import WomenStorePage from './pages/WomenStorePage';

// Layout
import MainLayout from './layouts/MainLayout';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/men" element={<MenStorePage />} />
				<Route path="/women" element={<WomenStorePage />} />
			</Route>
		),
		{
			basename: '/React-Ecommerce-Store/'
		}
	);

	return <RouterProvider router={router} />;
}

export default App;
