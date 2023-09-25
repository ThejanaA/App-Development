import React from 'react';
import '../Pages/TermsandConditions';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';


function TermsAndConditions() {
  return (
    <div>
      <h1><strong>Terms and Conditions for Spam Shield</strong></h1>

      <div id="termsAndConditions">
        

        <p>
          By using Spam Shield (the "App"), you agree to comply with and be
          bound by these Terms and Conditions. If you do not agree with these
          Terms and Conditions, please do not use the App.
        </p>

        <ol>
          <li>
            <strong>App Description</strong>
          </li>
          <p>
            Spam Shield is designed to filter and identify potential spam or
            unwanted text messages from your mobile device. The app may provide
            features such as message analysis, spam detection, and user-defined
            filtering rules.
          </p>
        </ol>

        <ol start="2">
          <li>
            <strong>User Responsibilities</strong>
          </li>
          <ol type="a">
            <li>
              <strong>Account Creation:</strong> Some features of the App may
              require you to create an account. You are responsible for
              maintaining the confidentiality of your account credentials.
            </li>
            <li>
              <strong>Compliance:</strong> You agree to use the App in
              compliance with all applicable laws and regulations. You may not
              use the App for any illegal or unauthorized purpose.
            </li>
            <li>
              <strong>Accuracy:</strong> Spam Shield's effectiveness in
              filtering spam messages may vary. It is your responsibility to
              review filtered messages for accuracy and make necessary
              adjustments to the filtering rules.
            </li>
          </ol>
        </ol>

        <ol start="3">
          <li>
            <strong>Privacy</strong>
          </li>
          <ol type="a">
            <li>
              <strong>Data Collection:</strong> The App may collect and process
              user data, including message content and contact information. Our
              data collection and usage practices are governed by our Privacy
              Policy.
            </li>
            <li>
              <strong>Message Analysis:</strong> The App analyzes message
              content to determine spam likelihood. Message content is processed
              locally on your device and is not transmitted to our servers.
            </li>
          </ol>
        </ol>

        {/* Add the rest of the sections using the same structure */}
        <p>
          <strong>Contact Information</strong>
        </p>
        <p>
          For questions or concerns about these Terms and Conditions, please
          contact us at [spamshield4789@gmail.com].
        </p>

        

        
      </div>
    </div>
  );
}

export default TermsAndConditions;
