import { ShipmentStatus } from './types';

interface Translations {
    [key: string]: any;
}

export const translations: Translations = {
    en: {
        comingSoon: 'This page is for demonstration purposes and is not yet available.',
        header: {
            about: 'ABOUT US',
            services: {
                title: 'SERVICES',
                freight: 'Freight Forwarding',
                warehousing: 'Warehousing & Distribution',
                customs: 'Customs Brokerage',
                transport: 'Road & Rail Transport',
            },
            operations: 'OPERATIONS',
            industries: 'INDUSTRIES',
            media: {
                title: 'MEDIA CENTRE',
                news: 'News',
                notices: 'Notices',
                careers: 'Careers',
            },
            locations: {
                title: 'LOCATIONS',
                hub: 'Uzbekistan Hub',
                network: 'CIS Network',
                partners: 'Global Partners',
            },
            contact: 'CONTACT',
        },
        auth: {
            login: 'Login',
            signUp: 'Sign Up',
            logout: 'Logout',
            email: 'Email Address',
            password: 'Password',
            repeatPassword: 'Repeat Password',
            loginTitle: 'Sign in to your account',
            signUpTitle: 'Create a new account',
            loginButton: 'Sign In',
            signUpButton: 'Create Account',
            switchToSignUp: "Don't have an account?",
            switchToLogin: 'Already have an account?',
            forgotPassword: 'Forgot Password?',
            rememberMe: 'Remember Me',
            forgotPasswordTitle: 'Forgot Password',
            forgotPasswordPrompt: 'Enter your email to receive a reset link.',
            sendResetLinkButton: 'Send Reset Link',
            rememberedPassword: 'Remembered your password?',
            resetPasswordTitle: 'Reset Your Password',
            newPassword: 'New Password',
            confirmNewPassword: 'Confirm New Password',
            saveNewPasswordButton: 'Save New Password',
            resetSentTitle: 'Check Your Email',
            resetSentPrompt: 'A password reset link has been sent to {email}.',
            errors: {
                incorrect: 'Password or Email Incorrect',
                exists: 'User already exists. Sign in?',
                mismatch: 'Passwords do not match.',
            },
            verify: {
                title: 'Registration Successful!',
                prompt: 'A verification link has been sent to {email}. Please check your inbox to complete your registration.',
                closeButton: 'Got it'
            },
            header: {
                verifyButton: 'Verify Email',
                resentMessage: 'Email Sent!',
            }
        },
        hero: {
            title_part1: 'Bukhara Sawda',
            title_part2: 'NOBEL LOGISTICS & TRANSIT',
            subtitle: 'Empowering Global Trade Through Strategic Connectivity',
            description: 'Driving Uzbekistan’s integration into international markets with advanced infrastructure, seamless transit operations, and world-class logistics excellence.',
            button: 'Explore Our Services',
        },
        shipmentTracking: {
            title: 'Track Your Shipment',
            placeholder: 'Enter your tracking ID...',
            button: 'Track'
        },
        statistics: {
            experience: 'Years of Experience',
            partners: 'Global Partners',
            shipped: 'Tonnes Shipped Annually',
            delivery: 'On-Time Delivery',
        },
        about: {
            title: 'Pioneering Logistics in the Heart of Central Asia',
            p1: 'Bukhara Sawda – NOBEL LOGISTICS & TRANSIT is a premier logistics provider at the forefront of driving Uzbekistan’s integration into global trade routes. We specialize in creating seamless, efficient, and reliable supply chains that connect Central Asia with markets across the globe, from Europe to the Far East.',
            p2: 'Our mission is to empower businesses by removing logistical barriers. We leverage Uzbekistan\'s strategic geographical advantage, combining it with our state-of-the-art infrastructure, advanced technology, and a dedicated team of experts. This synergy allows us to offer comprehensive transit and logistics services that are second to none.',
            p3: 'From complex project cargo to time-sensitive freight, our commitment to integrity, innovation, and operational excellence ensures we deliver not just goods, but also peace of mind. We are more than a logistics company; we are your strategic partner in navigating the complexities of global commerce.',
        },
        services: {
            title: 'Our Core Logistics Services',
            subtitle: 'We provide end-to-end logistics solutions, tailored to meet the complex demands of modern global trade.',
            readMore: 'Read More',
            list: {
                freightForwarding: {
                    name: 'International Freight Forwarding',
                    description: 'We manage and coordinate shipments across all modes of transport—air, sea, road, and rail—anywhere in the world. Our global network and expertise in customs regulations ensure your cargo moves smoothly and efficiently from origin to destination.',
                },
                warehousing: {
                    name: 'Warehousing & Distribution',
                    description: 'Our state-of-the-art warehousing facilities offer secure storage, inventory management, and order fulfillment services. We provide flexible solutions tailored to your needs, including cross-docking, pick-and-pack, and last-mile delivery.',
                },
                customsBrokerage: {
                    name: 'Customs Brokerage',
                    description: 'Navigating customs can be complex. Our licensed customs brokers are experts in local and international regulations, ensuring timely and compliant clearance for all your shipments, minimizing delays and avoiding penalties.',
                },
                roadRailTransport: {
                    name: 'Road & Rail Transport',
                    description: 'We offer reliable and cost-effective ground transportation solutions across Central Asia and beyond. Our extensive network of road and rail partners provides the flexibility to move full-truckload (FTL) and less-than-truckload (LTL) shipments efficiently.',
                },
                projectCargo: {
                    name: 'Project Cargo Handling',
                    description: 'For oversized, heavy-lift, or high-value cargo, our project logistics team provides specialized planning and execution. We handle every detail, from route surveys and feasibility studies to specialized equipment and on-site management.',
                },
                supplyChainConsulting: {
                    name: 'Supply Chain Consulting',
                    description: 'Leverage our expertise to optimize your supply chain. We analyze your current logistics network to identify inefficiencies, reduce costs, and improve performance, helping you build a more resilient and agile supply chain for the future.',
                },
            },
        },
        dailyShipping: {
            title: 'Daily Shipping Intelligence',
            subtitle: 'Access daily operational reports and leverage AI to get instant summaries and insights.',
            searchPlaceholder: 'Search reports by description...',
            clear: 'Clear',
            selectReportAria: 'Select report: {description}',
            downloadReportAria: 'Download report: {description}',
        },
        aiFeatures: {
            title: 'Harnessing AI for Smarter Logistics',
            subtitle: 'We leverage cutting-edge AI to provide predictive insights, automate complex decisions, and build resilient supply chains.',
            live: 'LIVE',
            trackShipment: 'Track Shipment',
            trackingShipment: 'Tracking...',
            features: [
                { id: 'weather', title: 'AI Weather Route Optimization', description: "Our AI analyzes weather patterns like cyclones, monsoons, and fog to suggest the safest and fastest shipping routes, minimizing delays." },
                { id: 'digitalTwin', title: 'Digital Twin Supply Chain', description: 'We create a live simulation model of your supply chain to predict outcomes, test alternative routes, and manage disruptions proactively.' },
                { id: 'autonomous', title: 'Autonomous Shipment Planning', description: 'AI agents determine the optimal route, container size, carrier, and schedule for each shipment, maximizing efficiency and cost-effectiveness.' },
                { id: 'contracts', title: 'AI-Generated Contracts & Compliance', description: 'Automate freight contracts, delivery terms, and SLAs. Our AI also ensures compliance with international trade regulations.' }
            ],
            weatherAlerts: [
                { id: 'cyclone', title: 'Cyclone Alert', location: 'Indian Ocean', impact: 'Potential delays for routes via Port of Karachi. Rerouting options available.' },
                { id: 'fog', title: 'Heavy Fog Warning', location: 'Port of Shanghai', impact: 'Reduced visibility causing slowdowns in port operations. Expect minor delays.' },
                { id: 'sandstorm', title: 'Sandstorm Advisory', location: 'Suez Canal', impact: 'Reduced visibility. Convoys may be temporarily halted. Check for updates.' }
            ],
            complianceChecks: [
                'ISPS Code Compliance',
                'IMO Dangerous Goods Declaration',
                'SOLAS V Regulation',
                'Customs Documentation (SAD)'
            ],
            mockShipment: {
                trackingId: "NOBEL-UZ-12345",
                statusKey: "IN_TRANSIT",
                currentLocation: "En route to Tashkent",
                origin: "Port of Shanghai, China",
                destination: "Tashkent, Uzbekistan",
                estimatedDelivery: "July 30, 204",
                updates: [
                    { date: "July 24, 2024 - 11:30 AM", status: "Departed from Origin", location: "Port of Shanghai" },
                    { date: "July 22, 2024 - 02:00 PM", status: "Cargo Received", location: "Shanghai Warehouse" },
                ]
            } as ShipmentStatus,
            shipmentJourney: [
                 { statusKey: "AT_PORT", currentLocation: "Port of Shanghai, China", coordinates: { x: 95, y: 50 }, updates: [{ date: "July 24, 2024 - 05:00 PM", status: "Loaded onto Vessel", location: "Port of Shanghai" }, { date: "July 24, 2024 - 11:30 AM", status: "Departed from Origin", location: "Port of Shanghai" }, { date: "July 22, 2024 - 02:00 PM", status: "Cargo Received", location: "Shanghai Warehouse" }] },
                 { statusKey: "IN_TRANSIT", currentLocation: "Approaching Karachi, Pakistan", coordinates: { x: 40, y: 80 }, updates: [{ date: "July 28, 2024 - 09:00 AM", status: "In Transit to Karachi", location: "Arabian Sea" }, { date: "July 24, 2024 - 05:00 PM", status: "Loaded onto Vessel", location: "Port of Shanghai" }, { date: "July 24, 2024 - 11:30 AM", status: "Departed from Origin", location: "Port of Shanghai" }] },
                 { statusKey: "AT_PORT", currentLocation: "Karachi Port, Pakistan", coordinates: { x: 25, y: 78 }, updates: [{ date: "Aug 02, 2024 - 08:00 AM", status: "Arrived at Transit Port", location: "Karachi Port" }, { date: "July 28, 2024 - 09:00 AM", status: "In Transit to Karachi", location: "Arabian Sea" }, { date: "July 24, 2024 - 05:00 PM", status: "Loaded onto Vessel", location: "Port of Shanghai" }] },
                 { statusKey: "IN_TRANSIT", currentLocation: "Onward to Uzbekistan Border", coordinates: { x: 28, y: 50 }, updates: [{ date: "Aug 03, 2024 - 02:30 PM", status: "Departed from Karachi by Rail", location: "Karachi Port" }, { date: "Aug 02, 2024 - 08:00 AM", status: "Arrived at Transit Port", location: "Karachi Port" }, { date: "July 28, 2024 - 09:00 AM", status: "In Transit to Karachi", location: "Arabian Sea" }] },
                 { statusKey: "DELAYED", currentLocation: "Customs Clearance, Termez", coordinates: { x: 25, y: 30 }, updates: [{ date: "Aug 05, 2024 - 10:00 AM", status: "Customs Hold", location: "Termez, Uzbekistan" }, { date: "Aug 03, 2024 - 02:30 PM", status: "Departed from Karachi by Rail", location: "Karachi Port" }, { date: "Aug 02, 2024 - 08:00 AM", status: "Arrived at Transit Port", location: "Karachi Port" }] },
                 { statusKey: "IN_TRANSIT", currentLocation: "Departed from Termez", coordinates: { x: 30, y: 25 }, updates: [{ date: "Aug 06, 2024 - 11:00 AM", status: "Customs Cleared", location: "Termez, Uzbekistan" }, { date: "Aug 05, 2024 - 10:00 AM", status: "Customs Hold", location: "Termez, Uzbekistan" }, { date: "Aug 03, 2024 - 02:30 PM", status: "Departed from Karachi by Rail", location: "Karachi Port" }] },
                 { statusKey: "DELIVERED", currentLocation: "Tashkent, Uzbekistan", estimatedDelivery: "Delivered on Aug 07, 2024", coordinates: { x: 35, y: 20 }, updates: [{ date: "Aug 07, 2024 - 04:00 PM", status: "Delivered", location: "Tashkent, Uzbekistan" }, { date: "Aug 06, 2024 - 11:00 AM", status: "Customs Cleared", location: "Termez, Uzbekistan" }, { date: "Aug 05, 2024 - 10:00 AM", status: "Customs Hold", location: "Termez, Uzbekistan" }] }
            ]
        },
        aiAnalytics: {
            title: 'AI-Powered Logistics Intelligence',
            subtitle: 'Our AI engine analyzes vast datasets to uncover optimization opportunities, predict outcomes, and provide actionable insights for a smarter supply chain.',
            capabilities: [
                { id: 'predictive', title: 'Predictive Delivery ETAs', description: 'AI models analyze historical data, weather, and traffic to forecast delivery times with 95% accuracy.' },
                { id: 'scenario', title: 'Disruption Scenario Testing', description: 'Simulate potential disruptions (e.g., port closures, strikes) to build contingency plans and enhance resilience.' },
                { id: 'capacity', title: 'Dynamic Capacity Planning', description: 'Forecast demand and optimize vessel/vehicle capacity allocation to reduce costs and improve asset utilization.' },
                { id: 'performance', title: 'Carrier Performance Modeling', description: 'Evaluate carrier reliability, transit times, and costs to select the best partners for any given route.' }
            ],
            autonomous: {
                title: 'Autonomous Operations',
                features: ['Automated Route Selection', 'Intelligent Load Balancing', 'Self-Optimizing Schedules', 'Proactive Anomaly Detection']
            },
            performance: {
                title: 'Performance & Business Impact',
                subtitle: 'Quantifiable improvements driven by our AI-powered logistics platform.',
                technical: {
                    title: 'Technical Metrics',
                    metrics: [
                        { name: 'ETA Accuracy', value: 96.4, unit: '%' },
                        { name: 'Route Optimization', value: 18, unit: '% savings' },
                        { name: 'Planning Time', value: 85, unit: '% reduction' },
                        { name: 'Disruption Prediction', value: 99.2, unit: '%' },
                    ],
                },
                business: {
                    title: 'Business Impact',
                    impacts: [
                        { name: 'On-Time Delivery', value: 22, unit: '%' },
                        { name: 'Logistics Cost', value: 15, unit: '%' },
                        { name: 'Customer Satisfaction', value: 30, unit: '%' },
                        { name: 'Asset Utilization', value: 25, unit: '%' },
                    ]
                },
                shipmentVolume: {
                    title: 'Shipment Volume (Last 6 Months)',
                    data: [
                        { month: 'Jan', volume: 120000 },
                        { month: 'Feb', volume: 135000 },
                        { month: 'Mar', volume: 150000 },
                        { month: 'Apr', volume: 145000 },
                        { month: 'May', volume: 160000 },
                        { month: 'Jun', volume: 185000 },
                    ]
                },
                averageDelivery: {
                    title: 'Average Delivery Times',
                    data: [
                        { route: 'Shanghai → TSH', days: 15 },
                        { route: 'Istanbul → TSH', days: 12 },
                        { route: 'Dubai → TSH', days: 8 },
                        { route: 'Karachi → TSH', days: 7 },
                    ]
                },
                predictiveDelivery: {
                    title: 'Predictive Delivery ETAs',
                    metrics: [
                        { id: 'accuracy', label: 'Prediction Accuracy', value: '96.4%' },
                        { id: 'warnings', label: 'Proactive Warnings', value: '58' },
                        { id: 'rerouted', label: 'Shipments Rerouted', value: '12' },
                    ]
                },
                disruptionTesting: {
                    title: 'Disruption Scenario Testing',
                    scenarios: [
                        'Port Congestion Simulation',
                        'Customs Delay Analysis',
                        'Extreme Weather Impact',
                        'Equipment Failure Drills',
                    ]
                }
            }
        },
        whyChooseUs: {
            title: 'Why Partner with Nobel Logistics?',
            subtitle: 'We combine strategic location, modern infrastructure, and cutting-edge technology to offer unparalleled logistics solutions in Central Asia.',
            features: [
                { id: 'location', title: 'Strategic Location', description: 'Situated at the crossroads of Europe and Asia, we provide a crucial gateway for transcontinental trade.' },
                { id: 'infrastructure', title: 'Modern Infrastructure', description: 'State-of-the-art warehousing, container yards, and rail connections to handle any cargo.' },
                { id: 'team', title: 'Expert Team', description: 'Our experienced logistics professionals are dedicated to providing seamless and reliable service.' },
                { id: 'tech', title: 'Technology-Driven', description: 'We leverage AI and modern systems for real-time tracking, efficiency, and transparency.' },
            ]
        },
        footer: {
            about: {
                title: 'About Bukhara Sawda',
                description: 'Your strategic partner in navigating the complexities of global commerce and unlocking the potential of Central Asian trade routes.',
            },
            links: {
                title: 'Useful Links',
                about: 'About Us',
                services: 'Services',
                locations: 'Our Locations',
                contact: 'Contact Us',
            },
            contact: {
                title: 'Contact Info',
                city: 'Bukhara, Uzbekistan',
            },
            newsletter: {
                title: 'Join Our Newsletter',
                description: 'Stay updated with the latest news, insights, and service offerings from Nobel Logistics.',
                placeholder: 'Your email address',
                button: 'Subscribe',
                thankYou: 'Thank you for subscribing',
                invalidEmail: 'Please enter a valid email address.',
            },
            copyright: {
                text: '© {year} Bukhara Sawda – NOBEL LOGISTICS & TRANSIT. All Rights Reserved.',
                legal: 'Legal Notice',
                sitemap: 'Sitemap',
            }
        },
        trackingModal: {
            title: 'Shipment Status',
            status: 'Status',
            currentLocation: 'Current Location',
            origin: 'Origin',
            destination: 'Destination',
            estimatedDelivery: 'Estimated Delivery',
            history: 'Shipment History',
            close: 'Close',
            routeMap: 'Live Route Map',
            getLocationInfo: 'Get Location Insights',
            locationInsightsTitle: 'Live Location Insights',
            groundingSources: 'Information Sources',
            statuses: {
                IN_TRANSIT: 'In Transit',
                DELIVERED: 'Delivered',
                DELAYED: 'Delayed',
                AT_PORT: 'At Port',
            }
        }
    },
    ru: {
        comingSoon: 'Эта страница предназначена для демонстрационных целей и пока недоступна.',
        header: {
            about: 'О НАС',
            services: {
                title: 'УСЛУГИ',
                freight: 'Экспедирование грузов',
                warehousing: 'Складские услуги и дистрибуция',
                customs: 'Таможенное оформление',
                transport: 'Автомобильные и ж/д перевозки',
            },
            operations: 'ОПЕРАЦИИ',
            industries: 'ОТРАСЛИ',
            media: {
                title: 'МЕДИА ЦЕНТР',
                news: 'Новости',
                notices: 'Уведомления',
                careers: 'Карьера',
            },
            locations: {
                title: 'ЛОКАЦИИ',
                hub: 'Узбекский Хаб',
                network: 'Сеть в СНГ',
                partners: 'Глобальные партнеры',
            },
            contact: 'КОНТАКТЫ',
        },
        auth: {
            login: 'Вход',
            signUp: 'Регистрация',
            logout: 'Выйти',
            email: 'Адрес электронной почты',
            password: 'Пароль',
            repeatPassword: 'Повторите пароль',
            loginTitle: 'Войдите в свой аккаунт',
            signUpTitle: 'Создать новый аккаунт',
            loginButton: 'Войти',
            signUpButton: 'Создать аккаунт',
            switchToSignUp: 'У вас нет аккаунта?',
            switchToLogin: 'Уже есть аккаунт?',
            forgotPassword: 'Забыли пароль?',
            rememberMe: 'Запомнить меня',
            forgotPasswordTitle: 'Забыли пароль',
            forgotPasswordPrompt: 'Введите ваш email для получения ссылки на сброс пароля.',
            sendResetLinkButton: 'Отправить ссылку',
            rememberedPassword: 'Вспомнили пароль?',
            resetPasswordTitle: 'Сброс вашего пароля',
            newPassword: 'Новый пароль',
            confirmNewPassword: 'Подтвердите новый пароль',
            saveNewPasswordButton: 'Сохранить новый пароль',
            resetSentTitle: 'Проверьте вашу почту',
            resetSentPrompt: 'Ссылка для сброса пароля отправлена на {email}.',
            errors: {
                incorrect: 'Неверный пароль или email',
                exists: 'Пользователь уже существует. Войти?',
                mismatch: 'Пароли не совпадают.',
            },
            verify: {
                title: 'Регистрация успешна!',
                prompt: 'Ссылка для подтверждения была отправлена на {email}. Пожалуйста, проверьте свой почтовый ящик, чтобы завершить регистрацию.',
                closeButton: 'Понятно'
            },
            header: {
                verifyButton: 'Подтвердить Email',
                resentMessage: 'Email отправлен!',
            }
        },
        hero: {
            title_part1: 'Bukhara Sawda',
            title_part2: 'NOBEL LOGISTICS & TRANSIT',
            subtitle: 'Расширяя возможности глобальной торговли через стратегическое сообщение',
            description: 'Способствуем интеграции Узбекистана в международные рынки благодаря передовой инфраструктуре, бесперебойным транзитным операциям и логистическому совершенству мирового класса.',
            button: 'Наши Услуги',
        },
        shipmentTracking: {
            title: 'Отследить ваш груз',
            placeholder: 'Введите номер отслеживания...',
            button: 'Отследить'
        },
        statistics: {
            experience: 'Лет опыта',
            partners: 'Глобальных партнеров',
            shipped: 'Тонн грузов в год',
            delivery: 'Доставка в срок',
        },
        about: {
            title: 'Новаторская логистика в сердце Центральной Азии',
            p1: 'Bukhara Sawda – NOBEL LOGISTICS & TRANSIT — ведущий поставщик логистических услуг, способствующий интеграции Узбекистана в глобальные торговые маршруты. Мы специализируемся на создании бесперебойных, эффективных и надежных цепочек поставок, соединяющих Центральную Азию с рынками по всему миру, от Европы до Дальнего Востока.',
            p2: 'Наша миссия — расширять возможности бизнеса, устраняя логистические барьеры. Мы используем стратегическое географическое преимущество Узбекистана, сочетая его с нашей современной инфраструктурой, передовыми технологиями и преданной командой экспертов. Эта синергия позволяет нам предлагать комплексные транзитные и логистические услуги, не имеющие аналогов.',
            p3: 'От сложных проектных грузов до срочных перевозок, наша приверженность честности, инновациям и операционному совершенству гарантирует, что мы доставляем не только товары, но и спокойствие. Мы больше, чем логистическая компания; мы — ваш стратегический партнер в навигации по сложностям мировой торговли.',
        },
        services: {
            title: 'Наши основные логистические услуги',
            subtitle: 'Мы предоставляем комплексные логистические решения, адаптированные для удовлетворения сложных требований современной мировой торговли.',
            readMore: 'Подробнее',
            list: {
                freightForwarding: {
                    name: 'Международные грузоперевозки',
                    description: 'Мы управляем и координируем перевозки всеми видами транспорта — воздушным, морским, автомобильным и железнодорожным — в любую точку мира. Наша глобальная сеть и опыт в таможенном законодательстве обеспечивают беспрепятственное и эффективное перемещение вашего груза от пункта отправления до пункта назначения.',
                },
                warehousing: {
                    name: 'Складские услуги и дистрибуция',
                    description: 'Наши современные складские комплексы предлагают безопасное хранение, управление запасами и услуги по выполнению заказов. Мы предоставляем гибкие решения, адаптированные к вашим потребностям, включая кросс-докинг, комплектацию заказов и доставку «последней мили».',
                },
                customsBrokerage: {
                    name: 'Таможенное оформление',
                    description: 'Процесс таможенного оформления может быть сложным. Наши лицензированные таможенные брокеры являются экспертами в местных и международных правилах, обеспечивая своевременное и соответствующее требованиям оформление всех ваших грузов, минимизируя задержки и избегая штрафов.',
                },
                roadRailTransport: {
                    name: 'Автомобильные и ж/д перевозки',
                    description: 'Мы предлагаем надежные и экономичные решения по наземной транспортировке по Центральной Азии и за ее пределами. Наша обширная сеть автомобильных и железнодорожных партнеров обеспечивает гибкость для эффективного перемещения полных (FTL) и сборных (LTL) грузов.',
                },
                projectCargo: {
                    name: 'Обработка проектных грузов',
                    description: 'Для крупногабаритных, тяжеловесных или дорогостоящих грузов наша команда по проектной логистике обеспечивает специализированное планирование и выполнение. Мы занимаемся каждой деталью, от обследования маршрутов и технико-экономических обоснований до специализированного оборудования и управления на месте.',
                },
                supplyChainConsulting: {
                    name: 'Консалтинг по цепочкам поставок',
                    description: 'Воспользуйтесь нашим опытом для оптимизации вашей цепочки поставок. Мы анализируем вашу текущую логистическую сеть для выявления неэффективности, снижения затрат и повышения производительности, помогая вам построить более устойчивую и гибкую цепочку поставок на будущее.',
                },
            },
        },
        dailyShipping: {
            title: 'Ежедневная информация о доставке',
            subtitle: 'Получите доступ к ежедневным операционным отчетам и используйте ИИ для мгновенных сводок и аналитики.',
            searchPlaceholder: 'Поиск отчетов по описанию...',
            clear: 'Очистить',
            selectReportAria: 'Выбрать отчет: {description}',
            downloadReportAria: 'Скачать отчет: {description}',
        },
        aiFeatures: {
            title: 'Использование ИИ для умной логистики',
            subtitle: 'Мы используем передовой ИИ для предоставления прогнозной аналитики, автоматизации сложных решений и создания устойчивых цепочек поставок.',
            live: 'LIVE',
            trackShipment: 'Отследить груз',
            trackingShipment: 'Отслеживание...',
            features: [
                { id: 'weather', title: 'Оптимизация маршрутов с помощью ИИ-погоды', description: 'Наш ИИ анализирует погодные условия, такие как циклоны, муссоны и туман, чтобы предложить самые безопасные и быстрые маршруты доставки, минимизируя задержки.' },
                { id: 'digitalTwin', title: 'Цифровой двойник цепочки поставок', description: 'Мы создаем симуляционную модель вашей цепочки поставок в реальном времени для прогнозирования результатов, тестирования альтернативных маршрутов и проактивного управления сбоями.' },
                { id: 'autonomous', title: 'Автономное планирование перевозок', description: 'ИИ-агенты определяют оптимальный маршрут, размер контейнера, перевозчика и расписание для каждой отправки, максимизируя эффективность и рентабельность.' },
                { id: 'contracts', title: 'ИИ-генерация контрактов и соответствие', description: 'Автоматизируйте контракты на перевозку, условия поставки и SLA. Наш ИИ также обеспечивает соответствие международным торговым нормам.' }
            ],
            weatherAlerts: [
                { id: 'cyclone', title: 'Предупреждение о циклоне', location: 'Индийский океан', impact: 'Возможны задержки на маршрутах через порт Карачи. Доступны варианты перенаправления.' },
                { id: 'fog', title: 'Предупреждение о густом тумане', location: 'Порт Шанхая', impact: 'Снижение видимости вызывает замедление работы порта. Ожидаются незначительные задержки.' },
                { id: 'sandstorm', title: 'Предупреждение о песчаной буре', location: 'Суэцкий канал', impact: 'Снижение видимости. Движение конвоев может быть временно остановлено. Следите за обновлениями.' }
            ],
            complianceChecks: [
                'Соответствие кодексу ОСПС',
                'Декларация МОПОГ',
                'Правило V конвенции СОЛАС',
                'Таможенная документация (SAD)'
            ],
            mockShipment: {
                trackingId: "NOBEL-UZ-12345",
                statusKey: "IN_TRANSIT",
                currentLocation: "В пути в Ташкент",
                origin: "Порт Шанхай, Китай",
                destination: "Ташкент, Узбекистан",
                estimatedDelivery: "30 июля 2024",
                updates: [
                    { date: "24 июля 2024 - 11:30", status: "Отправлено из пункта отправления", location: "Порт Шанхай" },
                    { date: "22 июля 2024 - 14:00", status: "Груз получен", location: "Склад в Шанхае" },
                ]
            } as ShipmentStatus,
            shipmentJourney: [
                { statusKey: "AT_PORT", currentLocation: "Порт Шанхай, Китай", coordinates: { x: 95, y: 50 }, updates: [{ date: "24 июля 2024 - 17:00", status: "Погружено на судно", location: "Порт Шанхай" }, { date: "24 июля 2024 - 11:30", status: "Отправлено из пункта отправления", location: "Порт Шанхай" }, { date: "22 июля 2024 - 14:00", status: "Груз получен", location: "Склад в Шанхае" }] },
                { statusKey: "IN_TRANSIT", currentLocation: "Приближается к Карачи, Пакистан", coordinates: { x: 40, y: 80 }, updates: [{ date: "28 июля 2024 - 09:00", status: "В пути в Карачи", location: "Аравийское море" }, { date: "24 июля 2024 - 17:00", status: "Погружено на судно", location: "Порт Шанхай" }, { date: "24 июля 2024 - 11:30", status: "Отправлено из пункта отправления", location: "Порт Шанхай" }] },
                { statusKey: "AT_PORT", currentLocation: "Порт Карачи, Пакистан", coordinates: { x: 25, y: 78 }, updates: [{ date: "02 авг 2024 - 08:00", status: "Прибыло в транзитный порт", location: "Порт Карачи" }, { date: "28 июля 2024 - 09:00", status: "В пути в Карачи", location: "Аравийское море" }, { date: "24 июля 2024 - 17:00", status: "Погружено на судно", location: "Порт Шанхай" }] },
                { statusKey: "IN_TRANSIT", currentLocation: "Далее к границе Узбекистана", coordinates: { x: 28, y: 50 }, updates: [{ date: "03 авг 2024 - 14:30", status: "Отправлено из Карачи по ж/д", location: "Порт Карачи" }, { date: "02 авг 2024 - 08:00", status: "Прибыло в транзитный порт", location: "Порт Карачи" }, { date: "28 июля 2024 - 09:00", status: "В пути в Карачи", location: "Аравийское море" }] },
                { statusKey: "DELAYED", currentLocation: "Таможенное оформление, Термез", coordinates: { x: 25, y: 30 }, updates: [{ date: "05 авг 2024 - 10:00", status: "Задержано на таможне", location: "Термез, Узбекистан" }, { date: "03 авг 2024 - 14:30", status: "Отправлено из Карачи по ж/д", location: "Порт Карачи" }, { date: "02 авг 2024 - 08:00", status: "Прибыло в транзитный порт", location: "Порт Карачи" }] },
                { statusKey: "IN_TRANSIT", currentLocation: "Отправлено из Термеза", coordinates: { x: 30, y: 25 }, updates: [{ date: "06 авг 2024 - 11:00", status: "Таможенное оформление завершено", location: "Термез, Узбекистан" }, { date: "05 авг 2024 - 10:00", status: "Задержано на таможне", location: "Термез, Узбекистан" }, { date: "03 авг 2024 - 14:30", status: "Отправлено из Карачи по ж/д", location: "Порт Карачи" }] },
                { statusKey: "DELIVERED", currentLocation: "Ташкент, Узбекистан", estimatedDelivery: "Доставлено 07 авг 2024", coordinates: { x: 35, y: 20 }, updates: [{ date: "07 авг 2024 - 16:00", status: "Доставлено", location: "Ташкент, Узбекистан" }, { date: "06 авг 2024 - 11:00", status: "Таможенное оформление завершено", location: "Термез, Узбекистан" }, { date: "05 авг 2024 - 10:00", status: "Задержано на таможне", location: "Термез, Узбекистан" }] }
           ]
        },
        aiAnalytics: {
            title: 'Логистическая аналитика на базе ИИ',
            subtitle: 'Наш ИИ-движок анализирует огромные наборы данных для выявления возможностей оптимизации, прогнозирования результатов и предоставления действенных инсайтов для более умной цепочки поставок.',
            capabilities: [
                { id: 'predictive', title: 'Прогнозирование ETA доставки', description: 'ИИ-модели анализируют исторические данные, погоду и трафик для прогнозирования времени доставки с точностью 95%.' },
                { id: 'scenario', title: 'Тестирование сценариев сбоев', description: 'Симулируйте возможные сбои (например, закрытие портов, забастовки) для создания планов на случай непредвиденных обстоятельств и повышения устойчивости.' },
                { id: 'capacity', title: 'Динамическое планирование мощностей', description: 'Прогнозируйте спрос и оптимизируйте распределение мощностей судов/транспортных средств для снижения затрат и улучшения использования активов.' },
                { id: 'performance', title: 'Моделирование производительности перевозчиков', description: 'Оценивайте надежность перевозчиков, время в пути и затраты для выбора лучших партнеров для любого заданного маршрута.' }
            ],
            autonomous: {
                title: 'Автономные операции',
                features: ['Автоматический выбор маршрута', 'Интеллектуальная балансировка нагрузки', 'Самооптимизирующиеся расписания', 'Проактивное обнаружение аномалий']
            },
            performance: {
                title: 'Производительность и влияние на бизнес',
                subtitle: 'Количественные улучшения, обусловленные нашей логистической платформой на базе ИИ.',
                technical: {
                    title: 'Технические метрики',
                    metrics: [
                        { name: 'Точность ETA', value: 96.4, unit: '%' },
                        { name: 'Оптимизация маршрута', value: 18, unit: '% экономии' },
                        { name: 'Время планирования', value: 85, unit: '% сокращения' },
                        { name: 'Прогнозирование сбоев', value: 99.2, unit: '%' },
                    ],
                },
                business: {
                    title: 'Влияние на бизнес',
                    impacts: [
                        { name: 'Своевременная доставка', value: 22, unit: '%' },
                        { name: 'Стоимость логистики', value: 15, unit: '%' },
                        { name: 'Удовлетворенность клиентов', value: 30, unit: '%' },
                        { name: 'Использование активов', value: 25, unit: '%' },
                    ]
                },
                shipmentVolume: {
                    title: 'Объем перевозок (за 6 мес.)',
                    data: [
                        { month: 'Янв', volume: 120000 },
                        { month: 'Фев', volume: 135000 },
                        { month: 'Мар', volume: 150000 },
                        { month: 'Апр', volume: 145000 },
                        { month: 'Май', volume: 160000 },
                        { month: 'Июн', volume: 185000 },
                    ]
                },
                averageDelivery: {
                    title: 'Среднее время доставки',
                    data: [
                        { route: 'Шанхай → ТШК', days: 15 },
                        { route: 'Стамбул → ТШК', days: 12 },
                        { route: 'Дубай → ТШК', days: 8 },
                        { route: 'Карачи → ТШК', days: 7 },
                    ]
                },
                predictiveDelivery: {
                    title: 'Прогнозные ETA доставки',
                    metrics: [
                        { id: 'accuracy', label: 'Точность прогноза', value: '96.4%' },
                        { id: 'warnings', label: 'Проактивные предупреждения', value: '58' },
                        { id: 'rerouted', label: 'Перенаправленные грузы', value: '12' },
                    ]
                },
                disruptionTesting: {
                    title: 'Тестирование сценариев сбоев',
                    scenarios: [
                        'Симуляция загруженности порта',
                        'Анализ таможенных задержек',
                        'Влияние экстремальной погоды',
                        'Учения по отказу оборудования',
                    ]
                }
            }
        },
        whyChooseUs: {
            title: 'Почему стоит сотрудничать с Nobel Logistics?',
            subtitle: 'Мы сочетаем стратегическое расположение, современную инфраструктуру и передовые технологии, чтобы предложить непревзойденные логистические решения в Центральной Азии.',
            features: [
                { id: 'location', title: 'Стратегическое расположение', description: 'Находясь на перекрестке Европы и Азии, мы предоставляем ключевые ворота для трансконтинентальной торговли.' },
                { id: 'infrastructure', title: 'Современная инфраструктура', description: 'Современные склады, контейнерные площадки и железнодорожные сообщения для обработки любых грузов.' },
                { id: 'team', title: 'Команда экспертов', description: 'Наши опытные специалисты по логистике нацелены на предоставление безупречного и надежного сервиса.' },
                { id: 'tech', title: 'Технологический подход', description: 'Мы используем ИИ и современные системы для отслеживания в реальном времени, эффективности и прозрачности.' },
            ]
        },
        footer: {
            about: {
                title: 'О Bukhara Sawda',
                description: 'Ваш стратегический партнер в навигации по сложностям мировой торговли и раскрытии потенциала торговых маршрутов Центральной Азии.',
            },
            links: {
                title: 'Полезные ссылки',
                about: 'О нас',
                services: 'Услуги',
                locations: 'Наши локации',
                contact: 'Связаться с нами',
            },
            contact: {
                title: 'Контактная информация',
                city: 'Бухара, Узбекистан',
            },
            newsletter: {
                title: 'Подпишитесь на нашу рассылку',
                description: 'Будьте в курсе последних новостей, аналитики и предложений услуг от Nobel Logistics.',
                placeholder: 'Ваш адрес электронной почты',
                button: 'Подписаться',
                thankYou: 'Спасибо за подписку',
                invalidEmail: 'Пожалуйста, введите действительный адрес электронной почты.',
            },
            copyright: {
                text: '© {year} Bukhara Sawda – NOBEL LOGISTICS & TRANSIT. Все права защищены.',
                legal: 'Правовая информация',
                sitemap: 'Карта сайта',
            }
        },
        trackingModal: {
            title: 'Статус отправления',
            status: 'Статус',
            currentLocation: 'Текущее местоположение',
            origin: 'Пункт отправления',
            destination: 'Пункт назначения',
            estimatedDelivery: 'Ожидаемая дата доставки',
            history: 'История отправления',
            close: 'Закрыть',
            routeMap: 'Карта маршрута в реальном времени',
            getLocationInfo: 'Получить информацию о местоположении',
            locationInsightsTitle: 'Информация о местоположении в реальном времени',
            groundingSources: 'Источники информации',
            statuses: {
                IN_TRANSIT: 'В пути',
                DELIVERED: 'Доставлено',
                DELAYED: 'Задерживается',
                AT_PORT: 'В порту',
            }
        }
    }
};