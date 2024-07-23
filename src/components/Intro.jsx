import introImage from '../assets/images/hero-1.jpg';

const Intro = () => {
	return (
		<>
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: `url(${introImage})`
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content prose mt-auto text-neutral-content text-center">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">
							Discover PawKlan's Latest Fashion Trends
						</h1>
						<p className="mb-5">
							Explore our exclusive collection of stylish and high-quqality
							fashion pieces. Embrace your uniques style with PawKlan's curated
							selection
						</p>
						<button className="btn btn-primary rounded-none">Shop Now</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Intro;
