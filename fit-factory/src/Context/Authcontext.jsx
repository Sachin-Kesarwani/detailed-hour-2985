import { createContext, useState } from "react";

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  let [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <authContext.Provider value={{ isAuth }}>{children}</authContext.Provider>
    </>
  );
}
