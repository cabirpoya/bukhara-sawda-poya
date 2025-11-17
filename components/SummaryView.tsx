import React from 'react';
import { Report } from '../types';
import ClipboardIcon from './icons/ClipboardIcon';
import { SpinnerIcon } from './icons/AIIcons';

interface SummaryViewProps {
    selectedReport: Report | null;
    summary: string;
    isLoading: boolean;
    error: string | null;
    onSummarize: () => void;
    reportText: string;
    setReportText: (text: string) => void;
}

const SummaryView: React.FC<SummaryViewProps> = ({ selectedReport, summary, isLoading, error, onSummarize, reportText, setReportText }) => {

    if (!selectedReport) {
        return (
            <div className="flex flex-col items-center justify-center h-full bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 text-center">
                <ClipboardIcon />
                <h3 className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-200">No Report Selected</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Please select a report from the list to get started.</p>
            </div>
        );
    }
    
    return (
        <div className="flex flex-col h-full space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Summary for {selectedReport.publishDate}</h2>
            
            <div>
                <label htmlFor="report-text" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Paste Report Content Here
                </label>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Since we can't access local files, please open the PDF, copy its content, and paste it below to generate a summary.</p>
                <textarea
                    id="report-text"
                    rows={8}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md shadow-sm focus:ring-ocean-blue focus:border-ocean-blue transition"
                    placeholder="Paste the text from the downloaded PDF report..."
                    value={reportText}
                    onChange={(e) => setReportText(e.target.value)}
                    disabled={isLoading}
                />
            </div>

            <button
                onClick={onSummarize}
                disabled={isLoading || !reportText}
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-navy-blue bg-aqua-teal hover:bg-aqua-teal/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-teal disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:text-white disabled:cursor-not-allowed transition-colors"
            >
                {isLoading ? (
                    <>
                        <SpinnerIcon />
                        <span>Generating...</span>
                    </>
                ) : 'Summarize with Gemini'}
            </button>

            {error && (
                <div className="bg-red-100 dark:bg-red-900/30 border-l-4 border-red-500 dark:border-red-600 text-red-700 dark:text-red-300 p-4 rounded-md">
                    <p className="font-bold">Error</p>
                    <p>{error}</p>
                </div>
            )}
            
            <div className="flex-grow pt-4">
                 <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">AI-Generated Summary</h3>
                {isLoading && (
                    <div className="space-y-4 animate-pulse">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    </div>
                )}
                {!isLoading && summary && (
                    <div className="prose prose-sm max-w-none bg-gray-50 dark:bg-gray-900/50 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                        <pre className="whitespace-pre-wrap font-sans text-sm text-gray-800 dark:text-gray-200">{summary}</pre>
                    </div>
                )}
                 {!isLoading && !summary && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                        The summary will appear here after you paste the report text and click the button above.
                    </div>
                )}
            </div>
        </div>
    );
};

export default SummaryView;