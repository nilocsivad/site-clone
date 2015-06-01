/**
 * 
 */

function hrefCallback(item) {
	var href = item.getAttribute( "href" );
	var time = ( new Date() ).getTime();
	if ( href.indexOf( "?" ) > 0 ) {
		href = href + "&t=" + time;
	} else {
		href = href + "?t=" + time;
	}
	item.setAttribute( "href", href );
}
