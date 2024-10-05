let wrapper = document.querySelector(".wrapper");
let loginLink = document.querySelector(".login-link");
let regLink = document.querySelector(".register-link");
let btn = document.getElementById("btn");
let icon = document.querySelector(".icon-close");

regLink.addEventListener("click", function () {
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", function () {
    wrapper.classList.remove("active");
});

btn.addEventListener("click", function () {
    wrapper.classList.add("show");
});

icon.addEventListener("click", function () {
    wrapper.classList.remove("show");
})