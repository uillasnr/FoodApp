import React, { createContext, useState } from "react";
import { LogoutUser } from "../storage/storage.user";

const AuthContext = createContext({});

function AuthProvider(props) {
  const [user, setUser] = useState({});

  const logout = async () => {
    await LogoutUser();
    setUser({});
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
