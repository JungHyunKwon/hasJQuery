/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name 제이쿼리가 있는지 확인
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