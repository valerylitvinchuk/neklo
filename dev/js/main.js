$(document).ready(function() {
	$('.btn').on('click', function(e) {
		e.preventDefault();
	});

	$('.form__submit').on('click', function(e) {
		e.preventDefault();
	});

	$('.menu__link').on('click', function(e) {
			e.preventDefault();

			var $this = $(this),
			item = $this.closest('.menu__item'),
			list = $this.closest('.menu__list'),
			items = list.find('.menu__item'),
			content = item.find('.menu__list_drop'),
			otherContent = list.find('.menu__list_drop'),
			duration = 600;

			if(window.innerWidth <= 767) {

				if (!item.hasClass('active')) {
					items.removeClass('active');
					item.addClass('active');

					otherContent.stop(true, true).slideUp(duration);
					content.stop(true, true).slideDown(duration);
				} else {
					content.stop(true, true).slideUp(duration);
					item.removeClass('active');
				}
			} else {
				items.removeClass('active');
				$('.menu__list_drop').removeAttr('style');
			}

	});
	
});