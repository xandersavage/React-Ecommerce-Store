/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

// Components
import ClothingCard from './ClothingCard';

const CardsGroup = ({ clothing }) => {
	return (
		<section className="py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
					{clothing.map((item) => (
						<ClothingCard
							key={item.id}
							id={item.id}
							image={item.image}
							name={item.name}
							price={item.price}
							color={item.color}
							badge={item.badge}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CardsGroup;
