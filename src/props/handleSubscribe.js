import emailjs from 'emailjs-com';


const handleSubscribe = (email) => {
  const templateParams = {
    to_email: email,
  };

  emailjs.send('service_1piol4r', 'template_5qfnuxb', templateParams,'kJfEMWargoxfroGaR')
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
};

export default handleSubscribe;
