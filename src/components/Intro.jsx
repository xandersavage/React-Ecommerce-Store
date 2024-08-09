/* eslint-disable react/prop-types */
const Intro = ({ title, image, description, buttonText }) => {
	return (
		<>
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: `url(${image})`
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content prose mt-auto text-neutral-content text-center">
					<div className="max-w-md">
						{title && (
							<h1 data-aos="fade-up" className="mb-5 text-5xl font-bold">
								{title}
							</h1>
						)}
						{description && (
							<p data-aos="fade-right" className="mb-5">
								{description}
							</p>
						)}
						{buttonText && (
							<button
								data-aos="fade-down"
								className="btn btn-primary rounded-none"
							>
								{buttonText}
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Intro;
