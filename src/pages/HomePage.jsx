import HeroSection from '../components/HeroSection';
import Intro from '../components/Intro';
import Collections from '../components/Collections';
import Gallery from '../components/Gallery';

// Images
import introImageHomePage from '../assets/images/hero-1.jpg';

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
			<HeroSection />
			<Collections />
			<Gallery />
		</>
	);
};

export default HomePage;
