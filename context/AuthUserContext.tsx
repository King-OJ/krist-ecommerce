import useFirebaseAuth, { firebaseUser } from "@/lib/useFirebaseAuth";
import { createContext, useContext } from "react";

type initialState = {
  authUser: firebaseUser | null;
  loading: boolean;
};

const authUserContext = createContext<initialState>({
  authUser: null,
  loading: true,
});

export default function AuthUserProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export const useAuth = () => useContext(authUserContext);
