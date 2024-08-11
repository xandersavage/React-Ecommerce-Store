import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
			<div className="navbar fixed top-0 z-50 bg-base-100 shadow-2xl">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost rounded-none lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/about">About</NavLink>
							</li>
							<li>
								<a>Store</a>
								<ul className="p-2">
									<li>
										<NavLink to="/men">Men</NavLink>
									</li>
									<li>
										<NavLink to="/women">Women</NavLink>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<a className="btn btn-ghost rounded-none border-b-2 border-b-primary text-lg">
						PawKlan
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<details>
								<summary>Store</summary>
								<ul className="p-2">
									<li>
										<NavLink to="/men">Men</NavLink>
									</li>
									<li>
										<NavLink to="/women">Women</NavLink>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</div>
				<div className="navbar-end pr-2">
					<NavLink
						to="/login"
						className="btn btn-primary rounded-none px-4 py-2"
					>
						Login
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default NavBar;
