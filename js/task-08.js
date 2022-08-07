const form = document.querySelector(".login-form");

form.addEventListener("submit", (evt) =>  {
    evt.preventDefault();

    
    const {
        elements: { email, password },
    } = evt.currentTarget;

    if (email.value === "" || password.value === "") {
    return  alert("Заповніть всі поля!");
    };

    console.log({ email: email.value, password: password.value });

    evt.currentTarget.reset();
});

