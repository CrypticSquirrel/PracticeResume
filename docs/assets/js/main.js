(function($) {
	var $body = $('body'),
		$titleBar = null,
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			lg:   ['1281px',  '1680px'],
		});

	// Header Panel.
		var $nav_a = $nav.find('a');
		$nav_a
			.addClass('scrolly')
			.on('click', function() {
				$nav_a.removeClass('active');

			$(this)
				.addClass('active')
				.addClass('active-locked');
			})
			
			.each(function() {
				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);
			// Scrollex.
				$section.scrollex({
					mode: 'middle',
					top: '5vh',
					bottom: '5vh',
					initialize: function() {
						$section.addClass('inactive');
					},
					enter: function() {
						$section.removeClass('inactive');

						if ($nav_a.filter('.active-locked').length == 0) {
							$nav_a.removeClass('active');
							$this.addClass('active');
						}

						else if ($this.hasClass('active-locked'))
							$this.removeClass('active-locked');
					}
				});
			});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {
				if (breakpoints.active('<=medium'))
					return $titleBar.height();
				return 0;
			}
		});

})(jQuery);