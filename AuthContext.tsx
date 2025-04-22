import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types/User';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Initialize user from localStorage if available
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Mock users data
  const users: User[] = [
    { id: 1, name: 'Admin User', email: 'admin@zayra.com', password: 'admin123', role: 'admin' },
    { id: 2, name: 'Regular User', email: 'user@example.com', password: 'user123', role: 'user' }
  ];

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API request
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          // Remove password from user object before storing in state
          const { password, ...safeUser } = user;
          setUser(safeUser as User);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500);
    });
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API request
    return new Promise((resolve) => {
      setTimeout(() => {
        // Check if email already exists
        const existingUser = users.find(u => u.email === email);
        if (existingUser) {
          resolve(false);
        } else {
          // Create new user (in a real app, this would be handled by the backend)
          const newUser: User = {
            id: users.length + 1,
            name,
            email,
            password,
            role: 'user'
          };
          
          // In a real app, you would add the user to the database
          // users.push(newUser); // This is just for demonstration
          
          // Remove password from user object before storing in state
          const { password: _, ...safeUser } = newUser;
          setUser(safeUser as User);
          resolve(true);
        }
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isAdmin,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};