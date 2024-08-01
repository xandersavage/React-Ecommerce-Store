// src/data/WomensClothingItems.js

// Images
import redDress from '../assets/images/womencollection-1.jpg';
import blackBlouse from '../assets/images/womenCollection-2.jpg';
import blueJeans from '../assets/images/womenCollection3.jpg';
import tshirt from '../assets/images/womenCollection-4.jpg';
import skirt from '../assets/images/womenCollection-5.jpg';
import gown from '../assets/images/womenCollection-6.jpg';

const womensClothingItems = [
	{
		id: 1,
		image: redDress,
		name: 'Elegant Red Dress',
		price: 120,
		color: 'Red',
		badge: 'BEST SELLER'
	},
	{
		id: 2,
		image: blackBlouse,
		name: 'Stylish Black Blouse',
		price: 75,
		color: 'Black',
		badge: 'BEST SELLER'
	},
	{
		id: 3,
		image: blueJeans,
		name: 'Classic Blue Jeans',
		price: 50,
		color: 'Blue'
	},
	{
		id: 4,
		image: tshirt,
		name: 'Casual White Shirt',
		price: 40,
		color: 'White',
		badge: 'NEW'
	},
	{
		id: 5,
		image: skirt,
		name: 'Trendy Brown Skirt',
		price: 60,
		color: 'Brown'
	},
	{
		id: 6,
		image: gown,
		name: 'Elegant Black Gown',
		price: 150,
		color: 'Black'
	}
];

export default womensClothingItems;
