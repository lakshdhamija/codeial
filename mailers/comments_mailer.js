const nodeMailer = require('../config/nodemailer');

// another way of exporting a method
exports.newComment = (comment) => {
    let htmlString = nodeMailer.renderTemplate({comment: comment}, 'comments/new_comment.ejs');

    // to sen the email
    nodeMailer.transporter.sendMail({
        from: 'laksh.dhamija@gmail.com',
        to: comment.user.email,
        subject: "New Comment",
        html: htmlString
    }, (err, info) => {
        if(err){console.log('Error in sending mail', err); return;}
        // console.log('Message sent', info); 
        return;
    });
}