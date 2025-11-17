import React, { useEffect, useRef } from 'react';
import { Facility } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: Facility | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
    const { language } = useLanguage();
    const t = translations[language];
    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (isOpen) {
            const handleKeyDown = (event: KeyboardEvent) => {
                if (event.key === 'Escape') {
                    onClose();
                } else if (event.key === 'Tab') {
                    const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    if (!focusableElements || focusableElements.length === 0) return;

                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (event.shiftKey) { // Shift + Tab
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            event.preventDefault();
                        }
                    } else { // Tab
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            event.preventDefault();
                        }
                    }
                }
            };
            
            closeButtonRef.current?.focus();

            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [isOpen, onClose]);

    if (!isOpen || !service) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
        >
            <div 
                ref={modalRef}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-lg transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
                onClick={(e) => e.stopPropagation()}
                style={{animationFillMode: 'forwards', animationDuration: '0.2s'}}
            >
                {/* Header */}
                <div className="flex justify-between items-start p-5 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-4">
                        {service.icon}
                        <h2 id="service-modal-title" className="text-xl font-bold text-navy-blue dark:text-white">{service.name}</h2>
                    </div>
                    <button 
                        ref={closeButtonRef} 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        aria-label={t.trackingModal.close}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{service.description}</p>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 text-right rounded-b-lg">
                    <button 
                        onClick={onClose}
                        className="px-5 py-2 bg-ocean-blue text-white text-sm font-semibold rounded-md hover:bg-navy-blue transition-colors"
                    >
                        {t.trackingModal.close}
                    </button>
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

export default ServiceModal;