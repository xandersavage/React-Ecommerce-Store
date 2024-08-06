import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

// Images
import carouselOne from '../assets/images/hero-1.jpg';
import carouselTwo from '../assets/images/hero-2.jpg';
import carouselThree from '../assets/images/gallery-3.jpg';

const Carousel = () => {
	const carouselItems = [
		{
			title: 'Empower Your Crypto Portfolio',
			description:
				'Harness the expertise of top traders to maximize your investments. Our intuitive interfac ensure you stay ahead in the crypto market.',
			image: carouselOne
		},
		{
			title: 'Expert Insights and Market Analysis',
			description:
				'Benefit from strategies that have consistently delivered high returns. Get expert insights to guide your investments.',
			image: carouselTwo
		},
		{
			title: 'User-Friendly Platform',
			description:
				'Join our platform to copy trade with the best. Designed for traders of all levels, our platform is easy to navigate and use.',
			image: carouselThree
		}
	];

	return (
		<div className="py-12">
			<div className="container">
				<h2 className="text-4xl font-bold text-center mb-6">Why Choose Us</h2>
				<Swiper
					modules={[Autoplay, Pagination, EffectCoverflow]}
					spaceBetween={50}
					slidesPerView={1}
					pagination={{ clickable: true, dynamicBullets: true }}
					className="mySwiper"
					effect="coverflow"
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true
					}}
					autoplay={{ delay: 3000, disableOnInteraction: false }} // Ensure autoplay is properly configured
				>
					{carouselItems.map((item, index) => (
						<SwiperSlide key={index}>
							<div className="flex flex-col md:flex-row items-center mx-3 bg-neutral rounded-lg shadow-md">
								<img
									src={item.image}
									alt={item.title}
									className="w-full rounded-lg"
								/>
								<div className="md:ml-6 text-center mt-4 md:mt-0 prose">
									<h3 className="text-2xl font-bold">{item.title}</h3>
									<p className="mt-2">{item.description}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Carousel;
