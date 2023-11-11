function sendEmail() {
    const recipient = document.getElementById('recipient').value;
    const senderGmail = document.getElementById('senderGmail').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    
    const currentDate = new Date().toLocaleDateString();

    const concernsOptions = document.querySelectorAll('input[name="concerns"]:checked');
    const additionalMessage = document.getElementById('additionalMessage').value;
    const additionalMessage1 = document.getElementById('additionalMessage1').value;

    const concernsText = Array.from(concernsOptions).map(option => option.value).join(', ');

    const mailtoLink = `mailto:${recipient}?subject=Concerns&body=My contact No. ${encodeURIComponent(senderGmail)}%0AName: ${encodeURIComponent(name)}%0AAddress: ${encodeURIComponent(address)}%0ACurrent Date: ${encodeURIComponent(currentDate)}%0AConcerns: ${encodeURIComponent(concernsText)}%0A${encodeURIComponent(additionalMessage1)+(additionalMessage)}`;

    window.location.href = mailtoLink;
  }