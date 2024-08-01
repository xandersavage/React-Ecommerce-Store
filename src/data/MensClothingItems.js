// src/data/mensClothingItems.js

// Images
import cap from '../assets/images/menCollection-1.jpg';
import hoodie from '../assets/images/menCollection-2.jpg';
import sneaker from '../assets/images/menCollection-3.jpg';
import jeans from '../assets/images/menCollection-4.jpg';
import tshirt from '../assets/images/menCollection-5.jpg';
import jacket from '../assets/images/menCollection-6.jpg';

const mensClothingItems = [
	{
		id: 1,
		image: jacket,
		name: 'Stylish Jacket',
		price: 150,
		color: 'Black'
	},
	{
		id: 2,
		image: tshirt,
		name: 'Classic T-Shirt',
		price: 30,
		color: 'White'
	},
	{
		id: 3,
		image: jeans,
		name: 'Denim Jeans',
		price: 70,
		color: 'Black',
		badge: 'NEW'
	},
	{
		id: 4,
		image: sneaker,
		name: 'Casual Sneakers',
		price: 80,
		color: 'White',
		badge: 'BEST SELLER'
	},
	{
		id: 5,
		image: hoodie,
		name: 'Comfortable Hoodie',
		price: 60,
		color: 'Gray'
	},
	{
		id: 6,
		image: cap,
		name: 'Baseball Cap',
		price: 25,
		color: 'Black',
		badge: 'LIMITED EDITION'
	}
];

export default mensClothingItems;
