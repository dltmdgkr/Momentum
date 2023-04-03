const LoginForm = document.querySelector("#login-form");
const LoginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLogin(event){
    event.preventDefault();
    LoginForm.classList.add(HIDDEN_CLASSNAME);
    const username = LoginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintgreeting(username);
};

function paintgreeting(username) {
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);    
};

LoginForm.addEventListener("submit", handleLogin);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    LoginForm.classList.remove(HIDDEN_CLASSNAME);
    LoginForm.addEventListener("submit", handleLogin);
} else {
    paintgreeting(savedUsername);
    LoginForm.classList.add(HIDDEN_CLASSNAME);
};