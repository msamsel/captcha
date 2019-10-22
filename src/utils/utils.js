export const categories = [
	'tree',
	'cat',
	'dog',
	'bird',
	'car',
	'train',
	'cow'
];

export function getRandomCategory( categoryToExclude = '' ) {
	const tempCategories = categories.filter( val => val !== categoryToExclude );

	return tempCategories[ getRandomInt( tempCategories.length ) ];
}

export function getInitialImages( { number, validCategory, invalidCategory } ) {
	const images = [];

	for ( let i = 0; i < number; i++ ) {
		if ( Math.random() < 0.5 ) {
			images.push( getSingleImage( validCategory ) );
		} else {
			images.push( getSingleImage( invalidCategory ) );
		}
	}

	return images;
}

export function getSingleImage( category ) {
	const id = getNextId();
	return {
		id,
		category,
		src: `https://loremflickr.com/100/100/${ category }?random=${ id }`
	};
}

export const getNextId = ( function() {
	let i = 0;
	return function() {
		return i++;
	};
} )();

function getRandomInt( max ) {
	max = Math.floor( max );
	return Math.floor( Math.random() * max );
}
