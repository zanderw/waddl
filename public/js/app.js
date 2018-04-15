var url = window.location.href;
url = url.replace(/^.*\/\/[^\/]+/, '');
$('ul.nav a[href="' + url + '"]').addClass('nav-active');
$('ul.mobile-nav-list a[href="' + url + '"]').addClass('nav-active');
console.log(url);

var styleurl = window.location.href;
styleurl = styleurl.replace(/^.*\/\/[^\/]+/, '');
$('.style-nav-block[href="' + styleurl + '"]').addClass('style-active');
console.log(styleurl);

var video = document.getElementsByTagName('video')[0];

video.onended = function(e) {
    $('video').css("display",'none');
};


