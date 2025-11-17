import React, { useEffect, useRef } from 'react';
import { 
    PredictiveDeliveryIcon, 
    ScenarioTestingIcon, 
    CapacityPlanningIcon, 
    PerformanceModelingIcon, 
    AutonomousPlanningIcon,
    TechnicalMetricsIcon,
    BusinessImpactIcon,
    ShipmentVolumeIcon,
    AverageDeliveryTimeIcon,
    PredictiveDeliveryMetricsIcon,
    ScenarioTestingMetricsIcon,
    AccuracyIcon,
    WarningIcon,
    RouteIcon,
    CircleCheckIcon
} from './icons/AIIcons';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { useTheme } from '../contexts/ThemeContext';

// Let TypeScript know about the Chart.js global variable from the CDN
declare var Chart: any;

const capabilityIcons: { [key: string]: React.ReactNode } = {
    predictive: <PredictiveDeliveryIcon />,
    scenario: <ScenarioTestingIcon />,
    capacity: <CapacityPlanningIcon />,
    performance: <PerformanceModelingIcon />,
};

const CapabilityCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
        <div className="mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-navy-blue dark:text-gray-200 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">{description}</p>
    </div>
);

const getChartDefaultOptions = (isDarkMode: boolean) => {
    const textColor = isDarkMode ? '#e5e7eb' : '#4b5563';
    const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: isDarkMode ? '#1f2937' : '#fff',
                titleColor: isDarkMode ? '#f9fafb' : '#6b7280',
                bodyColor: isDarkMode ? '#e5e7eb' : '#374151',
                borderColor: isDarkMode ? '#4b5563' : '#e5e7eb',
                borderWidth: 1,
                padding: 10,
                bodyFont: {
                    family: "'Inter', sans-serif"
                },
                titleFont: {
                     family: "'Inter', sans-serif"
                }
            }
        },
        scales: {
            x: {
                ticks: { color: textColor, font: { family: "'Inter', sans-serif" } },
                grid: { color: gridColor }
            },
            y: {
                ticks: { color: textColor, font: { family: "'Inter', sans-serif" } },
                grid: { color: gridColor }
            }
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
    }
};

// --- Chart Components ---

interface BusinessImpactChartProps {
    data: { name: string; value: number; unit: string }[];
    isDarkMode: boolean;
}

const BusinessImpactChart: React.FC<BusinessImpactChartProps> = ({ data, isDarkMode }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<any>(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            const chartDefaultOptions = getChartDefaultOptions(isDarkMode);
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.name),
                    datasets: [{
                        label: 'Impact',
                        data: data.map(item => item.value),
                        backgroundColor: 'rgba(27, 180, 196, 0.6)',
                        borderColor: 'rgba(27, 180, 196, 1)',
                        borderWidth: 1,
                        borderRadius: 4,
                    }]
                },
                options: {
                    ...chartDefaultOptions,
                    plugins: {
                        ...chartDefaultOptions.plugins,
                        tooltip: {
                             ...chartDefaultOptions.plugins.tooltip,
                            callbacks: {
                                label: (context: any) => `${context.label}: ${context.parsed.y}%`
                            }
                        }
                    },
                    scales: {
                        ...chartDefaultOptions.scales,
                        y: {
                            ...chartDefaultOptions.scales.y,
                            beginAtZero: true,
                            ticks: {
                                ...chartDefaultOptions.scales.y.ticks,
                                callback: (value: any) => `${value}%`
                            }
                        }
                    }
                }
            });
        }
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data, isDarkMode]);

    return <div style={{ height: '250px' }}><canvas ref={chartRef}></canvas></div>;
};


interface TechnicalMetricsChartProps {
    data: { name: string; value: number; unit: string }[];
    isDarkMode: boolean;
}

const TechnicalMetricsChart: React.FC<TechnicalMetricsChartProps> = ({ data, isDarkMode }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<any>(null);

    useEffect(() => {
        if (chartRef.current) {
             if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            const chartDefaultOptions = getChartDefaultOptions(isDarkMode);
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.name),
                    datasets: [{
                        label: 'Metric',
                        data: data.map(item => item.value),
                        backgroundColor: 'rgba(0, 90, 135, 0.6)',
                        borderColor: 'rgba(0, 90, 135, 1)',
                        borderWidth: 1,
                        borderRadius: 4,
                    }]
                },
                options: {
                    ...chartDefaultOptions,
                    indexAxis: 'y',
                     plugins: {
                        ...chartDefaultOptions.plugins,
                        tooltip: {
                             ...chartDefaultOptions.plugins.tooltip,
                            callbacks: {
                                label: (context: any) => {
                                    const unit = data[context.dataIndex].unit || '';
                                    return `${context.label}: ${context.parsed.x} ${unit}`;
                                }
                            }
                        }
                    },
                    scales: {
                         ...chartDefaultOptions.scales,
                         x: {
                            ...chartDefaultOptions.scales.x,
                            beginAtZero: true,
                         }
                    }
                }
            });
        }
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data, isDarkMode]);

    return <div style={{ height: '250px' }}><canvas ref={chartRef}></canvas></div>;
};

interface ShipmentVolumeChartProps {
    data: { month: string; volume: number }[];
    isDarkMode: boolean;
}

const ShipmentVolumeChart: React.FC<ShipmentVolumeChartProps> = ({ data, isDarkMode }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<any>(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            const chartDefaultOptions = getChartDefaultOptions(isDarkMode);
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.month),
                    datasets: [{
                        label: 'Volume',
                        data: data.map(item => item.volume),
                        backgroundColor: 'rgba(27, 180, 196, 0.6)',
                        borderColor: 'rgba(27, 180, 196, 1)',
                        borderWidth: 1,
                        borderRadius: 4,
                    }]
                },
                options: {
                    ...chartDefaultOptions,
                    plugins: {
                        ...chartDefaultOptions.plugins,
                        tooltip: {
                            ...chartDefaultOptions.plugins.tooltip,
                            callbacks: {
                                label: (context: any) => `${context.dataset.label}: ${context.parsed.y.toLocaleString()} Tonnes`
                            }
                        }
                    },
                    scales: {
                        ...chartDefaultOptions.scales,
                        y: {
                            ...chartDefaultOptions.scales.y,
                            beginAtZero: true,
                            ticks: {
                                ...chartDefaultOptions.scales.y.ticks,
                                callback: (value: any) => {
                                    if (typeof value === 'number' && value >= 1000) {
                                        return `${value / 1000}k`;
                                    }
                                    return value;
                                }
                            }
                        }
                    }
                }
            });
        }
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data, isDarkMode]);

    return <div style={{ height: '250px' }}><canvas ref={chartRef}></canvas></div>;
};

interface AverageDeliveryTimeChartProps {
    data: { route: string; days: number }[];
    isDarkMode: boolean;
}

const AverageDeliveryTimeChart: React.FC<AverageDeliveryTimeChartProps> = ({ data, isDarkMode }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<any>(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            const chartDefaultOptions = getChartDefaultOptions(isDarkMode);
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.route),
                    datasets: [{
                        label: 'Days',
                        data: data.map(item => item.days),
                        backgroundColor: 'rgba(0, 46, 78, 0.7)',
                        borderColor: 'rgba(0, 46, 78, 1)',
                        borderWidth: 1,
                        borderRadius: 4,
                    }]
                },
                options: {
                    ...chartDefaultOptions,
                     plugins: {
                        ...chartDefaultOptions.plugins,
                        tooltip: {
                            ...chartDefaultOptions.plugins.tooltip,
                            callbacks: {
                                label: (context: any) => `${context.label}: ${context.parsed.y} days`
                            }
                        }
                    },
                     scales: {
                        ...chartDefaultOptions.scales,
                        y: {
                            ...chartDefaultOptions.scales.y,
                            beginAtZero: true,
                            ticks: {
                                ...chartDefaultOptions.scales.y.ticks,
                                callback: (value: any) => `${value} days`
                            }
                        }
                    }
                }
            });
        }
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data, isDarkMode]);

    return <div style={{ height: '250px' }}><canvas ref={chartRef}></canvas></div>;
};


const AIAnalytics: React.FC = () => {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const t = translations[language].aiAnalytics;
    const isDarkMode = theme === 'dark';

    const metricIcons: { [key: string]: React.ReactNode } = {
        accuracy: <AccuracyIcon />,
        warnings: <WarningIcon />,
        rerouted: <RouteIcon />,
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-blue dark:text-white">{t.title}</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
                    {t.capabilities.map((cap) => (
                         <CapabilityCard key={cap.id} icon={capabilityIcons[cap.id]} title={cap.title} description={cap.description} />
                    ))}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
                        <div className="mb-4">
                            <AutonomousPlanningIcon />
                        </div>
                        <h3 className="text-lg font-bold text-navy-blue dark:text-gray-200 mb-3">{t.autonomous.title}</h3>
                        <ul className="text-left text-gray-600 dark:text-gray-400 text-sm space-y-2 list-inside list-disc marker:text-aqua-teal">
                            {t.autonomous.features.map((feat, i) => (
                                <li key={i} className="text-xs">{feat}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-navy-blue dark:text-white">{t.performance.title}</h3>
                     <p className="mt-2 text-md text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t.performance.subtitle}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                   {/* Technical Metrics */}
                   <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                       <div className="flex items-center mb-4">
                            <TechnicalMetricsIcon />
                            <h4 className="text-xl font-bold text-ocean-blue ml-3">{t.performance.technical.title}</h4>
                       </div>
                       <TechnicalMetricsChart data={t.performance.technical.metrics} isDarkMode={isDarkMode} />
                   </div>

                    {/* Business Impact */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                       <div className="flex items-center mb-4">
                            <BusinessImpactIcon />
                            <h4 className="text-xl font-bold text-ocean-blue ml-3">{t.performance.business.title}</h4>
                       </div>
                       <BusinessImpactChart data={t.performance.business.impacts} isDarkMode={isDarkMode} />
                   </div>

                    {/* Shipment Volume */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                       <div className="flex items-center mb-4">
                            <ShipmentVolumeIcon />
                            <h4 className="text-xl font-bold text-ocean-blue ml-3">{t.performance.shipmentVolume.title}</h4>
                       </div>
                       <ShipmentVolumeChart data={t.performance.shipmentVolume.data} isDarkMode={isDarkMode} />
                   </div>

                    {/* Average Delivery Times */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                       <div className="flex items-center mb-4">
                            <AverageDeliveryTimeIcon />
                            <h4 className="text-xl font-bold text-ocean-blue ml-3">{t.performance.averageDelivery.title}</h4>
                       </div>
                       <AverageDeliveryTimeChart data={t.performance.averageDelivery.data} isDarkMode={isDarkMode} />
                   </div>

                   {/* Predictive Delivery ETAs */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
                        <div className="flex items-center mb-4">
                            <PredictiveDeliveryMetricsIcon />
                            <h4 className="text-xl font-bold text-ocean-blue ml-3">{t.performance.predictiveDelivery.title}</h4>
                        </div>
                        <div className="space-y-4 flex-grow flex flex-col justify-center">
                            {t.performance.predictiveDelivery.metrics.map((metric: any) => (
                                <div key={metric.id} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        {metricIcons[metric.id]}
                                        <span className="text-sm text-gray-700 dark:text-gray-300 ml-3">{metric.label}</span>
                                    </div>
                                    <span className="text-sm font-bold text-navy-blue dark:text-gray-200">{metric.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Disruption Scenario Testing */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
                        <div className="flex items-center mb-4">
                            <ScenarioTestingMetricsIcon />
                            <h4 className="text-xl font-bold text-ocean-blue ml-3">{t.performance.disruptionTesting.title}</h4>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 flex-grow flex flex-col justify-center">
                            {t.performance.disruptionTesting.scenarios.map((scenario: string, index: number) => (
                                <li key={index} className="flex items-center">
                                    <CircleCheckIcon className="h-5 w-5 text-aqua-teal mr-2 flex-shrink-0" />
                                    <span>{scenario}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIAnalytics;