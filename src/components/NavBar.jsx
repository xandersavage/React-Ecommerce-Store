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
								<a>Home</a>
							</li>
							<li>
								<a>About</a>
							</li>
							<li>
								<a>Store</a>
								<ul className="p-2">
									<li>
										<a>Men</a>
									</li>
									<li>
										<a>Women</a>
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
							<a>Home</a>
						</li>
						<li>
							<a>About</a>
						</li>
						<li>
							<details>
								<summary>Store</summary>
								<ul className="p-2">
									<li>
										<a>Men</a>
									</li>
									<li>
										<a>Women</a>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default NavBar;
