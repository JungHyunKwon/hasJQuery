/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @since 2017-12-06
		 * @return {boolean}
		 */
		window.hasJQuery = function() {
			return typeof window.jQuery === 'function';
		};
	})();
}catch(e) {
	console.error(e);
}