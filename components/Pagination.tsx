import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalRecords: number;
    itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, totalRecords, itemsPerPage }) => {
    
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        let startPage: number, endPage: number;

        if (totalPages <= maxPagesToShow) {
            startPage = 1;
            endPage = totalPages;
        } else {
            const maxPagesBeforeCurrentPage = Math.floor(maxPagesToShow / 2);
            const maxPagesAfterCurrentPage = Math.ceil(maxPagesToShow / 2) - 1;
            if (currentPage <= maxPagesBeforeCurrentPage) {
                startPage = 1;
                endPage = maxPagesToShow;
            } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
                startPage = totalPages - maxPagesToShow + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };
    
    const pageNumbers = getPageNumbers();
    const startRecord = (currentPage - 1) * itemsPerPage + 1;
    const endRecord = Math.min(currentPage * itemsPerPage, totalRecords);

    return (
        <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing <strong>{startRecord}</strong> to <strong>{endRecord}</strong> of <strong>{totalRecords}</strong> Records
            </div>
            {totalPages > 1 && (
                <nav>
                    <ul className="inline-flex items-center -space-x-px text-sm">
                        <li>
                            <button
                                onClick={() => onPageChange(1)}
                                disabled={currentPage === 1}
                                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-l-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white disabled:opacity-50"
                                aria-label="First page"
                            >
                                &laquo;
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => onPageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-3 py-2 leading-tight text-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white disabled:opacity-50"
                                aria-label="Previous page"
                            >
                                &lsaquo;
                            </button>
                        </li>

                        {pageNumbers.map(page => (
                            <li key={page}>
                                <button
                                    onClick={() => onPageChange(page)}
                                    aria-current={currentPage === page ? 'page' : undefined}
                                    className={`px-3 py-2 leading-tight border border-gray-300 dark:border-gray-600 ${
                                        currentPage === page 
                                        ? 'z-10 text-white bg-ocean-blue border-ocean-blue' 
                                        : 'text-gray-500 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
                                    }`}
                                >
                                    {page}
                                </button>
                            </li>
                        ))}
                        
                        <li>
                            <button
                                onClick={() => onPageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-3 py-2 leading-tight text-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white disabled:opacity-50"
                                aria-label="Next page"
                            >
                                &rsaquo;
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => onPageChange(totalPages)}
                                disabled={currentPage === totalPages}
                                className="px-3 py-2 leading-tight text-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-r-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white disabled:opacity-50"
                                aria-label="Last page"
                            >
                                &raquo;
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Pagination;