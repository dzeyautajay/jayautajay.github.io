function sendEmail() {
    const recipient = document.getElementById('recipient').value;
    const subject = document.getElementById('subject').value;
    const concerningOptions = document.querySelectorAll('input[name="concerning"]:checked');
    const message = document.getElementById('message').value;

    const concerningText = Array.from(concerningOptions).map(option => option.value).join(', ');

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=Concerning: ${encodeURIComponent(concerningText)}%0A%0A${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  }