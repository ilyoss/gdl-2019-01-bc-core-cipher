
let flag = false;
//Funcion para reiniciar mis valores base, sirve para iniciar las pantallas en "hidden" y reiniciar valores
//si el usuario quiere cifrar o decifrar un mensaje nuevo
function reset(){
  document.getElementById("menu").style.display = 'none';
  document.getElementById("information").style.display = 'none';
}

//La inicio para que el programa corra "limpio"
reset();
console.log(flag);

//Funcion para "cambiar" de ventanas
function toggleVisibility(div1, div2){
  let divElement = document.getElementById(div1);
  let divElement2 = document.getElementById(div2);

  //Ocultando la division del inicio
  if(divElement.style.display == 'none'){
    divElement.style.display = 'block';
  }
  else {
    divElement.style.display = 'none';
  }

  //Mostrando la division del menu
  if(divElement2.style.display == 'none'){
    divElement2.style.display = 'block';
  }
  else {
    divElement2.style.display = 'none';
  }
}


//Funcion que se activa al hacer click en el boton de "Comenzar", para ir al menu
function menu(root, menu){
  toggleVisibility(root,menu);
  greeting();
}

//Funcion que se activa al decidir si se va a cifrar o decifrar un mensaje
function infoInput(menu, info){
  toggleVisibility(menu, info);
}

//Funcion para mostrar mensaje de bienvenida, usando el nombre ingresado en el inicio
function greeting(){
  const nameInput = document.getElementById('userName').value; //Guardo el nombre en la variable nameInput
  console.log(nameInput);
  let greeting = "Hola, " + nameInput + "! ¿Qué te gustaría hacer con tu mensaje?";
  document.getElementById("bienvenida").innerHTML = greeting;
}

//Funcion que determina el mensaje que se muestra para cifrar
function cipherSelection(){
  let title = "Ingresa tu mensaje a cifrar. Recuerda usar mayúsculas únicamente y no utilizar 'ñ' o caracteres especiales.";
  document.getElementById("inputInfo").innerHTML = title;
  document.getElementById("enterInfo").innerHTML = "Cifrar";
  flag = true;
  console.log(flag);
}

//Funcion que determina el mensaje que se muestra para decifrar
function decipherSelection(){
  let title = "Ingresa tu mensaje a decifrar. Recuerda usar mayúsculas únicamente y no utilizar 'ñ' o caracteres especiales.";
  document.getElementById("inputInfo").innerHTML = title;
  document.getElementById("enterInfo").innerHTML = "Decifrar";
  flag = false;
  console.log(flag);
}

//Funcion para mostrar como texto el valor del slider al usuario
function sliderValue(){

  let slider = document.getElementById("offset");
  let output = document.getElementById("sliderV");
  output.innerHTML = slider.value;

  slider.oninput = function() {
  output.innerHTML = this.value;
  }
}

//Funcion para tomar los valores actuales de texto y de desplazamiento y encriptar el mensaje
//Se inicializa con el boton de Cifrar
function getValues(){
  let offset = document.getElementById("offset").value;
  let string = document.getElementById("userText").value;
  let result;

  if(flag == false){
    result = cipher.decode(offset, string);
  }
  else{
    result = cipher.encode(offset, string);
  }

  displayResult(result);
}


//Funcion para mostrar el mensaje cifrado, se recibe del cipher.js y se muestra en el objeto.
function displayResult(string){
  document.getElementById("result").value = string;
  console.log(string);
}
