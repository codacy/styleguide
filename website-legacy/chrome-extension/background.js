chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({enabled: true});
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.local.get(['enabled'], function(result) {
    chrome.storage.local.set({enabled: !result.enabled});
  });
});
