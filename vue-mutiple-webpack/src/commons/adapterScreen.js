// 屏幕适配
let baseWidth = 1080;
let baseFontSize = 100;
let baseRem = baseWidth / baseFontSize;

export default function() {
	
	let doc = window.document, 
		root = doc.documentElement,
		currentW = 320, maxWidth = 640, minWidth = 320, timer,
		flexible = function() {
			currentW = root.getBoundingClientRect().width;
			currentW = currentW > maxWidth ? maxWidth : (currentW < minWidth ? minWidth : currentW);
			root.style.fontSize = currentW / baseRem + 'px';
		};

	window.addEventListener('resize', function(){
		if (timer) clearTimeout(timer);
		timer = setTimeout(function() { flexible() }, 0);
	}, false)

	flexible();
}