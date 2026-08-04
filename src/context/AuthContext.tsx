"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../lib/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export type Role = 'admin' | 'escort' | 'client' | null;

interface User {
  email: string;
  role: Role;
  name: string;
  uid: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  register: (email: string, pass: string, name: string, role: Role) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Escuchar cambios de sesión en Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Obtener rol y nombre de Firestore
        const docRef = doc(db, 'users', firebaseUser.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email || '',
            role: userData.role as Role,
            name: userData.name || 'Usuario'
          });
        } else {
          // Fallback si no hay doc en Firestore
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email || '',
            role: 'client',
            name: 'Usuario'
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, pass: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      return true;
    } catch (error) {
      console.error("Error en login:", error);
      return false;
    }
  };

  const register = async (email: string, pass: string, name: string, role: Role) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const newUser = userCredential.user;
      
      // Guardar el perfil en Firestore
      await setDoc(doc(db, 'users', newUser.uid), {
        email: email,
        name: name,
        role: role,
        createdAt: new Date().toISOString()
      });
      
      return true;
    } catch (error) {
      console.error("Error en registro:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {!loading && children}
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
