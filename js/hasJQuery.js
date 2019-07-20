/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
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