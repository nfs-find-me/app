import type { PostType } from './types';

export const welcomeImages: Array<PostType> = [
	{
		_id: '651d1b08e963f44c187b8046',
		userId: 'test',
		geolocation: {
			posX: 111.12,
			posY: -11.12,
			zip: 76100,
			address: 'address ici',
			country: 'France'
		},
		picture: {
			url: 'image_1.webp',
			thumbnail_url: 'image_1.webp'
		},
		view: [
			{
				userId: '651fce18a3800637f1cecebc',
				createdAt: new Date()
			},
			{
				userId: '651fce18a3800637f1cecebc',
				createdAt: new Date()
			},
			{
				userId: '651fce18a3800637f1cecebc',
				createdAt: new Date()
			},
			{
				userId: '651fce18a3800637f1cecebc',
				createdAt: new Date()
			}
		],
		like: [],
		verified: true,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		_id: '651d1b08e963f44c187b8047',
		userId: 'test',
		geolocation: {
			posX: 81.12,
			posY: -21.12,
			zip: 76100,
			address: 'address ici',
			country: 'France'
		},
		picture: {
			url: 'image_2.jpg',
			thumbnail_url: 'image_2.jpg'
		},
		view: [
			{
				userId: '651fce18a3800637f1cecebc',
				createdAt: new Date()
			}
		],
		like: [],
		verified: true,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		_id: '651d1b08e963f44c187b8048',
		userId: 'test',
		geolocation: {
			posX: 121.12,
			posY: -1.12,
			zip: 76100,
			address: 'address ici',
			country: 'France'
		},
		picture: {
			url: 'image_3.jpg',
			thumbnail_url: 'image_3.jpg'
		},
		view: [
			{
				userId: '651fce18a3800637f1cecebc',
				createdAt: new Date()
			},
			{
				userId: '651fce18a3800637f1cecebc',
				createdAt: new Date()
			},
			{
				userId: '651fce18a3800637f1cecebc',
				createdAt: new Date()
			}
		],
		like: [],
		verified: true,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		_id: '651d1b08e963f44c187b8049',
		userId: 'test',
		geolocation: {
			posX: 111.12,
			posY: -11.12,
			zip: 76100,
			address: 'address ici',
			country: 'France'
		},
		picture: {
			url: 'image_4.webp',
			thumbnail_url: 'image_4.webp'
		},
		view: [
			{
				userId: '651fce18a3800637f1cecebc',
				createdAt: new Date()
			}
		],
		like: [],
		verified: true,
		createdAt: new Date(),
		updatedAt: new Date()
	}
];
