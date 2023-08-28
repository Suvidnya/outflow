import React from 'react';
import './rules.css';

export const Rules = () => {
    
  return (
    <div className="rules-container">
  <h2 className="rules-heading">Follow these steps and rules before using</h2>
  <div className="rules-content">
    <ul>
      <li>You can only use Gmail accounts.</li>
      <li>After successful validation of credentials only,email can be sent; otherwise, an error will occur.</li>
      <li>To enable this service to send emails, please follow the provided instructions step by step. These steps will guide you in leveraging this application.</li>
    </ul>
      <div className='testdiv'>
      <span id='test'>To test it's working you can use EMAIL : 'accforsampleusage@gmail.com' and PASS : 'gxdapptdutxminus'</span>
    </div>
  </div>

  <h2 className="steprules-heading">Steps to get started</h2>
  <div className="rules-content">
    <ul>
      <li>You are signing up for a SMTP service, there are steps to be followed to enable this.</li>
      <li>We need to bypass the 2 factor authentication by google.</li>
      <li>For thirt party application whihc are less secure it has a provision to setup app passwords using whihc the app can connect to your account.</li>
      <li>Visit <a href="https://myaccount.google.com/">My Accounts</a> page of the google account through which you want to send email.</li>
      <li>Choose Security among the options on the left hand side column.</li>
      <li>In "How to sign into Google" seciton click 2-Step verification (google will ask your password).</li>
      <li>If it is not enabled make it enable and at the very bottom you will find App Passwords, click on that.</li>
      <li>Select app and device and click generate to generate app password. </li>
      <li>Now copy and use this password and and this account't email to validate.(This could give error if not fill the email form and your email would be sent) </li>
      <li>So move to your gmail account and you will see a mail asking if you are accessing this account or not. Click "Yes, it's me".</li>
      <li>Again come back to the app and enter the generated password and email id</li>
      <li>After it gets verified you can fill the email form and send the email to as many accounts you want</li>
    </ul>
  </div>
</div>

    
    
  )
}
