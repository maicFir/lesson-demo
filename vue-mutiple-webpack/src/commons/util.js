let timer,
	msgTimer;

let keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

let preventDefault = function(e) {
  e = e || window.event;
  if (e.preventDefault) {
      e.preventDefault();
  }
  e.returnValue = false;  
}

let preventDefaultForScrollKeys = function(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

export function showTip(msg) {
	let tipElem, span;

	if (!msg) {
		return;
	}
	tipElem = document.body.querySelector('.J_msgTip');

	if (tipElem != null) {
		tipElem.querySelector('span').innerText = msg;
		tipElem.style.display = 'block';
	} else {
		tipElem = document.createElement('div');
		tipElem.className = 'msg-tip J_msgTip';
		span = document.createElement('span');
		span.innerText = msg;
		tipElem.appendChild(span);
		document.body.appendChild(tipElem);
	}

	setTimeout(function(){
		tipElem.style.display = 'none';
	}, 3000);
}

// string => object
export function parse() {
	return 'string' === typeof str ? JSON.parse(str) : str;
}

export function storage(...args) {
	let len = args.length;
	if (!len) {
		throw 'parameters can not be empty!';
	}
	if (typeof args[0] !== 'string') {
		throw 'parameter error!';
	}
	if (len === 1) {
		return localStorage.getItem && JSON.parse(localStorage.getItem(args[0]));
	}
	if (len >= 2) {
		localStorage.setItem(args[0], JSON.stringify(args[1]));
	}
}

export function disableScroll() {
	if (window.addEventListener) {// older FF
      	window.addEventListener('DOMMouseScroll', preventDefault, false);
    }
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove  = preventDefault; // mobile
	document.onkeydown  = preventDefaultForScrollKeys;
}

export function enableScroll() {
	if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
	}
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;
}

export function url2Params(url) {
	let seg, ret = {}, atag;
	atag = document.createElement('a');
	atag.href = url;
	seg = atag.search.replace(/^\?/, '').split('&');
	seg.forEach( p => {
		let s = p.split('=');
		ret[s[0]] = s[1];
	});
	return ret;
}

