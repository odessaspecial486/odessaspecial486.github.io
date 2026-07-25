const contactForm = document.getElementById('contact-form');
const validationText = document.getElementById('valTxt');

if (contactForm && validationText) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('msg').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      validationText.textContent = 'Please enter a valid email address.';
      validationText.style.color = 'red';
      return;
    }

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:rafitrahad@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    validationText.textContent = 'Opening your email application...';
    validationText.style.color = 'green';
    window.location.href = mailtoUrl;
  });
}
