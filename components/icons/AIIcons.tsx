import React from 'react';

const svgProps = {
    className: "h-8 w-8 text-ocean-blue group-hover:text-white transition-colors duration-300",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
};

const smallSvgProps = {
    ...svgProps,
    className: "h-6 w-6",
}


// Icon for weather: Cloud, sun, and wind.
export const WeatherIcon: React.FC = () => (
    <svg {...svgProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
);

// Icon for digital twin: A 3D cube representing a model.
export const DigitalTwinIcon: React.FC = () => (
    <svg {...svgProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9.75L21 7.5M12 12.75L3 7.5" />
    </svg>
);

// Autonomous Shipment Planning: Reusing CpuChipIcon style.
export const AutonomousIcon: React.FC = () => (
    <svg {...svgProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 3v1.5m0 15v1.5m3.75-18v1.5m0 15v1.5M12 6.75A5.25 5.25 0 006.75 12a5.25 5.25 0 005.25 5.25a5.25 5.25 0 005.25-5.25A5.25 5.25 0 0012 6.75zm0 1.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z" />
    </svg>
);

// AI-Generated Contracts & Compliance: Reusing ShieldCheckIcon style for compliance.
export const ContractIcon: React.FC = () => (
    <svg {...svgProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

// Icon for Cyclone
export const CycloneIcon: React.FC = () => (
     <svg {...smallSvgProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 0v3.75m0 7.5v3.75m0-7.5h3.75m-7.5 0H4.5m5.25-3.75l2.625 2.625m-5.25 0l2.625-2.625m0 5.25l-2.625 2.625m5.25 0l-2.625-2.625" />
    </svg>
);

// Icon for Fog
export const FogIcon: React.FC = () => (
     <svg {...smallSvgProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3h16.5m-16.5 3h16.5m-16.5-9h16.5" />
    </svg>
);

// Icon for Sandstorm
export const SandstormIcon: React.FC = () => (
    <svg {...smallSvgProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.25 4.5h.008v.008H5.25V4.5zm3 0h.008v.008H8.25V4.5zm3 0h.008v.008h-.008V4.5z" />
    </svg>
);

export const TrackIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

export const SpinnerIcon: React.FC = () => (
    <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);


// New Icons
const largeSvgProps = {
    className: "h-10 w-10 text-aqua-teal",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
};

export const PredictiveDeliveryIcon: React.FC = () => (
    <svg {...largeSvgProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25l-2.25 2.25m0 0l2.25 2.25m-2.25-2.25h9" />
    </svg>
);

export const ScenarioTestingIcon: React.FC = () => (
    <svg {...largeSvgProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .34.148.66.402.878l.498.414a.75.75 0 00.998-.06l.493-.572a.75.75 0 00-.06-.998l-.414-.498a1.125 1.125 0 00-.878-.402h-.568a.75.75 0 00-.75.75zM12.75 20.97v-.568c0-.34-.148-.66-.402-.878l-.498-.414a.75.75 0 00-.998.06l-.493.572a.75.75 0 00.06.998l.414.498c.248.21.57.348.878.402h.568a.75.75 0 00.75-.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12.75h.008v.008H6v-.008zM6.75 12h.008v.008H6.75V12zM7.5 12h.008v.008H7.5V12zM8.25 12h.008v.008H8.25V12zM9 12h.008v.008H9V12zm-3 8.25a.75.75 0 00.75-.75v-1.125a.75.75 0 00-.75-.75h-.375a.75.75 0 00-.75.75v1.125c0 .414.336.75.75.75h.375z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3a.75.75 0 00-.75.75v1.125c0 .414.336.75.75.75h.375a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75H6zm9.75 3.75a.75.75 0 00.75-.75V4.875a.75.75 0 00-.75-.75H15a.75.75 0 00-.75.75v1.125c0 .414.336.75.75.75h.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 21a.75.75 0 00.75-.75v-1.125a.75.75 0 00-.75-.75h-.75a.75.75 0 00-.75.75v1.125c0 .414.336.75.75.75h.75zM9 12a3 3 0 106 0 3 3 0 00-6 0z" />
    </svg>
);


export const CapacityPlanningIcon: React.FC = () => (
    <svg {...largeSvgProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M10 15h4M7.5 4.5l.243.654A2.25 2.25 0 009.894 6.75h4.212a2.25 2.25 0 002.15-1.596L16.5 4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5V2.25" />
    </svg>
);


export const PerformanceModelingIcon: React.FC = () => (
    <svg {...largeSvgProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1.125-1.5M13.5 16.5L12 15m0 1.5l-1.125-1.5M6 16.5l-1.125-1.5M12 3v3.75m0 0l-1.125-1.5M12 6.75L13.125 5.25M12 6.75l-1.125 1.5m1.125-1.5l1.125 1.5M12 15a2.25 2.25 0 002.25-2.25V7.5A2.25 2.25 0 0012 5.25v0A2.25 2.25 0 009.75 7.5v5.25A2.25 2.25 0 0012 15z" />
    </svg>
);

export const AutonomousPlanningIcon: React.FC = () => (
    <svg {...largeSvgProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 3v1.5m0 15v1.5m3.75-18v1.5m0 15v1.5M12 6.75A5.25 5.25 0 006.75 12a5.25 5.25 0 005.25 5.25a5.25 5.25 0 005.25-5.25A5.25 5.25 0 0012 6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75h7.5" />
    </svg>
);

const metricsIconProps = {
    className: "h-8 w-8 text-ocean-blue",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
};

export const TechnicalMetricsIcon: React.FC = () => (
    <svg {...metricsIconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 15.25M9.75 3.104c.39.023.78.023 1.17.023h3.06c.39 0 .78 0 1.17-.023M14.25 3.104v5.714c0 .828-.445 1.564-1.16 1.956L10.5 12.25v2.996M5.25 15.25c-.292.213-.623.364-.974.464M5.25 15.25c.292.213.623.364.974.464M18.75 15.25c.292.213.623.364.974.464M18.75 15.25c-.292.213-.623.364-.974.464M13.5 21a1.5 1.5 0 001.5-1.5v-5.25a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5v5.25a1.5 1.5 0 001.5 1.5h3z" />
    </svg>
);


export const BusinessImpactIcon: React.FC = () => (
    <svg {...metricsIconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.94-3.94m3.94 3.94l-3.94 3.94" />
    </svg>
);

// For Tracking Modal
export const PackageIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
);

export const CircleCheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// For new AI Analytics sections
export const ShipmentVolumeIcon: React.FC = () => (
    <svg {...metricsIconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);

export const AverageDeliveryTimeIcon: React.FC = () => (
    <svg {...metricsIconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const PredictiveDeliveryMetricsIcon: React.FC = () => (
    <svg {...metricsIconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5V12h-4.5" />
    </svg>
);

export const ScenarioTestingMetricsIcon: React.FC = () => (
    <svg {...metricsIconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3m15 0h-3m-6 6v-3m0-6V6m0 6h3m-3 0H9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9a3 3 0 100 6 3 3 0 000-6zM12 3a3 3 0 100 6 3 3 0 000-6zm0 15a3 3 0 100 6 3 3 0 000-6zm9 12a3 3 0 10-6 0 3 3 0 006 0zM3 12a3 3 0 106 0 3 3 0 00-6 0z" />
    </svg>
);

const tinyIconProps = {
    className: "h-5 w-5 text-gray-500",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
};

export const AccuracyIcon: React.FC = () => (
    <svg {...tinyIconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const WarningIcon: React.FC = () => (
    <svg {...tinyIconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

export const RouteIcon: React.FC = () => (
    <svg {...tinyIconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v4a2 2 0 002 2h10a2 2 0 002-2V3m-4 15v4m0-4h4m-4 0v-4m0 4H3m4-11h10M3 12h4m0 0v4m0-4H3" />
    </svg>
);

export const SearchIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5 text-gray-400"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const GooglePinIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
);