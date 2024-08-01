/* eslint-disable react/prop-types */

const ClothingCard = ({ id, image, name, price, color, badge }) => {
	return (
		<div
			className="card glass group rounded-none shadow-xl 
                        relative overflow-hidden cursor-pointer
						h-96"
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
				<div className="flex">
					<h4 className="card-title underline text-primary text-sm font-robotoMono">
						{name}
					</h4>
					{badge && (
						<div className="badge badge-accent font-teko text-lg ml-2">
							{badge}
						</div>
					)}
				</div>
				<div
					className="badge font-robotoMono font-bold text-neutral badge-secondary"
					style={{
						width: '90px',
						height: '50px',
						backgroundColor: color,
						borderRadius: '4px'
					}}
				>
					{color}
				</div>
				<p className="text-2xl font-teko">${price}</p>
			</div>
		</div>
	);
};

export default ClothingCard;
