import { createContext } from "react";

export const AuthContext = createContext<undefined>(undefined);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContext.Provider value={undefined}>{children}</AuthContext.Provider>
  );
};
