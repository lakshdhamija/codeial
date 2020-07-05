const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
const credentials = require('./credentials');

// defines how communication is going to take place
let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: '587',
    secure: false,
    auth: {
        user: credentials.nodeMailerUser,
        pass: credentials.nodeMailerPass
    }
});

// defines location for html email template 
let renderTemplate = function(data, relativePath){
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname, '../views/mailers', relativePath),
        data,
        function(err, template){
            if(err){console.log('Error in rendering template: ', err); return;}
            mailHTML = template;
        }
    )
    return mailHTML;
}

//exporting the two properties defined above
module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}
