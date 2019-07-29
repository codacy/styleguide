let GoogleAuth;

function getQueryParameter(param) {
  let params = new URLSearchParams(location.search);
  return params.get(param);
}

function loadAuth() {
  gapi.load("client:auth2", initClient);
}

function initClient() {
  gapi.client
    .init({
      clientId: "170551589177-80828028farb3dbecq8rnrnvveif5gk8.apps.googleusercontent.com",
      scope: "profile email",
      cookiepolicy: "single_host_origin"
    })
    .then(function() {
      GoogleAuth = gapi.auth2.getAuthInstance();
      const forbidden = getQueryParameter("forbidden");
      if (forbidden != null) {
        toggleElement("forbidden", true);
      } else {
        toggleElement("signin", true);
        renderButton();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function renderButton() {
  gapi.signin2.render("googleSignInButton", {
    scope: "profile email",
    prompt: "select_account",
    width: 240,
    height: 50,
    longtitle: true,
    theme: "dark",
    onsuccess: signIn,
    onfailure: () => {}
  });
}

function signIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId());
  console.log("Full Name: " + profile.getName());
  console.log("Given Name: " + profile.getGivenName());
  console.log("Family Name: " + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  const auth_rsp = googleUser.getAuthResponse();
  const id_token = auth_rsp.id_token;
  const expires_in = auth_rsp.expires_in;

  document.cookie = `id_token=${id_token}; Max-Age=${expires_in}`;
  const redirect_url = getQueryParameter("redirect_url") || "index.html";
  window.location.href = redirect_url;
}

function signOut() {
  GoogleAuth.disconnect();
  return GoogleAuth.signOut()
    .then(() => {
      deleteAllCookies();
      console.log("User signed out.");
      window.location = window.location.pathname;
    })
    .catch((err) => {
      deleteAllCookies();
      console.log("Error while user signing out.");
    });
}

function toggleElement(name, toggle) {
  const btn = document.getElementById(name);
  btn.style.visibility = toggle ? "visible" : "hidden";
  btn.style.display = toggle ? "block" : "none";
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var spcook = cookies[i].split("=");
    document.cookie = spcook[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC;";
  }
}
