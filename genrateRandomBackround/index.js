let colorbtn = document.getElementById('colorName');
console.log(colorbtn);
function changeColor(){
  randomColor = Math.floor(Math.random() * 16777215).toString(16)
  // toString(16)  converts a number to a string in base 16 (hexadecimal).

  document.body.style.backgroundColor = '#' + randomColor;
  colorName.innerHTML = '#' + randomColor;
}
