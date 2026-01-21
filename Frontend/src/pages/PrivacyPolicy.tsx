import { Header as Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Helmet>
                <title>Privacy Policy | Academy of Tech Masters</title>
                <meta
                    name="description"
                    content="Privacy Policy for Academy of Tech Masters. Learn how we collect, use, and protect your personal information."
                />
            </Helmet>
            <Navbar />
            <div className="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
                        Privacy Policy
                    </h1>

                    <div className="prose prose-slate max-w-none text-slate-600">
                        <p className="lead text-lg mb-6">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>

                        <p className="mb-6">
                            Welcome to Academy of Tech Masters ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>aotms.in</strong> and use our educational services.
                        </p>

                        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">1. Information We Collect</h2>
                        <p className="mb-4">
                            We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact data.</li>
                            <li><strong>Credentials:</strong> Passwords, password hints, and similar security information used for authentication and account access.</li>
                            <li><strong>Payment Data:</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by our payment processor and you should review its privacy policies and contact the payment processor directly to respond to your questions.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">2. How We Use Your Information</h2>
                        <p className="mb-4">
                            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>To facilitate account creation and logon process.</li>
                            <li>To send administrative information to you.</li>
                            <li>To fulfill and manage your orders.</li>
                            <li>To post testimonials.</li>
                            <li>To request feedback.</li>
                            <li>To send you marketing and promotional communications.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">3. Sharing Your Information</h2>
                        <p className="mb-4">
                            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                            <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                            <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
                        <p className="mb-6">
                            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                        </p>

                        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">5. Data Security</h2>
                        <p className="mb-6">
                            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                        </p>

                        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">6. Contact Us</h2>
                        <p className="mb-4">
                            If you have questions or comments about this policy, you may email us at <a href="mailto:info@aotms.in" className="text-blue-600 hover:underline">info@aotms.in</a> or by post to:
                        </p>
                        <address className="not-italic bg-slate-50 p-6 rounded-lg border border-slate-100">
                            <strong>Academy of Tech Masters</strong><br />
                            Vijayawada,<br />
                            Andhra Pradesh 520010,<br />
                            India
                        </address>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
