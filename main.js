// create a function to initiate all scripts
function init() {
	var elem = document.querySelector('.main-carousel');
	if (document.querySelector('.main-carousel')) {
		var flkty = new Flickity( elem, {
		  // options
		  cellAlign: 'left',
		  contain: true
		});

		// element argument can be a selector string
		//   for an individual element
		var flkty = new Flickity( '.main-carousel', {
		  // options
		});
	}
}		

const swup = new Swup()
// run function once new instance of swup is created
init();

swup.on('contentReplaced', init);