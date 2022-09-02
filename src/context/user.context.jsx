import { createContext, useState } from 'react';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); //temp

  const logout = () => {
    setCurrentUser(null);
  };

  const value = { currentUser, setCurrentUser, logout };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
