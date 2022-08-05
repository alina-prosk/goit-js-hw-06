const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInputChange);


function onInputChange(evt) {
    console.log(evt.currentTarget.value);
    refs.span.textContent = evt.currentTarget.value;
}


