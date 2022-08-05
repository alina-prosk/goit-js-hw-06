const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
};

refs.input.addEventListener('input', (evt) => refs.span.style.fontSize = `${evt.currentTarget.value}px`);