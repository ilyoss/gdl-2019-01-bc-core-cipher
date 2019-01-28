//Funcion para reiniciar mis valores base, sirve para iniciar las pantallas en "hidden" y reiniciar valores
//si el usuario quiere cifrar o decifrar un mensaje nuevo

function reset(){
  document.getElementById("menu").style.display = 'none';
}

//La inicio para que el programa corra "limpio"
reset();

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

function greeting(){

  const nameInput = document.getElementById('userName').value; //Guardo el nombre en la variable nameInput
  console.log(nameInput);
  let greeting = "Hola, " + nameInput + "! ¿Qué te gustaría hacer con tu mensaje?";
  document.getElementById("bienvenida").innerHTML = greeting;
}
