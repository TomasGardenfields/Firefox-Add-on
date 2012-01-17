
String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, "");
}

var Addtosearchbar ={
	AddKeywords: function() {
		
		var keywords = [];
		var sel = window.content.getSelection();
		
		for (var i = 0; i < sel.rangeCount; i++) {
			var keyword = sel.getRangeAt(i).toString();
			keyword = keyword.replace(/^\s+|\s+$/g, "");
			keywords.push(keyword);
		}
		
		Application.console.log("keywords = " + keywords);
		
		var currentText = document.getElementById("searchbar").value;
		
		for ( i = 0; i < keywords.length ; i ++ ) {
			currentText = currentText + " " + keywords[i];
		}
		
		currentText = currentText.trim();
		
		document.getElementById("searchbar").value = currentText
		
		sel.removeAllRanges();
	},
};
