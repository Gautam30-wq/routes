// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // 1. Initialize state from localStorage if it exists
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("app_user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (username, password) => {
        if (username.trim() && password.trim()) {
            const userData = { username };
            // 2. Persist data in localStorage
            localStorage.setItem("app_user", JSON.stringify(userData));
            setUser(userData);
            return true;
        }
        return false;
    };

    const logout = () => {
        // 3. Clean up localStorage on logout
        localStorage.removeItem("app_user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
