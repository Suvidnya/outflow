import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import './form.css';
export const Form = () => {

    // ---------------------------------this is for login validation -----------------------------------------------------------------
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [succmsg, setsuccmsg] = useState(false);
    const [failmsg, setfailmsg] = useState(false);
    const [succmsgemail, setsuccmsgemail] = useState(false);
    const [failmsgemail, setfailmsgemail] = useState(false);

    const handleSubmitlogin = (e) => {
      e.preventDefault();

        const body = {
            loginEmail:loginEmail,
            loginPassword:loginPassword
        }
    
    axios.post("/api/validate",body).then((res)=>{
        console.log(res.status);
        if(res.status === 201)
        {
            console.log("you can move forward");
            setsuccmsg(true);
        } 
    })
    .catch(()=>{
         setfailmsg(true);
    })
    };



    //---------------the mail form ke chochle -------------------------------------------------


    const [formData, setFormData] = useState({
        from: '',
        to: '',
        subject: '',
        text: '',
        html: ''
        // attachments: [],
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    //   const handleAttachmentChange = (e) => {
    //     const { files } = e.target;
    //     setFormData({ ...formData, attachments: files });
    //   };
    
      const handleSubmitmail = (e) => {
        e.preventDefault();
        console.log(formData);

        const messagebody = {
            from: formData.from,
            to: formData.to, 
            subject: formData.subject, 
            text: formData.text, 
            html: "<p>" + formData.text + "</p>" + '\n' +  formData.html
        }

        const body = {
            loginEmail : loginEmail,
            loginPassword : loginPassword,
            messagebody :messagebody
        }

        axios.post("/api/mail",body).then((res)=>{
        console.log(res.status);
        if(res.status === 201) 
        {
            setsuccmsgemail(true);
        }
        })
        .catch(()=>{
            setfailmsgemail(true);
        })
        };
  


  return (
    <>
        <form onSubmit={handleSubmitlogin} className="login-form">
        <p className='validate'>Validate Login credentials</p>
        <div className="l-form-group">
            <label htmlFor="loginEmail" className="l-form-label">Email:</label>
            <input
            type="email"
            id="loginEmail"
            className="l-form-input"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
            autoComplete='off'
            placeholder='Enter user gmail id'
            />
        </div>
        <div className="l-form-group">
            <label htmlFor="loginPassword" className="l-form-label">Password:</label>
            <input
            type="password"
            id="loginPassword"
            className="l-form-input"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
            autoComplete='off'
            placeholder='Enter the generated password '
            />
        </div>
        <div className="l-form-group">
        <button type="submit" className="l-submit-button">Validate</button>    
        </div>
        <div>
        {succmsg && (
        <p style={{color:'green'}} className="conditional-message">Credentials valid! Fill the email form.</p>
        )}
        {failmsg && (
        <p style={{color:'red'}} className="conditional-message">Authentication failed! Enter valid credentials.</p>
        )}
        </div>
        </form>


        <form onSubmit={handleSubmitmail} className="email-form">
        <h2 className="form-heading">Email Form</h2>
        <div className="form-group">
            <label htmlFor="from" className="form-label">From:</label>
            <input
            type="text"
            id="from"
            name="from"
            value={formData.from}
            onChange={handleChange}
            required
            autoComplete="off"
            className="form-input"
            placeholder="Format : 'Sender's name' <gmail_id>"
            
            />
        </div>
        <div className="form-group">
            <label htmlFor="to" className="form-label">To (in case of multipe accounts enter comma-separated gmail accounts):</label>
            <input
            type="text"
            id="to"
            name="to"
            value={formData.to}
            onChange={handleChange}
            required
            autoComplete="off"
            className="form-input"
            placeholder='Enter accounts to send email(comma separated)'
            />
        </div>
        <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject:</label>
            <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            autoComplete="off"
            className="form-input"
            placeholder='Enter the subject for the mail'
            />
        </div>
        <div className="form-group">
            <label htmlFor="text" className="form-label">Text:</label>
            <textarea
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            autoComplete="off"
            className="form-textarea"
            placeholder='Enter text for mail'
            ></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="html" className="form-label">HTML:</label>
            <textarea
            id="html"
            name="html"
            value={formData.html}
            onChange={handleChange}
            autoComplete="off"
            className="form-textarea"
            placeholder='Enter the HTML template to be sent'
            ></textarea>
        </div>
        {/* <div className="form-group">
            <label htmlFor="attachments" className="form-label">Attachments:</label>
            <input
            type="file"
            id="attachments"
            name="attachments"
            multiple
            onChange={handleAttachmentChange}
            autoComplete="off"
            className="form-input"
            />
        </div> */}
        <div className="form-group">
            <button type="submit" className="submit-button">Send Email</button>
        </div>
        <div>
        {succmsgemail && (
        <p style={{color:'green'}} className="conditional-message">Email sent succesfully!</p>
        )}
        {failmsgemail && (
        <p style={{color:'red'}} className="conditional-message">Some error occured while sending email.</p>
        )}
        </div>
        </form>

    </>
  )
}
