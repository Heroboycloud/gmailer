// Here we import necessary modules
  const nodemailer = require('nodemailer');

// Next, create the class


class Mailer{
  constructor(username,password,sender="Admin"){
 this.username = username;
 this.password= password;
 this.sender= sender;
 this.transporter = nodemailer.createTransport({
   service: 'gmail',
   host: 'smtp.gmail.com',
   port: 465,
   secure: true,
   auth: {
    user: this.username,
    pass: this.password,
   },
  });
}

send(emailaddress,subject,body){
let mailOptions = {
    from: this.sender,
    to: emailaddress,
    subject: subject,
    html: body
}

this.transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log('Error in sending email  ' + error);
      return true;
    } else {
     console.log('Email sent: ' + info.response);
     return false;
    }
   });

}



}

module.exports= Mailer;
