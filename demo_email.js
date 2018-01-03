var mailer = require('nodemailer');

var transporter = mailer.createTransport('SMTP',{
    service:'gmail',
    auth:{
        user: 'xxxxx@gmail.com',
        pass: 'xxxxx'
    }
});

var mailOptions = {
    from: 'xxxxx@gmail.com',
    to: 'xxxx@xxx.com',
    subject: "Sending an email with NodeJs",
    text: "la la la "
};

transporter.sendMail(mailOptions, function(err, info){
    if(err){
        console.log(err);
    }else{
        console.log("email sent: " + info.response);
    }
});