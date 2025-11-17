import React, { useState, useMemo } from 'react';
import { reportsData } from '../data';
import ReportTable from './ReportTable';
import SummaryView from './SummaryView';
import Pagination from './Pagination';
import { Report } from '../types';
import { summarizeReportText } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { SearchIcon } from './icons/AIIcons';

const ITEMS_PER_PAGE = 5;

const DailyShippingReports: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language].dailyShipping;

    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedReport, setSelectedReport] = useState<Report | null>(null);
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [reportText, setReportText] = useState('');

    const filteredReports = useMemo(() => {
        if (!searchQuery) {
            return reportsData;
        }
        return reportsData.filter(report =>
            report.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const paginatedReports = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredReports.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredReports, currentPage]);

    const totalPages = Math.ceil(filteredReports.length / ITEMS_PER_PAGE);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setCurrentPage(1);
    };

    const handleSelectReport = (report: Report) => {
        setSelectedReport(report);
        setSummary('');
        setReportText('');
        setError(null);
    };
    
    const handleSummarize = async () => {
        if (!reportText) return;
        setIsLoading(true);
        setError(null);
        setSummary('');
        try {
            const result = await summarizeReportText(reportText);
            setSummary(result);
        } catch (err) {
            setError('Failed to generate summary. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-blue dark:text-white">{t.title}</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        {/* Search Bar */}
                        <div className="mb-4 flex items-center space-x-2">
                             <div className="relative flex-grow">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <SearchIcon />
                                </span>
                                <input
                                    type="text"
                                    placeholder={t.searchPlaceholder}
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-ocean-blue focus:border-ocean-blue transition bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                />
                            </div>
                            <button
                                onClick={handleClearSearch}
                                className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors disabled:opacity-50"
                                disabled={!searchQuery}
                            >
                                {t.clear}
                            </button>
                        </div>
                        
                        <ReportTable 
                            reports={paginatedReports} 
                            onSelectReport={handleSelectReport}
                            selectedReportId={selectedReport?.id}
                        />
                        
                        {totalPages > 0 && (
                            <div className="mt-6">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                    totalRecords={filteredReports.length}
                                    itemsPerPage={ITEMS_PER_PAGE}
                                />
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <SummaryView 
                            selectedReport={selectedReport}
                            summary={summary}
                            isLoading={isLoading}
                            error={error}
                            onSummarize={handleSummarize}
                            reportText={reportText}
                            setReportText={setReportText}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DailyShippingReports;