const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInputChange);


function onInputChange(evt) {
    console.log(evt.currentTarget.value);
    refs.span.textContent = evt.currentTarget.value;
}





















//  <input type="text" id="name-input" placeholder="Please enter your name" />
//     <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
