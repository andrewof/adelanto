import React, { createContext, useState } from "react";
import { setToken } from "../api/token";
import { useUser } from "../hooks";

export  const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
});

export function AuthProvaider({ children }) {
  const [auth, setAuth] = useState(undefined);

  const { getMe } = useUser();

  const login = async (token) => {
    setToken(token);
    const me = await getMe(token);
    setAuth({ token, me })
    console.log(me);
  }

  const valueContext = {
    auth,
    login,
    logout: () => console.log("Cerrando sesión"),
  }

  return (
    <AuthContext.Provider value={valueContext}>
      { children }
    </AuthContext.Provider>
  )
}