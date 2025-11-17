import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from './icons/ThemeIcons';
import { useAuth } from '../contexts/AuthContext';
import { SpinnerIcon } from './icons/AIIcons';

const NavLink = ({ children, href = "#", onClick }: { children: React.ReactNode, href?: string, onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => (
    <a href={href} onClick={onClick} className="text-white hover:text-aqua-teal transition-colors duration-300 py-6 px-4 font-medium flex items-center">
        {children}
    </a>
);

const Dropdown = ({ children, isOpen }: { children: React.ReactNode, isOpen: boolean }) => (
    <div className={`absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg rounded-b-md py-2 w-56 transition-all duration-200 ease-out origin-top transform ${isOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
        {children}
    </div>
);

const DropdownLink = ({ children, href = "#", onClick }: { children: React.ReactNode, href?: string, onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => (
    <a href={href} onClick={onClick} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-ocean-blue">{children}</a>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-200 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

interface HeaderProps {
    onAuthClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAuthClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
    const [isResending, setIsResending] = useState(false);
    const [resentMessage, setResentMessage] = useState('');


    const headerRef = useRef<HTMLElement>(null);
    const { language, setLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const { currentUser, logout, resendVerificationEmail } = useAuth();
    const t = translations[language].header;

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ru' : 'en');
    };

    const handleComingSoon = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        alert(translations[language].comingSoon);
        setOpenDropdown(null);
        setOpenMobileSubmenu(null);
        setIsMenuOpen(false);
    };
    
    const handleDropdownToggle = (e: React.MouseEvent, dropdownName: string) => {
        e.preventDefault();
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };
    
    const handleMobileSubmenuToggle = (submenuName: string) => {
        setOpenMobileSubmenu(openMobileSubmenu === submenuName ? null : submenuName);
    };

    const handleResendVerification = async () => {
        setIsResending(true);
        setResentMessage('');
        try {
            await resendVerificationEmail();
            setResentMessage(translations[language].auth.header.resentMessage);
            setTimeout(() => setResentMessage(''), 3000);
        } catch (error) {
            console.error("Failed to resend verification email", error);
            alert("Failed to send verification email. Please try again.");
        } finally {
            setIsResending(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const MobileNavLink: React.FC<{ href: string; children: React.ReactNode; }> = ({ href, children }) => (
        <a href={href} onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 text-white hover:bg-navy-blue transition-colors">{children}</a>
    );

    const MobileDropdownLink: React.FC<{ children: React.ReactNode; }> = ({ children }) => (
         <a href="#" onClick={handleComingSoon} className="block py-2 px-6 text-sm text-gray-200 hover:bg-navy-blue transition-colors">{children}</a>
    );


    return (
        <header ref={headerRef} className="bg-navy-blue shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center space-x-3">
                             <span className="text-white text-xl font-bold tracking-tight">
                                Bukhara Sawda
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        <NavLink href="#about">{t.about}</NavLink>
                        
                        <div className="relative">
                            <a href="#services" onClick={(e) => handleDropdownToggle(e, 'services')} className={`py-6 px-4 font-medium flex items-center transition-colors duration-300 ${openDropdown === 'services' ? 'text-aqua-teal' : 'text-white hover:text-aqua-teal'}`} aria-haspopup="true" aria-expanded={openDropdown === 'services'}>
                                {t.services.title}
                                <ChevronDownIcon className={openDropdown === 'services' ? 'rotate-180' : ''} />
                            </a>
                            <Dropdown isOpen={openDropdown === 'services'}>
                                <DropdownLink href="#" onClick={handleComingSoon}>{t.services.freight}</DropdownLink>
                                <DropdownLink href="#" onClick={handleComingSoon}>{t.services.warehousing}</DropdownLink>
                                <DropdownLink href="#" onClick={handleComingSoon}>{t.services.customs}</DropdownLink>
                                <DropdownLink href="#" onClick={handleComingSoon}>{t.services.transport}</DropdownLink>
                            </Dropdown>
                        </div>
                        
                        <NavLink href="#operations">{t.operations}</NavLink>
                        <NavLink href="#" onClick={handleComingSoon}>{t.industries}</NavLink>

                        <div className="relative">
                             <a href="#" onClick={(e) => handleDropdownToggle(e, 'media')} className={`py-6 px-4 font-medium flex items-center transition-colors duration-300 ${openDropdown === 'media' ? 'text-aqua-teal' : 'text-white hover:text-aqua-teal'}`} aria-haspopup="true" aria-expanded={openDropdown === 'media'}>
                                {t.media.title}
                                <ChevronDownIcon className={openDropdown === 'media' ? 'rotate-180' : ''} />
                            </a>
                             <Dropdown isOpen={openDropdown === 'media'}>
                                <DropdownLink href="#" onClick={handleComingSoon}>{t.media.news}</DropdownLink>
                                <DropdownLink href="#" onClick={handleComingSoon}>{t.media.notices}</DropdownLink>
                                <DropdownLink href="#" onClick={handleComingSoon}>{t.media.careers}</DropdownLink>
                            </Dropdown>
                        </div>
                         <div className="relative">
                            <a href="#" onClick={(e) => handleDropdownToggle(e, 'locations')} className={`py-6 px-4 font-medium flex items-center transition-colors duration-300 ${openDropdown === 'locations' ? 'text-aqua-teal' : 'text-white hover:text-aqua-teal'}`} aria-haspopup="true" aria-expanded={openDropdown === 'locations'}>
                                {t.locations.title}
                                <ChevronDownIcon className={openDropdown === 'locations' ? 'rotate-180' : ''} />
                            </a>
                             <Dropdown isOpen={openDropdown === 'locations'}>
                                <DropdownLink href="#" onClick={handleComingSoon}>{t.locations.hub}</DropdownLink>
                                <DropdownLink href="#" onClick={handleComingSoon}>{t.locations.network}</DropdownLink>
                                <DropdownLink href="#" onClick={handleComingSoon}>{t.locations.partners}</DropdownLink>
                            </Dropdown>
                        </div>
                        <NavLink href="#contact">{t.contact}</NavLink>
                        <div className="flex items-center pl-4">
                            <button onClick={toggleLanguage} className="text-white hover:text-aqua-teal transition-colors duration-300 p-2 font-bold text-sm">
                                {language === 'en' ? 'RU' : 'EN'}
                            </button>
                            <button onClick={toggleTheme} className="text-white hover:text-aqua-teal transition-colors duration-300 p-2" aria-label="Toggle theme">
                                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                            </button>
                            {currentUser ? (
                                <div className="flex items-center ml-2 space-x-3">
                                    {!currentUser.emailVerified && (
                                        <>
                                            {resentMessage ? (
                                                 <span className="text-sm text-green-400">{resentMessage}</span>
                                            ) : (
                                                <button onClick={handleResendVerification} disabled={isResending} className="px-3 py-1.5 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600 transition-all duration-300 text-xs flex items-center">
                                                    {isResending ? <SpinnerIcon /> : translations[language].auth.header.verifyButton}
                                                </button>
                                            )}
                                        </>
                                    )}
                                    <span className="text-sm text-gray-300 hidden lg:inline">{currentUser.email}</span>
                                    <button onClick={logout} className="px-4 py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-all duration-300 text-sm">
                                        {translations[language].auth.logout}
                                    </button>
                                </div>
                            ) : (
                                <button onClick={onAuthClick} className="ml-2 px-4 py-2 bg-aqua-teal text-navy-blue font-bold rounded-md hover:bg-white transition-all duration-300 text-sm">
                                    {translations[language].auth.login} / {translations[language].auth.signUp}
                                </button>
                            )}
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none p-2">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
             {/* Mobile Navigation */}
             <div className={`md:hidden absolute top-full left-0 w-full bg-ocean-blue transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <MobileNavLink href="#about">{t.about}</MobileNavLink>
                
                <div>
                    <button onClick={() => handleMobileSubmenuToggle('services')} className="w-full flex justify-between items-center py-3 px-4 text-white hover:bg-navy-blue transition-colors">
                        <span>{t.services.title}</span>
                        <ChevronDownIcon className={openMobileSubmenu === 'services' ? 'rotate-180' : ''} />
                    </button>
                    <div className={`transition-all duration-300 ease-in-out bg-navy-blue/50 overflow-hidden ${openMobileSubmenu === 'services' ? 'max-h-96' : 'max-h-0'}`}>
                        <MobileDropdownLink>{t.services.freight}</MobileDropdownLink>
                        <MobileDropdownLink>{t.services.warehousing}</MobileDropdownLink>
                        <MobileDropdownLink>{t.services.customs}</MobileDropdownLink>
                        <MobileDropdownLink>{t.services.transport}</MobileDropdownLink>
                    </div>
                </div>

                <MobileNavLink href="#operations">{t.operations}</MobileNavLink>
                <a href="#" onClick={handleComingSoon} className="block py-3 px-4 text-white hover:bg-navy-blue transition-colors">{t.industries}</a>

                 <div>
                    <button onClick={() => handleMobileSubmenuToggle('media')} className="w-full flex justify-between items-center py-3 px-4 text-white hover:bg-navy-blue transition-colors">
                        <span>{t.media.title}</span>
                        <ChevronDownIcon className={openMobileSubmenu === 'media' ? 'rotate-180' : ''} />
                    </button>
                    <div className={`transition-all duration-300 ease-in-out bg-navy-blue/50 overflow-hidden ${openMobileSubmenu === 'media' ? 'max-h-96' : 'max-h-0'}`}>
                        <MobileDropdownLink>{t.media.news}</MobileDropdownLink>
                        <MobileDropdownLink>{t.media.notices}</MobileDropdownLink>
                        <MobileDropdownLink>{t.media.careers}</MobileDropdownLink>
                    </div>
                </div>
                
                <div>
                    <button onClick={() => handleMobileSubmenuToggle('locations')} className="w-full flex justify-between items-center py-3 px-4 text-white hover:bg-navy-blue transition-colors">
                        <span>{t.locations.title}</span>
                        <ChevronDownIcon className={openMobileSubmenu === 'locations' ? 'rotate-180' : ''} />
                    </button>
                    <div className={`transition-all duration-300 ease-in-out bg-navy-blue/50 overflow-hidden ${openMobileSubmenu === 'locations' ? 'max-h-96' : 'max-h-0'}`}>
                        <MobileDropdownLink>{t.locations.hub}</MobileDropdownLink>
                        <MobileDropdownLink>{t.locations.network}</MobileDropdownLink>
                        <MobileDropdownLink>{t.locations.partners}</MobileDropdownLink>
                    </div>
                </div>

                <MobileNavLink href="#contact">{t.contact}</MobileNavLink>
                
                 <div className="p-4 border-t border-navy-blue">
                     {currentUser ? (
                         <div className="text-center">
                            <p className="text-gray-300 mb-3">{currentUser.email}</p>
                             <button onClick={() => { logout(); setIsMenuOpen(false); }} className="block text-center w-full px-6 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-all duration-300">
                                 {translations[language].auth.logout}
                            </button>
                         </div>
                     ) : (
                         <button onClick={() => { onAuthClick(); setIsMenuOpen(false); }} className="block text-center w-full px-6 py-3 bg-aqua-teal text-navy-blue font-bold rounded-md hover:bg-white transition-all duration-300">
                             {translations[language].auth.login} / {translations[language].auth.signUp}
                        </button>
                     )}
                    <div className="flex items-center justify-center space-x-4 mt-4">
                        <button onClick={toggleLanguage} className="text-white hover:text-aqua-teal transition-colors duration-300 p-2 font-bold text-sm">
                            {language === 'en' ? 'RU' : 'EN'}
                        </button>
                        <button onClick={toggleTheme} className="text-white hover:text-aqua-teal transition-colors duration-300 p-2" aria-label="Toggle theme">
                            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;