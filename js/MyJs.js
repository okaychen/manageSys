new function() {
	dom = [];
	dom.isReady = false;
	dom.isFunction = function(obj) {
		return Object.prototype.toString.call(obj) === "[object Function]";
	};
	dom.Ready = function(fn) {
		dom.initReady();
		if(dom.isFunction(fn)) {
			if(dom.isReady) {
				fn();
			} else {
				dom.push(fn);
			}
		}
	};
	dom.fireReady = function() {
		if(dom.isReady) return;
		dom.isReady = true;
		for(var i = 0, n = dom.length; i < n; i++) {
			var fn = dom[i];
			fn();
		}
		dom.length = 0;
	};
	dom.initReady = function() {
		if(document.addEventListener) {
			document.addEventListener("DOMContentLoaded", function() {
				document.removeEventListener("DOMContentLoaded", arguments.callee, false);
				dom.fireReady();
			}, false);
		} else {
			if(document.getElementById) {
				document.write("<script id=\"ie-domReady\" defer='defer' src=\"//:\"><\/script>");
				document.getElementById("ie-domReady").onreadystatechange = function() {
					if(this.readyState === "complete") {
						dom.fireReady();
						this.onreadystatechange = null;
						this.parentNode.removeChild(this)
					}
				};
			}
		}
	}
};
dom.Ready(function() {
	(function fileFun() {
		//		var file = document.getElementById('file');
		//		var showFileName = document.getElementById('showFileName');
		//		var fileErrorTip = document.getElementById('fileErrorTip');
		//		file.addEventListener('change', function() {
		//			var filePath = this.value;
		//			if(filePath.indexOf('jpg') !== -1 || filePath.indexOf('png') !== -1) {
		//				fileErrorTip.innerHTML = '';
		//				var arr = filePath.split('\\');
		//				showFileName.innerHTML = arr[arr.length - 1];
		//			} else {
		//				showFileName.innerHTML = '';
		//				fileErrorTip.innerHTML = '上传文件不为jpg或者png格式'
		//			}
		//		})
	}());
});
