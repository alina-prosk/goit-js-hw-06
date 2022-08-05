const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);


function onFormSubmit(evt) {
    evt.preventDefault();

    if (form.email.value === "" || form.password.value === "") {
        alert("Заповніть всі поля!");
    };

    const formElements = evt.currentTarget.elements;
    console.dir(formElements);

    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email,
        password,
    };

    console.log(formData);

    evt.currentTarget.reset();
};

