chrome.storage.local.get(['enabled'], function(result) {
    if (result.enabled) {
    	chrome.storage.sync.get({environment: 'https://styleguide.dev.codacy.org'}, function(result) {
			var link = document.createElement("link");
			link.href = result.environment + "/codacy-styleguide/src/main/resources/META-INF/resources/webjars/codacy-styleguide/1.0.0/css/template.min.css";
			link.rel = "stylesheet";
			link.id = "codacy-styleguide";
			link.onload = function(){ document.querySelectorAll("link[href$=\'template.min.css\']")[1].remove(); };
			document.getElementsByTagName("head")[0].prepend(link);
  		});
	}
});
