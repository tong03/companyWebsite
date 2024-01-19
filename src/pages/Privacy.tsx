// src/pages/Privacy.tsx
import React from 'react';
import '../css/DefaultFooterPage.css';

const Privacy: React.FC = () => {
    return (
        <div className="page-content">
            <h1>Privacy Policy</h1>
            <p>
                This Privacy Policy outlines how Coditioning ("we", "us", or "our") collects, uses, and protects your personal information when you use our coding platform or apply for jobs through our platform. We are committed to ensuring that your privacy is protected in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>

            <h2>Information We Collect</h2>
            <p>
                We may collect personal information, such as your name, email address, and other information you voluntarily provide when registering for an account, applying for jobs, or using our services. This may include your CV, portfolio, and other related application documents. We may also collect non-personal information, like usage data, browser type, and IP address, to improve our platform and analyze user behavior.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
                We use your personal information to provide and improve our services, personalize your experience, communicate with you, and for other legitimate purposes, such as:
                <ul>
                    <li>Account creation and management;</li>
                    <li>Customer support;</li>
                    <li>Product and service development;</li>
                    <li>Security and fraud prevention;</li>
                    <li>Compliance with legal obligations;</li>
                    <li>Marketing and promotional activities (with your consent, where required).</li>
                </ul>
            </p>

            <h2>Job Application Data</h2>
            <p>
                When you apply for a job through our platform, we collect and store your application information for the purpose of assessing your suitability for the role. We may keep this information on file for future opportunities, unless you request otherwise. Please note that by submitting your application, you consent to the processing of your data for this purpose.
            </p>

            <h2>Your Rights</h2>
            <p>
                Under GDPR, you have several rights regarding your personal information, such as:
                <ul>
                    <li>The right to access your personal data;</li>
                    <li>The right to rectify inaccurate or incomplete data;</li>
                    <li>The right to erasure ('right to be forgotten');</li>
                    <li>The right to restrict processing;</li>
                    <li>The right to data portability;</li>
                    <li>The right to object to processing;</li>
                    <li>The right to withdraw consent (if processing is based on consent);</li>
                    <li>The right to lodge a complaint with a supervisory authority.</li>
                </ul>
                To exercise any of your rights, please contact us at coditioning@outlook.com.
            </p>

            <h2>Data Security</h2>
            <p>
                We take appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the updated Privacy Policy on this page. We encourage you to review our Privacy Policy periodically to stay informed about our data protection practices.
            </p>

            <h2>Contact Us</h2>
            <p>
                If you have any questions or concerns about our Privacy Policy, please contact us at coditioning@outlook.com
            </p>
            <p>
                Last updated: July 3rd, 2023
            </p>
        </div>
    );
};

export default Privacy;
