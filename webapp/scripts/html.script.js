/**
 * 
 */

var HEADER_H = 70, FOOTER_H = 30; // ** 头部/底部 高度常量
var EMPTY_H = 10; // ** 空白 p 标签高度

//function reset() {
//	
//}
//window.onload = reset;
//window.onresize = function() {
//	window.setTimeout( reset, 100 );
//};

//返回浏览器输出的宽高
function getBrowserHeight() { 
	var intH = 0; 
	var intW = 0; 
	document.documentElement.clientHeight>document.documentElement.scrollHeight ? intH = document.documentElement.clientHeight : intH = document.documentElement.scrollHeight;
	document.documentElement.clientWidth>document.documentElement.scrollWidth ? intW = document.documentElement.clientWidth : intW = document.documentElement.scrollWidth;
	return { width: parseInt(intW), height: parseInt(intH) }; 
} 
