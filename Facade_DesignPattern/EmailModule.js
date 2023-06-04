class EmailModule {
    sendEmail(to, subject, body) {
      console.log(`Sending email to: ${to}, subject: ${subject}, body: ${body}`);
    }
  }
  
  module.exports = EmailModule;