/* eslint-disable react/jsx-key */
import galleryImageOne from '../assets/images/gallery-1.jpg';
import galleryImageTwo from '../assets/images/gallery-2.jpg';
import galleryImageThree from '../assets/images/gallery-3.jpg';
import galleryImageFour from '../assets/images/gallery-4.jpg';
import galleryImageFive from '../assets/images/gallery-5.jpg';
import galleryImageSix from '../assets/images/gallery-6.jpg';

const Gallery = () => {
	const images = [
		galleryImageOne,
		galleryImageTwo,
		galleryImageThree,
		galleryImageFour,
		galleryImageFive,
		galleryImageSix
	];

	return (
		<section className="py-12">
			<div className="container mx-auto px-4">
				<h1 className="text-5xl font-bold text-center mb-8">OUR GALLERY</h1>
				<div
					data-aos="pulse"
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
				>
					{images.map((image, index) => (
						<div className="group relative overflow-hidden rounded-lg">
							<img
								src={image}
								alt={`Gallery ${index + 1}`}
								className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-neutral bg-opacity-30 group-hover:bg-opacity-50 transition duration-300"></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
