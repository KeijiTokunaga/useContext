import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextProps {
  id: string;
  password: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <AuthContext.Provider value={{ id, password, setId, setPassword }}>
      {children}
    </AuthContext.Provider>
  );
};
