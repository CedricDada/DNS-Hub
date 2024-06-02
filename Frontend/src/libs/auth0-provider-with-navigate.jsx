import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { authentificationData } from "./data";

const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const domain = authentificationData.domain;
  const clientId = authentificationData.clientId;
  const redirectUri = authentificationData.redirect_uri;

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
export default Auth0ProviderWithNavigate;