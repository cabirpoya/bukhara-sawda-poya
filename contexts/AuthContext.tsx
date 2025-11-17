import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { auth } from '../firebase/config';
import { 
    User, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
    UserCredential,
    setPersistence,
    browserSessionPersistence,
    browserLocalPersistence
} from 'firebase/auth';

interface AuthContextType {
    currentUser: User | null;
    loading: boolean;
    login: (email: string, password: string, rememberMe?: boolean) => Promise<UserCredential>;
    signup: (email: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
    resendVerificationEmail: () => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    
    const login = (email: string, password: string, rememberMe: boolean = false): Promise<UserCredential> => {
        const persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;
        return setPersistence(auth, persistence).then(() => {
            return signInWithEmailAndPassword(auth, email, password);
        });
    };

    const signup = async (email: string, password: string): Promise<UserCredential> => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCredential.user);
        return userCredential;
    };

    const logout = () => {
        return signOut(auth);
    };

    const resendVerificationEmail = async () => {
        if (auth.currentUser) {
            await sendEmailVerification(auth.currentUser);
        } else {
            throw new Error("No user is currently signed in.");
        }
    };

    const forgotPassword = (email: string) => {
        return sendPasswordResetEmail(auth, email);
    };


    const value: AuthContextType = {
        currentUser,
        loading,
        login,
        signup,
        logout,
        resendVerificationEmail,
        forgotPassword
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};