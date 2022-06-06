import trabajaNosotros from 'assets/images/trabaja-nosotros.jpg'
import news from 'assets/images/news.jpg'
import aliados from 'assets/images/aliados.jpg'
import nosotros from 'assets/images/nosotros.jpg'

export const slides = [
	{
		image: trabajaNosotros,
		alt: 'TRABAJA CON NOSOTROS',
		url: '/trabaja-con-nosotros',
		id: 'c01'
	},

	{
		image: news,
		alt: 'ULTIMAS NOTICIAS',
		url: '/ultimas-noticias',
		id: 'c02'
	},
	{
		image: nosotros,
		alt: 'NOSOTROS',
		url: '/nosotros',
		id: 'c03'
	},
	{
		image: aliados,
		alt: 'ALIADOS',
		url: '/aliados',
		id: 'c04'
	}
]

export const breakPoints = [
	{ width: 1, itemsToShow: 1, itemsToScroll: 1, transitionMs: 700 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
	{ width: 850, itemsToShow: 3, pagination: false },
	{ width: 1150, itemsToShow: 3, itemsToScroll: 1, pagination: false },
	{ width: 1450, itemsToShow: 3, pagination: false },
	{ width: 1750, itemsToShow: 3, pagination: false }
]
