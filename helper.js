/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nodemailer = require('nodemailer');
module.exports = {
    sendEmail: function (subject, to, content, fromTitle, mergeAppName) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
        var transporter = nodemailer.createTransport(smtpTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            //secure: true,
            auth: {
                user: process.env.EMAIL_ACCESS_KEY,
                pass: process.env.EMAIL_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        }));
//        // setup e-mail data with unicode symbols
        var sub = "";
        if (typeof mergeAppName != 'undefined' && mergeAppName == false) {
            sub = subject;
        } else {
            sub = process.env.APP_NAME + " : " + subject;
        }
        var mailOptions = {
            from: process.env.APP_NAME + ".io <" + process.env.EMAIL_USERNAME + ">", // sender address
            to: to, // list of receivers
            subject: sub, // Subject line
            html: content // html body
        };

// send mail with defined transport object
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });

    }
}
