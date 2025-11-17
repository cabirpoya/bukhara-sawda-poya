import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { SpinnerIcon } from './icons/AIIcons';
import { LogoIcon, EmailIcon, PasswordIcon, UserIcon } from './icons/AuthIcons';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type AuthView = 'login' | 'signup' | 'forgotPassword' | 'resetPassword' | 'verificationSent' | 'resetSent';

interface AuthInputProps {
    id: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    Icon: React.FC<{ className?: string }>;
    required?: boolean;
    autoComplete?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({ id, type, value, onChange, placeholder, Icon, required = true, autoComplete }) => (
    <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
        </span>
        <input
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
            className="w-full pl-11 pr-4 py-3 bg-cream-white/50 dark:bg-deep-navy/50 border border-desert-gold/30 rounded-lg text-deep-navy dark:text-cream-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-desert-gold transition-all"
        />
    </div>
);


const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const [view, setView] = useState<AuthView>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [rememberMe, setRememberMe] = useState(true);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [authEmail, setAuthEmail] = useState('');
    
    const { login, signup, forgotPassword } = useAuth();
    const { language } = useLanguage();
    const t = translations[language].auth;

    useEffect(() => {
        if (!isOpen) {
            // Reset form state after closing animation
            const timer = setTimeout(() => {
                setView('login');
                setEmail('');
                setPassword('');
                setRepeatPassword('');
                setFullName('');
                setError('');
                setLoading(false);
                setAuthEmail('');
                setRememberMe(true);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleAuthAction = async (action: () => Promise<any>, onSuccess: () => void) => {
        setError('');
        setLoading(true);
        try {
            await action();
            onSuccess();
        } catch (err: any) {
            // Firebase error mapping
            switch (err.code) {
                case 'auth/wrong-password':
                case 'auth/user-not-found':
                case 'auth/invalid-credential':
                    setError(t.errors.incorrect);
                    break;
                case 'auth/email-already-in-use':
                    setError(t.errors.exists);
                    break;
                case 'auth/weak-password':
                    setError('Password should be at least 6 characters.');
                    break;
                default:
                    setError(err.message || 'An unexpected error occurred.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        handleAuthAction(() => login(email, password, rememberMe), onClose);
    };

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            setError(t.errors.mismatch);
            return;
        }
        handleAuthAction(() => signup(email, password), () => {
            setAuthEmail(email);
            setView('verificationSent');
        });
    };
    
    const handleForgotPassword = (e: React.FormEvent) => {
        e.preventDefault();
        handleAuthAction(() => forgotPassword(email), () => {
            setAuthEmail(email);
            setView('resetSent');
        });
    };

    const handleResetPassword = (e: React.FormEvent) => {
        e.preventDefault();
        // This is a placeholder. A real implementation requires a token from the password reset email.
        alert("Password has been updated! (UI Demo)");
        onClose();
    };

    const renderContent = () => {
        switch(view) {
            case 'login':
                return (
                    <>
                        <h2 className="text-2xl font-bold text-center text-deep-navy dark:text-cream-white">{t.loginTitle}</h2>
                        <form onSubmit={handleLogin} className="mt-8 space-y-6">
                            <AuthInput id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.email} Icon={EmailIcon} autoComplete="email" />
                            <AuthInput id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t.password} Icon={PasswordIcon} autoComplete="current-password" />
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="h-4 w-4 rounded border-desert-gold/50 text-desert-gold focus:ring-desert-gold bg-cream-white/50 dark:bg-deep-navy/50"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-gray-700 dark:text-gray-300">
                                        {t.rememberMe}
                                    </label>
                                </div>
                                <button type="button" onClick={() => setView('forgotPassword')} className="font-medium text-deep-navy/80 dark:text-cream-white/80 hover:text-desert-gold dark:hover:text-desert-gold">{t.forgotPassword}</button>
                            </div>
                            <button type="submit" disabled={loading} className="w-full flex justify-center items-center py-3 px-4 rounded-lg font-semibold text-deep-navy bg-desert-gold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-desert-gold disabled:opacity-75 disabled:cursor-wait transition-all">
                                {loading ? <SpinnerIcon /> : t.loginButton}
                            </button>
                            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                                {t.switchToSignUp}{' '}
                                <button type="button" onClick={() => setView('signup')} className="font-semibold text-deep-navy dark:text-cream-white hover:text-desert-gold dark:hover:text-desert-gold">
                                    {t.signUp}
                                </button>
                            </p>
                        </form>
                    </>
                );
            case 'signup':
                return (
                    <>
                        <h2 className="text-2xl font-bold text-center text-deep-navy dark:text-cream-white">{t.signUpTitle}</h2>
                        <form onSubmit={handleSignup} className="mt-8 space-y-4">
                             <AuthInput id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" Icon={UserIcon} autoComplete="name" />
                            <AuthInput id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.email} Icon={EmailIcon} autoComplete="email" />
                            <AuthInput id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t.password} Icon={PasswordIcon} autoComplete="new-password" />
                            <AuthInput id="repeatPassword" type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} placeholder={t.repeatPassword} Icon={PasswordIcon} autoComplete="new-password" />
                            <button type="submit" disabled={loading} className="w-full flex justify-center items-center py-3 px-4 rounded-lg font-semibold text-deep-navy bg-desert-gold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-desert-gold disabled:opacity-75 disabled:cursor-wait transition-all !mt-6">
                                {loading ? <SpinnerIcon /> : t.signUpButton}
                            </button>
                             <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                                {t.switchToLogin}{' '}
                                <button type="button" onClick={() => setView('login')} className="font-semibold text-deep-navy dark:text-cream-white hover:text-desert-gold dark:hover:text-desert-gold">
                                    {t.login}
                                </button>
                            </p>
                        </form>
                    </>
                );
            case 'forgotPassword':
                return (
                     <>
                        <h2 className="text-2xl font-bold text-center text-deep-navy dark:text-cream-white">{t.forgotPasswordTitle}</h2>
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">{t.forgotPasswordPrompt}</p>
                        <form onSubmit={handleForgotPassword} className="mt-8 space-y-6">
                            <AuthInput id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.email} Icon={EmailIcon} autoComplete="email" />
                            <button type="submit" disabled={loading} className="w-full flex justify-center items-center py-3 px-4 rounded-lg font-semibold text-deep-navy bg-desert-gold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-desert-gold disabled:opacity-75 disabled:cursor-wait transition-all">
                                {loading ? <SpinnerIcon /> : t.sendResetLinkButton}
                            </button>
                             <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                                {t.rememberedPassword}{' '}
                                <button type="button" onClick={() => setView('login')} className="font-semibold text-deep-navy dark:text-cream-white hover:text-desert-gold dark:hover:text-desert-gold">
                                    {t.login}
                                </button>
                            </p>
                        </form>
                    </>
                );
            case 'resetPassword':
                 return (
                     <>
                        <h2 className="text-2xl font-bold text-center text-deep-navy dark:text-cream-white">{t.resetPasswordTitle}</h2>
                        <form onSubmit={handleResetPassword} className="mt-8 space-y-4">
                            <AuthInput id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t.newPassword} Icon={PasswordIcon} autoComplete="new-password" />
                            <AuthInput id="repeatPassword" type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} placeholder={t.confirmNewPassword} Icon={PasswordIcon} autoComplete="new-password" />
                            <button type="submit" disabled={loading} className="w-full flex justify-center items-center py-3 px-4 rounded-lg font-semibold text-deep-navy bg-desert-gold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-desert-gold disabled:opacity-75 disabled:cursor-wait transition-all !mt-6">
                                {loading ? <SpinnerIcon /> : t.saveNewPasswordButton}
                            </button>
                        </form>
                    </>
                );
            case 'verificationSent':
            case 'resetSent':
                const isVerification = view === 'verificationSent';
                return (
                    <div className="text-center">
                         <h2 className="text-2xl font-bold text-deep-navy dark:text-cream-white mb-4">{isVerification ? t.verify.title : t.resetSentTitle}</h2>
                         <p className="text-gray-600 dark:text-gray-300 mb-6">{isVerification ? t.verify.prompt.replace('{email}', authEmail) : t.resetSentPrompt.replace('{email}', authEmail)}</p>
                         <button onClick={onClose} className="w-full py-3 px-4 rounded-lg font-semibold text-deep-navy bg-desert-gold hover:opacity-90 transition-all">
                             {t.verify.closeButton}
                         </button>
                    </div>
                );
        }
    }
    
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1618173484029-72c2f7831f55?q=80&w=2070&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div 
                className="w-full max-w-md m-auto bg-cream-white/20 dark:bg-deep-navy/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
                onClick={(e) => e.stopPropagation()}
                style={{animationFillMode: 'forwards', animationDuration: '0.2s'}}
            >
                <div className="p-8 md:p-10">
                    <div className="flex justify-center mb-6">
                        <LogoIcon className="h-16 w-16 text-deep-navy dark:text-desert-gold" />
                    </div>
                    {error && <p className="text-sm text-red-500 dark:text-red-400 text-center mb-4 bg-red-100/50 dark:bg-red-900/50 py-2 px-3 rounded-md">{error}</p>}
                    {renderContent()}
                </div>
            </div>
             <style>{`
                @keyframes fade-in-scale {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fade-in-scale {
                    animation-name: fade-in-scale;
                }
            `}</style>
        </div>
    );
};

export default AuthModal;