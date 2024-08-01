/* eslint-disable react/prop-types */
import Intro from '../components/Intro';

// Images
import MenCollectionImage from '../assets/images/collection-1.jpg';

// Components
import CardsGroup from '../components/CardsGroup';

// Men Clothes Data
import mensClothingItems from '../data/MensClothingItems';

// Women Clothes Data
import womensClothingItems from '../data/WomensClothingData';

const MenStorePage = ({ category }) => {
	const data = category === 'Men' ? mensClothingItems : womensClothingItems;
	return (
		<>
			<Intro
				title="Men's Collection"
				image={MenCollectionImage}
				description="Explore our exclusive collection of stylish and high-quqality
							fashion pieces. Embrace your uniques style with PawKlan's curated
							selection"
			/>
			<CardsGroup clothing={data} />
		</>
	);
};

export default MenStorePage;
