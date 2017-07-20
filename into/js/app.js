!(function(win, doc) {
	function setFontSize() {
		// 获取window 宽度
		var winWidth = window.innerWidth;
		doc.documentElement.style.fontSize = (winWidth / 640) * 100 + 'px';
		// 640宽度以上进行限制 需要css进行配合
		// var size = (winWidth / 640) * 100;
		// doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px';
	}

	var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';

	var timer = null;

	win.addEventListener(evt, function() {
		clearTimeout(timer);

		timer = setTimeout(setFontSize, 100);
	}, false);

	win.addEventListener("pageshow", function(e) {
		if(e.persisted) {
			clearTimeout(timer);

			timer = setTimeout(setFontSize, 100);
		}
	}, false);

	// 初始化
	setFontSize();

}(window, document));