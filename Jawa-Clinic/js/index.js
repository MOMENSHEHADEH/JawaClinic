const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
const stars = document.querySelectorAll(".stars i");
const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu?.querySelector(".select-btn"),
    options = optionMenu?.querySelectorAll(".option"),
    sBtn_text = optionMenu?.querySelector(".sBtn-text");


document.addEventListener('DOMContentLoaded', () => {
    if (registerLink) {
        registerLink.addEventListener('click', () => {
            wrapper.classList.add('active');
        });
    }
    if (loginLink) {
        loginLink.addEventListener('click', () => {
            wrapper.classList.remove('active');
        });
    }
    if (btnPopup) {
        btnPopup.addEventListener('click', () => {
            wrapper.classList.add('active-popup');
            document.body.classList.add('overflow-hidden');
        });
    }
    if (iconClose) {
        iconClose.addEventListener('click', () => {
            wrapper.classList.remove('active-popup');
            document.body.classList.remove('overflow-hidden');
        });
    }

    stars.forEach((star, index1) => {
        star.addEventListener("click", () => {
            stars.forEach((star, index2) => {
                index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
            });
        });
    });
})


if (selectBtn) {
    selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
}
if (options) {
    options.forEach(option => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
}