import React from 'react';

const svgProps = {
    className: "h-8 w-8 text-ocean-blue group-hover:text-white transition-colors duration-300",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
};

export const ShieldCheckIcon: React.FC = () => <svg {...svgProps}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.016h-.008v-.016z" /></svg>;
export const GlobeAltIcon: React.FC = () => <svg {...svgProps}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.25 9.75h17.5M9 3.25a15.82 15.82 0 012.32.22m-2.32-.22a15.82 15.82 0 00-2.32.22M15 20.75a15.82 15.82 0 01-2.32-.22m2.32.22a15.82 15.82 0 002.32-.22M3.25 14.25h17.5" /></svg>;
export const TruckIcon: React.FC = () => <svg {...svgProps}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875" /></svg>;
export const CpuChipIcon: React.FC = () => <svg {...svgProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5h16.5M3.75 19.5h16.5M4.5 3.75v16.5M19.5 3.75v16.5M8.25 7.5h7.5M8.25 12h7.5M8.25 16.5h7.5" /></svg>;
