import HeroSection from '../components/HeroSection';
import Intro from '../components/Intro';
import Collections from '../components/Collections';
import Gallery from '../components/Gallery';

// Images
import introImageHomePage from '../assets/images/hero-1.jpg';
import fashionTwo from '../assets/images/hero-2.jpg';

const HomePage = () => {
	return (
		<>
			<Intro
				title="Discover PawKlan's Latest Fashion Trends"
				image={introImageHomePage}
				description="Explore our exclusive collection of stylish and high-quqality
							fashion pieces. Embrace your uniques style with PawKlan's curated
							selection"
				buttonText="Shop Now"
			/>
			<HeroSection
				image={fashionTwo}
				title="Elevate Your Style With Exclusive Collections"
				description="Discover the latest trends in fashion and enjoy personalized
							recommendations tailored to your style. Shop now and experience
							luxury at its finest."
				btnText="Explore Now"
			/>
			<Collections />
			<Gallery />
		</>
	);
};

export default HomePage;
