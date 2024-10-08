/* eslint-disable react/no-unescaped-entities */
import collectionMale from '../assets/images/collection-1.jpg';
import collectionFemale from '../assets/images/collection-2.jpg';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Collections = () => {
	return (
		<section className="pt-20 sm:pt-0 pb-20">
			<div className="container mx-auto px-4">
				<h1
					data-aos="fade-right"
					className="text-5xl font-bold text-center mb-8 "
				>
					Explore Our Collections
				</h1>
				<div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
					<div
						data-aos="zoom-in-right"
						className="group shadow-lg overflow-hidden card glass w-auto mx-5
                                    transform transition duration-300 hover:shadow-2xl
                                    hover:scale-105 rounded-none h-[41.5rem]"
					>
						<figure className="h-[39.5rem] overflow-hidden">
							<img
								className="transform transition duration-300
                                            group-hover:scale-110 w-full h-full object-cover"
								src={collectionMale}
								alt="car!"
							/>
						</figure>
						<div
							className="card-body border-l-4 border-b-4 
                                        border-neutral "
						>
							<h2 className="text-2xl font-semibold card-title">
								Men's Collection
							</h2>
							<p>
								Discover the latest trends and timeless classics for men. Shop
								now to find stylish apparel that fits your lifestyle
							</p>
							<div className="card-actions my-1 justify-end">
								<Link to="/men">
									<button className="btn bg-neutral rounded-none">
										<p className="text-neutral-content">Shop Men's</p>
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div
						data-aos="zoom-in-left"
						className="group shadow-lg overflow-hidden card glass w-auto mx-5
                                    transform transition duration-300 hover:shadow-2xl
                                    hover:scale-105 h-[41.5rem] rounded-none"
					>
						<figure className="h-[39.5rem]">
							<img
								className="w-full h-full object-cover transform transition duration-300
                                            group-hover:scale-110"
								src={collectionFemale}
								alt="car!"
							/>
						</figure>
						<div
							className="card-body border-l-4 border-b-4 
                                        border-neutral"
						>
							<h2 className="text-2xl font-semibold card-title">
								Women's Collection
							</h2>
							<p>
								Explore our stunning range of women's fashion. From elegant
								dresses to casual wear, find pieces that match your style.
							</p>
							<div className="card-actions my-1 justify-end">
								<Link to="/women">
									<button className="btn bg-neutral rounded-none">
										<p className="text-neutral-content">Shop Women's</p>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Collections;
