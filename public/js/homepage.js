var url = window.location.href;
url = url.replace(/^.*\/\/[^\/]+/, '');
$('ul.nav a[href="' + url + '"]').addClass('nav-active');
$('ul.mobile-nav-list a[href="' + url + '"]').addClass('nav-active');
console.log(url);

var styleurl = window.location.href;
styleurl = styleurl.replace(/^.*\/\/[^\/]+/, '');
$('.side-nav ul li a[href="' + styleurl + '"]').addClass('style-active');
console.log(styleurl);

var stylesuburl = window.location.href;
stylesuburl = stylesuburl.replace(/^.*\/\/[^\/]+/, '');
$('.sub-hero-nav a[href="' + stylesuburl + '"]').addClass('active-sub');
console.log(stylesuburl);

