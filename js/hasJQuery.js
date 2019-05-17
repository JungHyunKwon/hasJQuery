/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name hasJquery
		 * @since 2017-12-06
		 * @return {boolean}
		 */
		window.hasJquery = function() {
			return typeof window.jQuery === 'function';
		};
	})();
}catch(e) {
	console.error(e);
}