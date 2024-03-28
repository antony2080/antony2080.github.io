const appId = import.meta.env.VITE_FACEBOOK_APP_ID;

function initFacebookSdk() {
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
        if (authResponse) {
          console.log('[authResponse]:', JSON.stringify(authResponse));
        } else {
          resolve();
        }
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


const apiLogin = async () => {
  const { authResponse } = await new Promise(FB.login);
  return authResponse;
};

const apiMe = async () => {
  let result = await new Promise((resolve) => {
    FB.api('/me', function (res) {
      console.log(res);
      resolve(res);
    });
  });
  return result;
};

const apiLogout = () => {
  FB.api('/me/permissions', 'delete', null, () => {
    FB.logout();
  });
};

export {
  initFacebookSdk,
  apiLogin,
  apiLogout,
  apiMe
};