import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import "./FAQ.css"

export default function FAQ() {
  return (
   <div className="faq">
   <h1><br/>FAQ</h1><br/>
  <input id="faq-a" type="checkbox" />
  <label htmlFor="faq-a">
    <p className="faq-heading">What is an SMS Spam Filtering App?</p>
    <div className="faq-arrow" />
    <p className="faq-text">
     <br />
      <br />
      An SMS Spam Filtering App is a mobile application designed to automatically detect and filter 
      unwanted or spam text messages from reaching a user's inbox on their smartphone. The primary purpose of 
      such an app is to enhance the messaging experience by preventing unwanted messages, including promotional 
      texts, phishing attempts, scams, and other unsolicited content, from cluttering the user's SMS inbox.
    </p>
  </label>
  <input id="faq-b" type="checkbox" />
  <label htmlFor="faq-b">
    <p className="faq-heading">
    Is the App Available for Both Android and iOS?
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
  
      <br />
      <br />
      It is available for both Android and iOS platforms, making them accessible to a wider range of users 
      regardless of their mobile device's operating system.
    </p>
  </label>
  <input id="faq-c" type="checkbox" />
  <label htmlFor="faq-c">
    <p className="faq-heading">Is the App Free to Download and Use?</p>
    <div className="faq-arrow" />
    <p className="faq-text">
     
      <br />
      <br />
        We offer a free version with basic features and limitations, 
      and they also offer a premium (paid) version with advanced features.
       Users can choose to upgrade to the premium version for additional functionality.
    </p>
  </label>
  <input id="faq-d" type="checkbox" />
  <label htmlFor="faq-d">
    <p className="faq-heading">
    Is the App Ad-Free?
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
       <br />
      <br />
      Yes this app is ad-free!.{" "}
    </p>
  </label>
  <input id="faq-e" type="checkbox" />
  <label htmlFor="faq-e">
    <p className="faq-heading">Is the App Safe and Secure to Use?</p>
    <div className="faq-arrow" />
    <p className="faq-text">
       <br />
      <br />
      Yes this App is 100% safe and Secure.U can have your personal information safe and secure.
    </p>
  </label>
  <input id="settings" type="checkbox" />
  <input id="faq-f" type="checkbox" />
  <label htmlFor="faq-f">
    <p className="faq-heading">
      Will the App Protect My Privacy?
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
       <br />
      <br />
      Yes this App will Protect and keep ur Privacy Safe.Also please learn the privacy policy.
    </p>
  </label>
</div>


  )
}