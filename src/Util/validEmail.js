// Regular expression for email validation
const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to check if an email is valid
const isEmailValid = (email) => {
  return isValidEmail.test(email);
};

export { isEmailValid };
