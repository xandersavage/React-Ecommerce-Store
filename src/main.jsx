import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Default tailwind CSS import
import './styles.css'; // Custom Fonts
import 'aos/dist/aos.css';
import './app.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
