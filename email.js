function sendEmail() {
    // Get the form data.
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var message = document.querySelector('textarea[name="message"]').value;
  
    // Create a Gmail API request.
    var request = new XMLHttpRequest();
    request.open('POST', 'https://www.googleapis.com/gmail/v1/users/me/messages/send');
    request.setRequestHeader('Authorization', 'Bearer YOUR_GMAIL_API_KEY');
    request.setRequestHeader('Content-Type', 'application/json');
  
    // Create the email message.
    var emailMessage = {
      'to': 'autajayjay6@gmail.com',
      'subject': 'Contact Form Submission',
      'body': 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message
    };
  
    // Send the email.
    request.send(JSON.stringify(emailMessage));
  
    // Clear the form.
    document.querySelector('form').reset();
  
    // Display a success message.
    alert('Your message has been sent!');
  }