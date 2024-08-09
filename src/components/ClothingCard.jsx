/* eslint-disable react/prop-types */

const ClothingCard = ({
	id,
	image,
	name,
	price,
	color,
	badge,
	onCardClick
}) => {
	return (
		<>
			<div
				data-aos="bounce"
				className="card glass group rounded-none shadow-xl 
                        relative overflow-hidden cursor-pointer
						h-96"
				onClick={onCardClick}
			>
				<figure className="h-2/3">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover transform 
                                transition duration-300 group-hover:scale-110"
					/>
				</figure>
				<div className="card-body p-1.5 h-1/3">
					<div className="flex items-center justify-between">
						<h4 className="card-title underline text-accent-content text-sm font-robotoMono">
							{name}
						</h4>
						{badge && (
							<div className="badge h-auto ml-1 rounded badge-accent text-center font-teko text-lg">
								{badge}
							</div>
						)}
					</div>
					<div
						className="badge font-robotoMono font-bold text-neutral badge-secondary"
						style={{
							backgroundColor: color
						}}
					>
						{color}
					</div>
					<h4 className="text-xl font-teko">${price}</h4>
				</div>
			</div>
		</>
	);
};

export default ClothingCard;
