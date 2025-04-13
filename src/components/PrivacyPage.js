import React, { useEffect } from 'react';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper">
      <main className="privacy-content">
        <h1>Privacy Policy</h1>
        <p>
          At QuoteMe, we are committed to protecting your privacy. This privacy policy outlines how we handle your data in compliance with GDPR and other applicable privacy laws.
        </p>

        <h2>1. Personal Data</h2>
        <p>
          We do not collect, store, or process any personal data. Your quotes, preferences, and any other information you input into the app remain on your device and are never transmitted to our servers.
        </p>

        <h2>2. App Data Collection</h2>
        <p>
          While we do not collect personal data, the app may use third-party services (e.g., for crash reporting or analytics) that could collect anonymized data to improve app performance. These services operate independently and are governed by their own privacy policies.
        </p>

        <h2>3. No Ads or Tracking</h2>
        <p>
          QuoteMe is completely ad-free. We do not use any tracking technologies, cookies, or similar mechanisms to monitor your behavior or usage patterns.
        </p>

        <h2>4. Data Security</h2>
        <p>
          All data you input into the app is stored locally on your device. We do not have access to this data, and it is your responsibility to ensure its security by using device-level protections such as passwords or encryption.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          Since we do not collect or process personal data, there is no data for you to request, modify, or delete. However, if you have any concerns or questions, feel free to contact us at <a href="mailto:team.quoteme@gmail.com"><strong>team.quoteme@gmail.com</strong></a>.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time to reflect changes in the app or legal requirements. Any updates will be posted here, and we encourage you to review this page periodically.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or how your data is handled, please contact us at <a href="mailto:team.quoteme@gmail.com"><strong>team.quoteme@gmail.com</strong></a>.
        </p>
      </main>
    </div>
  );
}
