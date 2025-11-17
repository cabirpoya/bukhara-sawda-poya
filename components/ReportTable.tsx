import React from 'react';
import { Report } from '../types';
import DownloadIcon from './icons/DownloadIcon';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface ReportTableProps {
    reports: Report[];
    onSelectReport: (report: Report) => void;
    selectedReportId?: number | string;
}

const ReportTable: React.FC<ReportTableProps> = ({ reports, onSelectReport, selectedReportId }) => {
    const { language } = useLanguage();
    const t = translations[language].dailyShipping;

    const handleRowKeyDown = (event: React.KeyboardEvent<HTMLTableRowElement>, report: Report) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onSelectReport(report);
        }
    };
    
    return (
        <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Publish Date
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Description
                        </th>
                        <th scope="col" className="relative px-4 py-3">
                            <span className="sr-only">Download</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {reports.map((report) => (
                        <tr 
                            key={report.id}
                            onClick={() => onSelectReport(report)}
                            onKeyDown={(e) => handleRowKeyDown(e, report)}
                            tabIndex={0}
                            role="button"
                            aria-label={t.selectReportAria.replace('{description}', report.description)}
                            className={`cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-aqua-teal focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
                                selectedReportId === report.id
                                ? 'bg-aqua-teal/20 dark:bg-aqua-teal/30'
                                : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                            }`}
                        >
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{report.publishDate}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{report.description}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                                <a 
                                    href={report.downloadUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    onClick={(e) => e.stopPropagation()}
                                    aria-label={t.downloadReportAria.replace('{description}', report.description)}
                                    className="text-ocean-blue hover:text-navy-blue dark:hover:text-aqua-teal inline-flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-aqua-teal rounded"
                                >
                                    <DownloadIcon />
                                    <span>Download</span>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportTable;