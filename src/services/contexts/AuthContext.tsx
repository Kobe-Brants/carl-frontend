import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../../types/auth/User.ts';

interface IAuthContext {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  logout: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setUser(user);
    } else {
      setUser({ email: 'kobe.brants@telenet.be' });
      // setUser(null);
      setLoading(false);
    }

    return () => {};
  }, []);

  useEffect(() => {
    setIsAdmin(true);
    setLoading(false);
  }, [user]);

  const logout = async () => {
    // await auth.signOut();
  };

  const signIn = async (email: string, password: string) => {
    console.log(email, password);
    // await signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin, logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const { user, loading, isAdmin, logout, signIn } = useContext(AuthContext);

  return {
    user,
    loading,
    isAdmin,
    logout,
    signIn,
  };
};

export { AuthContextProvider, AuthContext };
