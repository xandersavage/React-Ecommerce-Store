/* eslint-disable no-unused-vars */
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider
} from 'react-router-dom';
import { useEffect } from 'react';

import AOS from 'aos';

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
				<Route path="/men" element={<MenStorePage category="Men" />} />
				<Route path="/women" element={<WomenStorePage category="Women" />} />
			</Route>
		),
		{
			basename: '/React-Ecommerce-Store/'
		}
	);

	useEffect(() => {
		AOS.init({
			duration: 1500, // Duration of animation (in milliseconds)
			once: true // Whether animation should happen only once - while scrolling down
		});
	}, []);

	return <RouterProvider router={router} />;
}

export default App;
