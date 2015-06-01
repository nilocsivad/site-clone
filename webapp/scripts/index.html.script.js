/**
 * 
 */

var LONG_DELAY_TIME = 1500;

var isProcessing = false;
var auto_scroll_timer = null;
var isSetAutoScroll = false;
var currentImgIndex = -1;

window.onload = function() {
	var tags_li = document.getElementById("scroll-img-point").getElementsByTagName("li");
	for ( var i = 0, l = tags_li.length; l > i; ++i ) {
		tags_li[i].getElementsByTagName("a")[0].setAttribute("pointIndex", i);
	}
	window.setTimeout(function() {
		tags_li[0].getElementsByTagName("a")[0].setAttribute("class", "active");
		set_img_src( 0 );
	}, 50);
	
	if (!isSetAutoScroll) {
		auto_show( true );
	}
};

function show_img( tag_a ) {
	var idx = tag_a.getAttribute("pointIndex");
	show_img_at( idx );
	
	auto_show( false );
}

function set_img_src( index ) {
	var tags_li = document.getElementById("scroll-img-ul").getElementsByTagName("li");
	if ( index < tags_li.length ) {
		var img_li = tags_li[index];
		var img = img_li.getElementsByTagName("a")[0].getElementsByTagName("img")[0];
		var src = img.getAttribute("data-src");
		if ( img.getAttribute("src") == "" ) {
			img.setAttribute("src", src);
		}
		img_li.style.display = "block";
		
		window.setTimeout(function() {
			set_img_src( index + 1 ); // ** cache the next image
		}, 100);
	}
}

function to_auto_show() {
	auto_scroll_timer = window.setInterval(function() {
		show_img_at( currentImgIndex++ );
	}, LONG_DELAY_TIME);
	isSetAutoScroll = true;
}

function auto_show( show ) {
	if ( show ) {
		if ( !isSetAutoScroll ) {
			to_auto_show();
		}
	} else {
		if ( isSetAutoScroll ) {
			window.clearInterval(auto_scroll_timer);
			isSetAutoScroll = false;
		}
	}
}

function show_img_at( index ) {
	
	set_img_src( index );
	currentImgIndex = index;
	
	var tags_li = document.getElementById("scroll-img-ul").getElementsByTagName("li");
	for ( var i = 0, l = tags_li.length; l > i; ++i ) {
		tags_li[i].style.display = "none";
	}
	if ( index < tags_li.length )
		tags_li[index].style.display = "block";
	
	if ( currentImgIndex < tags_li.length - 1 ) {
		currentImgIndex++;
	} else {
		currentImgIndex = 0;
	}
	
	tags_li = document.getElementById("scroll-img-point").getElementsByTagName("li");
	for ( var i = 0, l = tags_li.length; l > i; ++i ) {
		tags_li[i].getElementsByTagName("a")[0].setAttribute("class", "");
	}
	if ( index < tags_li.length ) 
		tags_li[index].getElementsByTagName("a")[0].setAttribute("class", "active");
}
