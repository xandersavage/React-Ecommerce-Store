/* eslint-disable react/prop-types */
// Components
import Intro from '../components/Intro';
import CardsGroup from '../components/CardsGroup';

// Images
import WomenCollectionImage from '../assets/images/gallery-3.jpg';

// Men Clothes Data
import mensClothingItems from '../data/MensClothingItems';

// Women Clothes Data
import womensClothingItems from '../data/WomensClothingData';

const WomenStorePage = ({ category }) => {
	const data = category === 'Men' ? mensClothingItems : womensClothingItems;
	return (
		<>
			<Intro
				title="Women's Collection"
				image={WomenCollectionImage}
				description="Explore our exclusive collection of stylish and high-quqality
						fashion pieces. Embrace your uniques style with PawKlan's curated
						selection"
			/>
			<CardsGroup clothing={data} />
		</>
	);
};

export default WomenStorePage;
