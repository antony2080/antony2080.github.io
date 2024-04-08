const appId = import.meta.env.VITE_FACEBOOK_APP_ID;

function fbInit() {
  return new Promise(resolve => {
    // wait for facebook sdk to initialize before starting the vue app
    window.fbAsyncInit = function () {
      FB.init({
        appId: appId,
        cookie: true,
        xfbml: true,
        version: 'v19.0'
      });

      // auto authenticate with the api if already logged in with facebook
      FB.getLoginStatus(({ authResponse }) => {
        resolve(authResponse);
      });
    };

    // load facebook sdk script
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
}


const fbLogin = async () => {
  let result = await new Promise((resolve) => {
    FB.login(({ authResponse }) => {
      resolve(authResponse);
    }, { scope: 'email' });
  });
  return result;
};

const fbMe = async () => {
  let result = await new Promise((resolve) => {
    FB.api('/me', 'GET', { "fields": "id,name,email,picture" }, (response) => {
      resolve(response);
    });
  });
  return result;
};

const fbLogout = () => {
  FB.api('/me/permissions', 'delete', null, () => {
    FB.logout();
  });
};

export const fbService = {
  fbInit,
  fbLogin,
  fbLogout,
  fbMe
};