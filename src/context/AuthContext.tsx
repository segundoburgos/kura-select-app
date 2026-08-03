"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Role = 'admin' | 'escort' | 'client' | null;

interface User {
  email: string;
  role: Role;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load from local storage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('mockUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, pass: string) => {
    // Simulando petición al servidor
    await new Promise(resolve => setTimeout(resolve, 500));

    let loggedInUser: User | null = null;

    if (email === 'SBURGOS' && pass === 'Natura@20') {
      loggedInUser = { email, role: 'admin', name: 'S. Burgos (Admin)' };
    } else if (email === 'yumi@vip.com' && pass === '123456') {
      loggedInUser = { email, role: 'escort', name: 'Yumi VIP' };
    } else if (email === 'cliente@test.com' && pass === '123456') {
      loggedInUser = { email, role: 'client', name: 'Cliente Premium' };
    }

    if (loggedInUser) {
      setUser(loggedInUser);
      localStorage.setItem('mockUser', JSON.stringify(loggedInUser));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mockUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
