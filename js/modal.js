(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();


const form = document.querySelector(".js-login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const registerForm = event.target;
  const name = registerForm.elements["user-name"].value.trim();
  const email = registerForm.elements.email.value.trim();
  const phone = registerForm.elements.phone.value.trim();
  const comment = registerForm.elements["user-comment"].value.trim();
  
  const formData = {
    name: name,
    phone: phone,
    email: email,
    comment: comment,
  };
  console.log(formData);
  registerForm.reset();
};