import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const isLogedIn = !!token;

  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const userData = token ? JSON.parse(atob(token.split(".")[1])) : null; // Extract user data from token

  return (
    <AuthContext.Provider
      value={{ isLogedIn, logoutUser, storeTokenInLS, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
