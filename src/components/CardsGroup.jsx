/* eslint-disable react/jsx-key */

// Components
import ClothingCard from './ClothingCard';

// Clothes Data
import mensClothingItems from '../data/MensClothingItems';

const CardsGroup = () => {
	return (
		<section className="py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
					{mensClothingItems.map((item) => (
						<ClothingCard
							key={item.id}
							id={item.id}
							image={item.image}
							name={item.name}
							price={item.price}
							color={item.color}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CardsGroup;
