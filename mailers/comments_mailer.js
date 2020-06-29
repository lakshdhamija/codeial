const nodeMailer = require('../config/nodemailer');

// another way of exporting a method
exports.newComment = (comment) => {
    console.log('inside newComment Mailer');

    // to sen the email
    nodeMailer.transporter.sendMail({
        from: 'laksh.dhamija@gmail.com',
        to: comment.user.email,
        subject: "New Comment",
        html: '<h1>Yup, your comment is now published!</h1>'
    }, (err, info) => {
        if(err){console.log('Error in sending mail', err); return;}
        console.log('Message sent', info); 
        return;
    });
}