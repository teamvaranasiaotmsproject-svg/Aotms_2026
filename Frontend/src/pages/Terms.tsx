import { Header as Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Helmet>
                <title>Terms of Service | Academy of Tech Masters</title>
                <meta
                    name="description"
                    content="Terms of Service for Academy of Tech Masters. Please read these terms carefully before using our services."
                />
            </Helmet>
            <Navbar />
            <div className="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
                        Terms of Service
                    </h1>

                    <div className="prose prose-slate max-w-none text-slate-600">
                        <p className="lead text-lg mb-6">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>

                        <p className="mb-6">
                            These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Academy of Tech Masters ("we," "us" or "our"), concerning your access to and use of the <strong>aotms.in</strong> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                        </p>

                        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">1. Agreement to Terms</h2>
                        <p className="mb-6">
                            By accessing the Site, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                        </p>

                        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">2. Intellectual Property Rights</h2>
                        <p className="mb-6">
                            Unless otherwise indicated, the Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by us, our licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>

                        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">3. User Representations</h2>
                        <p className="mb-4">
                            By using the Site, you represent and warrant that:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>All registration information you submit will be true, accurate, current, and complete.</li>
                            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                            <li>You are not a minor in the jurisdiction in which you reside.</li>
                            <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">4. Educational Services</h2>
                        <p className="mb-6">
                            We provide educational courses and training programs. While we strive to provide high-quality content, we do not guarantee specific employment outcomes solely based on the completion of our courses, unless explicitly stated in a specific program's guarantee terms.
                        </p>

                        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">5. Modifications and Interruptions</h2>
                        <p className="mb-6">
                            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Services without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site or the Services.
                        </p>

                        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">6. Governing Law</h2>
                        <p className="mb-6">
                            These Terms shall be governed by and defined following the laws of India. Academy of Tech Masters and yourself irrevocably consent that the courts of Andhra Pradesh shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>

                        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">7. Contact Us</h2>
                        <p className="mb-4">
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        </p>
                        <address className="not-italic bg-slate-50 p-6 rounded-lg border border-slate-100">
                            <strong>Academy of Tech Masters</strong><br />
                            Vijayawada,<br />
                            Andhra Pradesh 520010,<br />
                            India<br />
                            <a href="mailto:info@aotms.in" className="text-blue-600 hover:underline mt-2 inline-block">info@aotms.in</a>
                        </address>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Terms;
