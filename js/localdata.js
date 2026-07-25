const portfolioContactForm = document.getElementById('contact-form');
const emailValue = document.getElementById('email');
const nameValue = document.getElementById('name');
const subjectValue = document.getElementById('subject');
const messageValue = document.getElementById('msg');

if (portfolioContactForm && emailValue && nameValue && subjectValue && messageValue) {
  const savedData = localStorage.getItem('rafitPortfolioContact');

  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      nameValue.value = parsedData.name || '';
      emailValue.value = parsedData.email || '';
      subjectValue.value = parsedData.subject || '';
      messageValue.value = parsedData.message || '';
    } catch (error) {
      localStorage.removeItem('rafitPortfolioContact');
    }
  }

  portfolioContactForm.addEventListener('input', () => {
    const data = {
      name: nameValue.value,
      email: emailValue.value,
      subject: subjectValue.value,
      message: messageValue.value,
    };
    localStorage.setItem('rafitPortfolioContact', JSON.stringify(data));
  });
}
