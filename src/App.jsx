/* eslint-disable no-unused-vars */
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider
} from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';

// Layout
import MainLayout from './layouts/MainLayout';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
			</Route>
		),
		{
			basename: '/React-Ecommerce-Store/'
		}
	);

	return <RouterProvider router={router} />;
}

export default App;
