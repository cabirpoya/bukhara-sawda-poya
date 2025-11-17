import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import KeyStatistics from './components/KeyStatistics';
import Facilities from './components/Facilities';
import WhyChooseUs from './components/DailyShippingProgram';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import AIFeatures from './components/AIFeatures';
import AIAnalytics from './components/AIAnalytics';
import ShipmentTracking from './components/ShipmentTracking';
import TrackingModal from './components/TrackingModal';
import AuthModal from './components/AuthModal';
import DailyShippingReports from './components/DailyShippingReports';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { translations } from './translations';
import { ShipmentStatus } from './types';


const AppContent: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [shipmentDetails, setShipmentDetails] = useState<ShipmentStatus | null>(null);
    const [isTracking, setIsTracking] = useState(false);
    const intervalRef = useRef<number | null>(null);

    const stopTrackingSimulation = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const handleTrackShipment = (trackingId?: string) => {
        stopTrackingSimulation();
        setIsTracking(true);

        setTimeout(() => {
            setIsTracking(false);
            
            const baseShipment = t.aiFeatures.mockShipment;
            const journey = t.aiFeatures.shipmentJourney;
            let journeyIndex = 0;

            const initialDetails: ShipmentStatus = {
                ...baseShipment,
                ...journey[journeyIndex],
                trackingId: trackingId || baseShipment.trackingId,
            };
            
            setShipmentDetails(initialDetails);
            setIsTrackingModalOpen(true);
            journeyIndex++;
            
            intervalRef.current = window.setInterval(() => {
                if (journeyIndex >= journey.length) {
                    stopTrackingSimulation();
                    return;
                }
                
                setShipmentDetails(prevDetails => {
                    if (!prevDetails) {
                        stopTrackingSimulation();
                        return null;
                    }
                    return {
                        ...prevDetails,
                        ...journey[journeyIndex],
                    };
                });
                journeyIndex++;
            }, 3000);

        }, 1000);
    };

    const handleCloseTrackingModal = () => {
        setIsTrackingModalOpen(false);
        stopTrackingSimulation();
        setTimeout(() => setShipmentDetails(null), 300);
    };

    useEffect(() => {
        return () => stopTrackingSimulation();
    }, []);


    return (
        <div className="bg-gray-100 dark:bg-navy-blue text-gray-800 dark:text-gray-300 font-sans">
            <Header onAuthClick={() => setIsAuthModalOpen(true)} />
            <main>
                <HeroSection />
                <ShipmentTracking onTrackShipment={handleTrackShipment} isTracking={isTracking} />
                <KeyStatistics />
                <AboutSection />
                <Facilities />
                <AIFeatures onTrackShipment={() => handleTrackShipment()} isTracking={isTracking} />
                <AIAnalytics />
                <DailyShippingReports />
                <WhyChooseUs />
            </main>
            <Footer />
            <TrackingModal 
                isOpen={isTrackingModalOpen} 
                onClose={handleCloseTrackingModal} 
                shipmentDetails={shipmentDetails} 
            />
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
        </div>
    );
}


const App: React.FC = () => {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <AuthProvider>
                    <AppContent />
                </AuthProvider>
            </LanguageProvider>
        </ThemeProvider>
    );
};

export default App;