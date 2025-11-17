import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="text-aqua-teal mb-4">{children}</div>
);

const svgProps = {
    className: "h-10 w-10",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
};

export const TerminalIcon: React.FC = () => <IconWrapper><svg {...svgProps}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></IconWrapper>;
export const ShipIcon: React.FC = () => <IconWrapper><svg {...svgProps}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.25c0 .397-.024.787-.07 1.17l-1.33 3.992a2.25 2.25 0 01-2.12 1.588H6.52a2.25 2.25 0 01-2.12-1.588l-1.33-3.992A15.68 15.68 0 013 12.25c0-4.015 1.58-7.666 4.155-10.413A2.25 2.25 0 019.24 1.5h5.52a2.25 2.25 0 012.085.337C19.42 4.584 21 8.235 21 12.25z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 18.75V12.25a15.68 15.68 0 01.07-1.17" /><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.75V12.25c0-.397.024-.787.07-1.17" /></svg></IconWrapper>;
export const CraneIcon: React.FC = () => <IconWrapper><svg {...svgProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v12m-8-8l8-8 8 8m-8-8v8m0 0H4m8 0h8" /></svg></IconWrapper>;
export const ChartBarIcon: React.FC = () => <IconWrapper><svg {...svgProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg></IconWrapper>;
export const WarehouseIcon: React.FC = () => <IconWrapper><svg {...svgProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6m-6 3.75h6m-6 3.75h6" /></svg></IconWrapper>;
export const TrainIcon: React.FC = () => <IconWrapper><svg {...svgProps}><path d="M18.75 12.75h1.5a3 3 0 000-6h-1.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-15" /><path d="M6.75 19.5h-1.5a3 3 0 01-3-3v0a3 3 0 013-3h1.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 21.75h12" /><path d="M3.75 16.5a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path d="M18 16.5a.75.75 0 100-1.5.75.75 0 000 1.5z" /></svg></IconWrapper>;