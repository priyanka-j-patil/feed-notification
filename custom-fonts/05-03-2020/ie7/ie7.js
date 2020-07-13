/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'notificationfeed\'">' + entity + '</span>' + html;
	}
	var icons = {
		'notificationfeed-reverse': '&#xe900;',
		'notificationfeed-date': '&#xe901;',
		'notificationfeed-refresh': '&#xe902;',
		'notificationfeed-group': '&#xe903;',
		'notificationfeed-logout': '&#xe904;',
		'notificationfeed-upload': '&#xe905;',
		'notificationfeed-arrowDown': '&#xe906;',
		'notificationfeed-search': '&#xe907;',
		'notificationfeed-logo': '&#xe908;',
		'notificationfeed-json': '&#xe909;',
		'notificationfeed-xml': '&#xe90a;',
		'notificationfeed-notification': '&#xe90b;',
		'notificationfeed-danger': '&#xe90c;',
		'notificationfeed-success': '&#xe90d;',
		'notificationfeed-unavailable': '&#xe90e;',
		'notificationfeed-copy': '&#xe90f;',
		'notificationfeed-cancel': '&#xe910;',
		'notificationfeed-happy': '&#xe911;',
		'notificationfeed-sad': '&#xe912;',
		'notificationfeed-arrowRight': '&#xe913;',
		'notificationfeed-key': '&#xe914;',
		'notificationfeed-user': '&#xe915;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/notificationfeed-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
