
String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, "");
}

splitKeywords = function() {
	var keywords = [];
	
	var sel = window.content.getSelection();
	
	for (var i = 0; i < sel.rangeCount; i++) {
		var keyword = sel.getRangeAt(i).toString();
		keyword = keyword.replace(/^\s+|\s+$/g, "");
		keywords.push(keyword);
	}
	
	Application.console.log("splitKeywords()/keywords = " + keywords);
	
	return keywords;
}

var Addtosearchbar = {
	
	AddKeywords : function() {
		
//		// 選択文字を抽出
//		var keywords = [];
//		var sel = window.content.getSelection();
//		
//		for (var i = 0; i < sel.rangeCount; i++) {
//			var keyword = sel.getRangeAt(i).toString();
//			keyword = keyword.replace(/^\s+|\s+$/g, "");
//			keywords.push(keyword);
//		}
//		
//		Application.console.log("keywords = " + keywords);
//
		var keywords = splitKeywords();
		
		// 選択文字をスペースごとに区切って連結
		var currentText = document.getElementById("searchbar").value;
		
		for ( i = 0; i < keywords.length ; i ++ ) {
			currentText = currentText + " " + keywords[i];
		}
		
		// 両端のスペースを削除
		currentText = currentText.trim();
		
		document.getElementById("searchbar").value = currentText
		
		window.content.getSelection().removeAllRanges();
	},


	doSearchKeywordsEow : function() {
		
		var keywords = splitKeywords();
		
		// 選択文字をスペースごとに区切って連結
		//var currentText = document.getElementById("eow-toolbaritem-search").value;
		var currentText = "";
		
		for ( i = 0; i < keywords.length ; i ++ ) {
			currentText = currentText + " " + keywords[i];
		}
		
		// 両端のスペースを削除
		currentText = currentText.trim();
		
		document.getElementById("eow-toolbaritem-search").value = currentText;
		
		document.getElementById("eow-toolbaritem-search").onTextEntered();
		
		window.content.getSelection().removeAllRanges();
	},
}
