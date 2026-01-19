import React from "react";

export const getCourseCustomContent = (title: string, category: string = "") => {
    const search = (title + " " + category).toLowerCase().trim();

    // Data Analytics specific introduction
    if (search.includes("data analytics") || search.includes("data analy")) {
        return [
            {
                type: "about_us",
                title: "ABOUT",
                content: {
                    heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform careers. Our mission is to equip aspiring IT professionals in Vijayawada with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "data_analytics_introduction",
                title: "DATA ANALYTICS",
                content: {
                    heading: "Data Analytics",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">Data Analytics</span> is the process of collecting, analyzing, Visualizing and interpreting data to discover useful insights, patterns, and trends. Our Vijayawada-based course helps organizations make smart, data-driven decisions.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                In today's digital world, every business generates a large amount of data. By using data analytics, companies can improve efficiency, predict future trends, understand customer behavior, and increase profitability.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Cyber Security specific introduction
    if (search.includes("cyber") || search.includes("security")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals in Vijayawada with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },

            {
                type: "cyber_security_introduction",
                title: "CYBER SECURITY",
                content: {
                    heading: "Cyber Security",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">Cyber Security</span> is the practice of protecting computers, networks, servers, and data from unauthorized access. Our Cyber Security training in Vijayawada prepares you for these challenges.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                Cyber Security helps prevent data breaches, identity theft, and financial loss by using advanced tools, encryption, and monitoring systems. It ensures that information remains private, systems stay secure, and digital operations run smoothly and safely.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Python Full Stack specific introduction
    if (search.includes("python") && search.includes("full stack")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform careers. Our mission is to equip aspiring IT professionals in Vijayawada with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "python_fullstack_introduction",
                title: "PYTHON FULL STACK",
                content: {
                    heading: "Python Full Stack",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">Python Full Stack</span> Development refers to building complete web applications. Our Python Full Stack training in Vijayawada covers both frontend and backend development.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                Python is widely used because it\u2019s easy to learn, powerful, and supports many frameworks like Django and Flask that make web development faster and more efficient.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need Python Full Stack to create dynamic, user-friendly, and scalable web applications — all using one language from start to finish.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Data Science specific introduction
    if (search.includes("data science")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship. Join the best training in Vijayawada."
                }
            },
            {
                type: "data_science_introduction",
                title: "DATA SCIENCE",
                content: {
                    heading: "Data Science",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">Data Science</span> is the field of analyzing large amounts of data to uncover patterns. Join our Data Science course in Vijayawada to master tools like Python, R, SQL, and Machine Learning.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need Data Science because it helps businesses and organizations make smarter, data-driven decisions, predict future outcomes, and solve complex real-world problems.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // DevOps Multi-Cloud Engineering specific introduction
    if (search.includes("devops")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform careers. Our mission is to equip aspiring IT professionals in Vijayawada with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "devops_multicloud_introduction",
                title: "DEVOPS MULTI-CLOUD ENGINEERING",
                content: {
                    heading: "DevOps & Multi-Cloud Engineering",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">DevOps</span> combines Development and Operations. Our DevOps training in Vijayawada helps teams build, test, and deploy software faster.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                <span className="font-bold text-blue-900">Multi-Cloud Engineering</span> involves using multiple cloud platforms (like <span className="font-bold">AWS, Azure, and Google Cloud</span>) together to run applications. It provides flexibility, reduces dependency on one provider, and improves performance and reliability.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // QA Automation specific introduction
    if (search.includes("qa") || search.includes("testing") || search.includes("automation")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals in Vijayawada with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "qa_automation_introduction",
                title: "QA AUTOMATION",
                content: {
                    heading: "QA Automation & SDET",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">QA Automation</span> involves using specialized tools. Our QA Automation course in Vijayawada ensures you master modern software testing.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                As an <span className="font-bold text-blue-900">SDET (Software Development Engineer in Test)</span>, you don't just find bugs\u2014you write code to prevent them. You will master tools like <span className="font-bold">Selenium, Java, and Jenkins</span> to build robust testing frameworks that integrate seamlessly with DevOps pipelines.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Embedded Systems specific introduction
    if (search.includes("embedded")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals in Vijayawada with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "embedded_introduction",
                title: "EMBEDDED SYSTEMS",
                content: {
                    heading: "Embedded Systems",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">Embedded Systems</span> are specialized computer systems. Our Embedded Systems training in Vijayawada covers hardware and software integration.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need <span className="font-bold text-blue-900">Embedded Systems</span> to automate processes, improve performance, reduce human effort, and make devices smarter and more efficient.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Multi-Cloud Engineering specific introduction
    if (search.includes("multi") && search.includes("cloud") && search.includes("engineering")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals in Vijayawada with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "multicloud_engineering_introduction",
                title: "MULTI-CLOUD ENGINEERING",
                content: {
                    heading: "Data Engineering & Multi-Cloud Development",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">Data Engineering</span> is the process of designing systems for data. Learn Data Engineering in Vijayawada to build efficient data pipelines.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                <span className="font-bold text-blue-900">Multi-Cloud Development</span> involves using multiple cloud platforms \u2013 such as <span className="font-bold">AWS, Azure, and Google Cloud</span> \u2013 to deploy and manage applications. This approach offers flexibility, reduces downtime, and prevents dependency on a single cloud provider.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Quantum Computing specific introduction
    if (search.includes("quantum")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals in Vijayawada with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "quantum_introduction",
                title: "QUANTUM COMPUTING",
                content: {
                    heading: "Quantum Computing",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">Quantum Computing</span> uses quantum physics to process information. Join our Quantum Computing course in Vijayawada to learn about qubits and advanced calculations.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need <span className="font-bold text-blue-900">Quantum Computing</span> to solve problems that are too difficult for classical computers, such as drug discovery, climate modeling, cryptography, and artificial intelligence optimization.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Multi-Cloud Consultant specific introduction
    if (search.includes("multi") && search.includes("cloud") && search.includes("consultant")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals in Vijayawada with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "multicloud_introduction",
                title: "MULTI-CLOUD CONSULTANT",
                content: {
                    heading: "Multi-Cloud Consultant Professional",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                A <span className="font-bold text-blue-900">Multi-Cloud Consultant Professional</span> helps organizations optimize cloud systems. Our training in Vijayawada covers AWS, Azure, and Google Cloud.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need <span className="font-bold text-blue-900">Multi-Cloud Consultants</span> because most businesses today use more than one cloud service. Managing multiple platforms requires specialized knowledge to improve performance, security, and scalability.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // MERN Stack specific introduction
    if (search.includes("mern")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals in Vijayawada with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "mern_introduction",
                title: "MERN STACK",
                content: {
                    heading: "MERN Full Stack",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">MERN Full Stack</span> is a popular web technology. Our MERN Stack course in Vijayawada teaches you MongoDB, Express.js, React.js, and Node.js.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need MERN Stack because it uses a single language, JavaScript, for the entire development process, making it faster, efficient, and easier to maintain. It allows developers to create powerful, scalable, and high-performance web applications.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // MEAN Stack specific introduction
    if (search.includes("mean")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals in Vijayawada with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "mean_stack_introduction",
                title: "MEAN STACK",
                content: {
                    title: "MEAN STACK",
                    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=600&fit=crop", // Tech/Code image
                    description: (
                        <>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                <strong className="text-slate-900 font-bold">MEAN STACK</strong> is a collection of JavaScript-based technologies. Our MEAN Stack training in Vijayawada covers MongoDB, Express.js, Angular, and Node.js.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We need MEAN Stack because it allows developers to use one language <strong className="text-slate-900 font-bold">JavaScript</strong> for the entire development process, making it faster, more efficient, and easier to maintain.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // AI & ML Introduction
    if (search.includes("artificial") || (search.includes("machine") && search.includes("learning"))) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals in Vijayawada with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "ai_ml_introduction",
                title: "Artificial Intelligence (AI) & Machine Learning",
                content: {
                    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80", // AI Robot placeholder
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed mb-4 text-base sm:text-lg">
                                <strong className="text-[#0075CF] font-black">Artificial Intelligence (AI)</strong> enables machines to think like humans. Our AI & ML training in Vijayawada empowers you to master these technologies.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need <strong className="text-[#0075CF] font-black">AI</strong> and <strong className="text-[#0075CF] font-black">ML</strong> to make systems smarter, automate repetitive tasks, predict outcomes, and help in areas like healthcare, finance, education, and robotics.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    // Java Full Stack Introduction
    if (search.includes("java")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals in Vijayawada with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "java_fullstack_introduction",
                title: "Java Full Stack",
                content: {
                    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80", // Coding laptop placeholder
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed mb-4 text-base sm:text-lg">
                                <strong className="text-[#E76F00] font-black">Java Full Stack</strong> Development refers to building complete web applications. Our Java Full Stack course in Vijayawada covers everything from frontend to backend.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need Java Full Stack because it allows developers to work on both frontend and backend using a single programming language, ensuring better integration, faster development, and easier maintenance.
                            </p>
                        </>
                    )
                }
            }
        ];
    }

    if (search.includes("ui") && search.includes("ux")) {
        return [
            {
                type: "about_us",
                title: "ABOUT US",
                content: {
                    heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                    text: "At Academy of Tech Masters, we believe that the right skills can transform into Professional careers. Our mission is to equip aspiring IT professionals in Vijayawada with job-ready expertise through hands-on training, live projects, and expert mentorship."
                }
            },
            {
                type: "ui_ux_highlight",
                title: "UI/UX DESIGN",
                content: {
                    badge: "UI",
                    description: (
                        <>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                                <span className="font-bold text-blue-900">UI (User Interface)</span> and{' '}
                                <span className="font-bold text-blue-900">UX (User Experience)</span>{' '}
                                Design. Join our UI/UX training in Vijayawada to create visually appealing and user-friendly digital products.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                We need UI/UX Design & Development to make applications more user-friendly, engaging, and efficient, ensuring that users enjoy a smooth and satisfying digital experience.
                            </p>
                        </>
                    ),
                    keyPoints: [
                        {
                            title: "Visual Appeal",
                            sub: "Creating aesthetically pleasing interfaces",
                            iconColor: "bg-blue-600",
                            bgGradient: "from-blue-50 to-blue-100",
                            borderColor: "border-blue-200"
                        },
                        {
                            title: "User Experience",
                            sub: "Ensuring smooth and intuitive interactions",
                            iconColor: "bg-purple-600",
                            bgGradient: "from-purple-50 to-purple-100",
                            borderColor: "border-purple-200"
                        },
                        {
                            title: "Engagement",
                            sub: "Keeping users interested and satisfied",
                            iconColor: "bg-green-600",
                            bgGradient: "from-green-50 to-green-100",
                            borderColor: "border-green-200"
                        },
                        {
                            title: "Efficiency",
                            sub: "Streamlining user workflows and tasks",
                            iconColor: "bg-orange-600",
                            bgGradient: "from-orange-50 to-orange-100",
                            borderColor: "border-orange-200"
                        }
                    ]
                }
            }
        ];
    }

    // Default "About" section for all other courses (COMMON SECTION)
    return [
        {
            type: "about_us",
            title: "ABOUT US",
            content: {
                heading: "Learn from Industry Professionals in Vijayawada with 10+ Years of Experience",
                text: "At Academy of Tech Masters, we believe that the right skills can transform careers. Our mission is to equip aspiring IT professionals with job-ready expertise through hands-on training, live projects, and expert mentorship. We are the leading IT training institute in Vijayawada."
            }
        }
    ];
};
