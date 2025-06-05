const subscribeForm = document.querySelector(".js-subsc-form");
const subscribeBtn = document.querySelector(".js-subscr-btn");
subscribeBtn.addEventListener('click', () => {
    subscribeBtn.blur();
});
  
subscribeForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const signupForm = event.target;
  const email = signupForm.elements.emailaddress.value.trim();
  
  const formData = { email };

    if (!email) {
        alert('Please enter your email');
        return
    }

  console.log(formData);
  signupForm.reset();
};