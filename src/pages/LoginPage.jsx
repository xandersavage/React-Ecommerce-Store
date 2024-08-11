import { useState } from 'react';
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add form submission logic here
	};

	return (
		<section className="min-h-screen flex flex-col px-6 justify-center items-center">
			<div
				className="w-full max-w-md p-8 space-y-8 bg-base-100 rounded-lg 
							shadow-2xl border-2 border-primary"
			>
				<h2 className="text-3xl font-bold text-center">Login</h2>
				<p className="text-xl text-center">
					Welcome back! Please login to your account.
				</p>
				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Email Input */}
					<div>
						<label
							htmlFor="email"
							className="text-sm font-medium text-gray-700"
						>
							Email Address
						</label>
						<div className="mt-1 relative">
							<FaEnvelope className="absolute left-3 top-2.5 text-gray-400" />
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
								placeholder="Enter your email"
							/>
						</div>
					</div>

					{/* Password Input */}
					<div>
						<label
							htmlFor="password"
							className="text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<div className="mt-1 relative">
							<FaLock className="absolute left-3 top-2.5 text-gray-400" />
							<input
								id="password"
								name="password"
								type={showPassword ? 'text' : 'password'}
								required
								className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
								placeholder="Enter your password"
							/>
							<div
								className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
								onClick={togglePasswordVisibility}
							>
								{showPassword ? <FaEyeSlash /> : <FaEye />}
							</div>
						</div>
					</div>

					{/* Submit Button */}
					<div>
						<button
							type="submit"
							className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-lg bg-primary hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
						>
							<h3>Login</h3>
						</button>
					</div>
				</form>
				<div className="text-center">
					<p className="text-xl text-gray-600">
						Don't have an account?{' '}
						<NavLink to="/register" className="text-primary hover:underline">
							Sign Up
						</NavLink>
					</p>
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
