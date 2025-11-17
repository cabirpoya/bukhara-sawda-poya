import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Footer: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
        if (emailInput && emailInput.value) {
            alert(`${t.footer.newsletter.thankYou}, ${emailInput.value}!`);
            form.reset();
        } else {
            alert(t.footer.newsletter.invalidEmail);
        }
    };

    const handleComingSoon = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        alert(t.comingSoon);
    };

    return (
        <footer id="contact" className="bg-navy-blue text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">{t.footer.about.title}</h3>
                        <p className="text-sm">{t.footer.about.description}</p>
                        <div className="flex space-x-4 mt-4 text-sm">
                           {/* Social Icons */}
                           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-aqua-teal">Facebook</a>
                           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-aqua-teal">LinkedIn</a>
                           <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="hover:text-aqua-teal">Telegram</a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">{t.footer.links.title}</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#about" className="hover:text-aqua-teal">{t.footer.links.about}</a></li>
                            <li><a href="#services" className="hover:text-aqua-teal">{t.footer.links.services}</a></li>
                            <li><a href="#" onClick={handleComingSoon} className="hover:text-aqua-teal">{t.footer.links.locations}</a></li>
                            <li><a href="#contact" className="hover:text-aqua-teal">{t.footer.links.contact}</a></li>
                        </ul>
                    </div>
                    
                     {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">{t.footer.contact.title}</h3>
                        <ul className="space-y-2 text-sm">
                            <li>77, Nobel Avenue,</li>
                            <li>{t.footer.contact.city}</li>
                            <li className="pt-2">info@nobel-logistics.com</li>
                            <li className="pt-2">+998 71 200 44 44</li>
                            <li>+998 71 200 44 45</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">{t.footer.newsletter.title}</h3>
                        <p className="text-sm mb-4">{t.footer.newsletter.description}</p>
                        <form onSubmit={handleNewsletterSubmit}>
                            <div className="flex">
                                <input type="email" placeholder={t.footer.newsletter.placeholder} required className="w-full px-3 py-2 text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 rounded-l-md focus:outline-none"/>
                                <button type="submit" className="bg-aqua-teal text-navy-blue px-4 py-2 rounded-r-md font-semibold hover:bg-opacity-90">{t.footer.newsletter.button}</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
                    <p>{t.footer.copyright.text.replace('{year}', new Date().getFullYear().toString())} | <a href="#" onClick={handleComingSoon} className="hover:text-aqua-teal">{t.footer.copyright.legal}</a> | <a href="#" onClick={handleComingSoon} className="hover:text-aqua-teal">{t.footer.copyright.sitemap}</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;