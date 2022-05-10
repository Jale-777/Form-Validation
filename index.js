const form = document.getElementById("form");
const username = document.getElementById("username");
const business = document.getElementById("business");
const phoneNum = document.getElementById("phoneNum");
const email = document.getElementById("email");
const text = document.getElementById("text");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const businessValue = business.value.trim();
  const phoneNumValue = phoneNum.value.trim();
  const emailValue = email.value.trim();
  const textValue = text.value.trim();

  if (usernameValue === "") {
    setError(username, "Your name is required");
  } else {
    setSuccess(username);
  }

  if (businessValue === "") {
    setError(business, "Company name is required");
  } else {
    setSuccess(business);
  }

  if (phoneNumValue === "") {
    setError(phoneNum, "Phone number is required");
  } else {
    setSuccess(phoneNum);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (textValue === "") {
    setError(text, "Text is required");
  } else {
    setSuccess(text);
  }
};
