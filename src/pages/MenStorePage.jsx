import Intro from '../components/Intro';

// Images
import MenCollectionImage from '../assets/images/collection-1.jpg';

// Components
import CardsGroup from '../components/CardsGroup';

const MenStorePage = () => {
	return (
		<>
			<Intro
				title="Men's Collection"
				image={MenCollectionImage}
				description="Explore our exclusive collection of stylish and high-quqality
							fashion pieces. Embrace your uniques style with PawKlan's curated
							selection"
			/>
			<CardsGroup />
		</>
	);
};

export default MenStorePage;
