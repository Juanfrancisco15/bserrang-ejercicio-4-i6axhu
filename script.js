// En este ejercicio tenéis que sustituir TODAS las funciones tradicionales por funciones flecha y que siga funcionando igual.

const changeBackgroundButton = document.getElementById(
  "changeBackgroundButton"
);

changeBackgroundButton.addEventListener("click", ()=> {
  this.style.backgroundColor = ()=>{
      const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  };
});
//Lo he intentado de muchas formas incluso he preguntado a compañeros y lo tienen igual pero no funciona me da error.
