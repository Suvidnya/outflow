const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');



/** send mail from testing account */
const sendmail = async (req, res) => {

    // console.log(req.body);

    const { loginEmail, loginPassword, messagebody} = req.body;
 
      // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: loginEmail, 
            pass: loginPassword
            // user: "accforsampleusage@gmail.com",
            // pass: "gxdapptdutxminus"
        },
    });

    // let message = {
    //     from: '"Sampel maler" <accforsampleusage@gmail.com>',
    //     to: "suvidnyatipre@gmail.com", 
    //     subject: "Hello ✔", 
    //     text: "Successfully Register with us.", 
    //     html: "<b>Successfully Register with us.</b>"
    // }
    
    
    transporter.sendMail(messagebody).then((info) => {
        return res.status(201)
        .json({ 
            msg: "you should receive an email",
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })
}


const validatelogin = async (req, res) => {


    const { loginEmail, loginPassword } = req.body;


      // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: loginEmail, 
            pass: loginPassword, 
        },
    });

    let message = {
        from: '"Sampel maler" <accforsampleusage@gmail.com>', 
        to: "suvidnyatipre@gmail.com", 
        subject: "Hello ✔", 
        text: "Successfully Register with us.",
        html: "<b>Successfully Register with us.</b>",
    }
    
    
    transporter.sendMail(message).then((info) => {
        return res.status(201)
        .json({ 
            msg: "you should receive an email",
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })
    
}



module.exports ={ sendmail, validatelogin };




