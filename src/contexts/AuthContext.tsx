import React, { createContext, useState } from "react";

// Auth Context Type
export type AuthContextType = {
   isAuthenticated: boolean;
   user: any;
   login: () => void;
   logout: () => void;
};

// Provider Type
type AuthContextProvider = {
   children: React.ReactElement | React.ReactElement[];
};

const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider = ({ children }: AuthContextProvider) => {
   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
   const [user, setUser] = useState({} as any);

   const login = () => {
      setIsAuthenticated(true);
      //    TODO: add user data
   };

   const logout = () => {
      setIsAuthenticated(false);
      //   TODO: remove user data
   };

   return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
         {children}
      </AuthContext.Provider>
   );
};
