const passwordImage = document.querySelector(".show-password");
const inputPassword = document.querySelector(".form__input-password");

passwordImage.addEventListener(
  "click",
  () => {
    if (inputPassword.type === "password") {
      inputPassword.type = "text";
      passwordImage.src = "/static/img/eye-crossed.png";            
      } else {
        inputPassword.type = "password";
        passwordImage.src = "/static/img/eye.png";    
      }
  }
)