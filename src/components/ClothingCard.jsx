/* eslint-disable react/prop-types */

const ClothingCard = ({ id, image, name, price, color }) => {
	return (
		<div
			className="card glass group rounded-none shadow-xl 
                        relative overflow-hidden cursor-pointer m-4"
		>
			<figure>
				<img
					src={image}
					alt={name}
					className="w-full h-48 object-cover transform 
                                transition duration-300 group-hover:scale-110"
				/>
			</figure>
			<div className="card-body p-1.5">
				<h4 className="card-title underline text-primary text-md font-robotoMono">
					{name}
				</h4>
				<p className="text-md font-robotoMono bg-neutral p-1 w-24">{color}</p>
				<p className="text-2xl font-teko">${price}</p>
			</div>
		</div>
	);
};

export default ClothingCard;
