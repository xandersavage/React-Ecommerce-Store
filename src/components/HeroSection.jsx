// import fashionOne from '../assets/svg/fashion-1.svg';
import fashionTwo from '../assets/images/hero-2.jpg';

const HeroSection = () => {
	return (
		<>
			<div className="hero min-h-screen w-full">
				<div
					className="hero-content flex flex-col sm:flex-row 
								lg:flex-row items-center justify-center 
								px-4 sm:px-8 lg:px-16"
				>
					<img
						src={fashionTwo}
						className="max-w-full sm:max-w-sm rounded-lg shadow-2xl
									mb-6"
						alt="Fashion"
					/>
					<div className="text-center sm:ml-8 lg:ml-16">
						<h1 className="text-5xl font-robotoMono font-bold mb-3">
							Elevate Your Style With Exclusive Collections
						</h1>
						<p className="py-6 font-teko">
							Discover the latest trends in fashion and enjoy personalized
							recommendations tailored to your style. Shop now and experience
							luxury at its finest.
						</p>
						<button className="btn btn-primary rounded-none">
							Explore Now
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
