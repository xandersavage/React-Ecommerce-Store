// import fashionOne from '../assets/svg/fashion-1.svg';

// Prop Types
import PropTypes from 'prop-types';

/**
 * HeroSection component renders a hero section with an optional description and additional content.
 *
 * @param {string} title - The title of the hero section.
 * @param {string} description - The description text of the hero section.
 * @param {string} image - The URL of the image to be displayed.
 * @param {React.Node} additionalContent - Any additional React nodes to be displayed.
 */

const HeroSection = ({
	image,
	title,
	description,
	btnText,
	additionalContent
}) => {
	return (
		<>
			<div className="hero min-h-screen w-full">
				<div
					className="hero-content flex flex-col sm:flex-row 
								lg:flex-row items-center justify-center 
								px-4 sm:px-8 lg:px-16"
				>
					<img
						src={image}
						className="max-w-full sm:max-w-sm rounded-lg shadow-2xl
									mb-6 overflow-hidden"
						alt="Fashion"
						data-aos="fade-left"
					/>
					<div className="text-left sm:ml-8 lg:ml-16">
						<h1
							data-aos="fade-right"
							className="text-5xl font-robotoMono font-bold mb-3"
						>
							{title}
						</h1>
						{description && (
							<p data-aos="fade-left" className="py-6 font-teko">
								{description}
							</p>
						)}
						{additionalContent}
						{btnText && (
							<button
								data-aos="fade-up"
								className="btn btn-primary rounded-none"
							>
								{btnText}
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

HeroSection.PropTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	btnText: PropTypes.string,
	additionalContent: PropTypes.node
};

HeroSection.defaultProps = {
	additionalContent: null,
	btnText: null
};

export default HeroSection;
