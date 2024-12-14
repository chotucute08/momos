document.addEventListener('DOMContentLoaded', () => {
  const btnYes = document.querySelector(".btnYes");
  const btnNo = document.querySelector(".btnNo");
  const banner = document.querySelector(".corePixel");
  const gatinhoBravo = document.querySelector(".gatinhoBravo");
  const title = document.querySelector(".title");
  const jasna = document.querySelector(".jasna");

  function desvia(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
  }

  function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
  }

  btnYes.addEventListener('click', () => {
    location.href = "presente.html";
  });

  btnNo.addEventListener('mouseover', () => desvia(btnNo));

  btnNo.addEventListener('click', () => {
    banner.classList.add('disable');
    gatinhoBravo.classList.remove('disable');
    jasna.classList.add('disable');
    title.textContent = "Oh no! You rejected it!"; // Directly set text
  });
});
