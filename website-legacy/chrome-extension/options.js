// Saves options to chrome.storage
function save_options() {
  var environment_url = document.getElementById('environment').value;
  chrome.storage.sync.set({environment: environment_url}, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value
  chrome.storage.sync.get({environment: 'https://styleguide.dev.codacy.org'}, function(result) {
    document.getElementById('environment').value = result.environment;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
