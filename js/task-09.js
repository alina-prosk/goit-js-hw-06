function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
}

refs.button.addEventListener('click', () => {
  const getHexColor = getRandomHexColor();
  document.body.style.backgroundColor = getHexColor;
  
  refs.span.textContent = getHexColor;
});


