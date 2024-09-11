import { useEffect, useState } from "react";
import {
  Unsubscribe,
  User,
  onAuthStateChanged,
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
  signInWithEmailAndPassword as _signInWithEmailAndPassword,
  signOut as _signOut,
} from "firebase/auth";

import { auth } from "./firebase";

export type firebaseUser = {
  uid: string | null;
  email: string | null;
};

const formatAuthUser = (user: User) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<firebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  function handleAuthStateChanged(): Unsubscribe {
    return onAuthStateChanged(auth, function (user) {
      if (!user) {
        setLoading(false);
        console.log("no firebase user yet");

        return;
      }
      console.log(user);

      setLoading(true);

      var formattedUser = formatAuthUser(user);

      setAuthUser(formattedUser);

      setLoading(false);
    });
  }

  useEffect(() => {
    const unsubscribe = handleAuthStateChanged();
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
  };
}
