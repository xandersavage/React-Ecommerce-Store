/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

// React
import { useState } from 'react';

// Components
import ClothingCard from './ClothingCard';

// Icons
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';

const CardsGroup = ({ clothing }) => {
	const [selectedItem, setSelectedItem] = useState(null);
	const [selectedSize, setSelectedSize] = useState('');
	const [selectedQuantity, setSelectedQuantity] = useState(1);

	// Function to open the modal with the selected item data
	const handleCardClick = (item) => {
		setSelectedItem(item);
		setSelectedSize(''); // Reset the selected size when a new item is clicked
		setSelectedQuantity(1); // Reset the quantity to 1
		document.getElementById('clothing_modal').showModal();
		// console.log('Items are: ', selectedItem);
	};

	const handleAddToCart = () => {
		toast.success('Item added to cart!');
		// Close the modal
		document.getElementById('clothing_modal').close();
	};

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
							onCardClick={() => handleCardClick(item)}
						/>
					))}
				</div>
			</div>

			{/* Modal */}
			<dialog
				id="clothing_modal"
				className="modal modal-bottom sm:modal-full sm:modal-middle"
				style={{
					height: '100vh', // Full height of the screen
					maxHeight: '100vh', // Prevent the modal from exceeding the screen height
					padding: '0' // Remove padding to make full use of the screen space
				}}
			>
				<div
					className="modal-box"
					style={{
						height: '100vh', // Full height of the screen for modal content
						maxHeight: '100vh', // Ensure content doesn't exceed screen height
						padding: '1rem', // Adjust padding for content inside the modal
						overflowY: 'auto' // Enable scrolling if content is too long
					}}
				>
					{selectedItem ? (
						<>
							<h3 className="font-bold text-lg">{selectedItem.name}</h3>
							<figure className="mt-4 mb-4">
								<img
									src={selectedItem.image}
									alt={selectedItem.name}
									className="w-full h-64 object-cover" // Fixed image height
								/>
							</figure>
							<p className="mb-4 text-sm text-gray-600">
								{selectedItem.description || 'No description available.'}
							</p>
							<div className="mb-4">
								<span
									className="badge font-robotoMono font-bold text-neutral badge-secondary"
									style={{ backgroundColor: selectedItem.color }}
								>
									{selectedItem.color}
								</span>
							</div>
							<p className="text-2xl font-teko">${selectedItem.price}</p>

							{/* Size and Quantity Selection */}
							<div className="my-4 flex gap-4">
								<select
									className="select select-bordered w-full max-w-xs"
									value={selectedSize}
									onChange={(e) => setSelectedSize(e.target.value)}
								>
									<option disabled value="">
										Select Size
									</option>
									<option value="S">Small</option>
									<option value="M">Medium</option>
									<option value="L">Large</option>
									<option value="XL">Extra Large</option>
								</select>

								<select
									className="select select-bordered w-full max-w-xs"
									value={selectedQuantity}
									onChange={(e) => setSelectedQuantity(e.target.value)}
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>

							{/* Add to Cart Button */}
							<button
								onClick={handleAddToCart}
								className="btn btn-primary w-full flex items-center justify-center gap-2"
							>
								<FaShoppingCart className="text-lg" />
								{/* Shopping cart icon */}
								Add to Cart
							</button>
						</>
					) : (
						<p>No item selected</p>
					)}
					<div className="modal-action">
						<form method="dialog">
							<button className="btn">Close</button>
						</form>
					</div>
				</div>
			</dialog>
		</section>
	);
};

export default CardsGroup;
