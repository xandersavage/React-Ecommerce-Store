// Components
import Intro from '../components/Intro';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';

// Images
import aboutImage from '../assets/images/gallery-1.jpg';
import fashionTwo from '../assets/images/hero-1.jpg';

// React Icons
import { FaCheckCircle } from 'react-icons/fa';

/**
 * Renders the About page with a hero section and additional content specific to the About page.
 */

const AboutPage = () => {
	const aboutContent = (
		<ul className="list-none space-y-2">
			<li className="flex items-center">
				<FaCheckCircle className="text-secondary-content text-2xl mr-2" />
				<p>Expert insights and market analysis to guide your investments.</p>
			</li>
			<li className="flex items-center">
				<FaCheckCircle className="text-secondary-content text-2xl mr-2" />
				<p>
					Comprehensive risk management strategies to safeguard your assets.
				</p>
			</li>
			<li className="flex items-center">
				<FaCheckCircle className="text-secondary-content text-2xl mr-2" />
				<p>User-friendly platform designed for traders of all levels.</p>
			</li>
		</ul>
	);
	return (
		<>
			<Intro title="About" image={aboutImage} />
			<HeroSection
				image={fashionTwo}
				title="Elevate Your Style With Exclusive Collections"
				description="Discover the latest trends in fashion and enjoy personalized
							recommendations tailored to your style. Shop now and experience
							luxury at its finest."
				additionalContent={aboutContent}
			/>
			<Carousel />
		</>
	);
};

export default AboutPage;
