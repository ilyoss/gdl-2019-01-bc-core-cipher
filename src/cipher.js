window.cipher = {

  //Funcion para codificar el mensaje
  encode: function(offset, string) {

    //Declaro un string nuevo vacio donde voy a guardar mi mensaje encriptado
    let newString = '';
    //Inicializo aqui mi variable del ciclo
    let i;
    let sValue;
    let y;

    //Ciclo for para encriptar letra por letra
    for(i = 0; i < string.length; i++){

      //Guardo el caracter en la posicion i en una variable
      let x = string.charCodeAt(i);

      if(x >=65 && x<= 90){
        sValue = 'M';
      }
      else if(x >=97 && x <= 122){
        sValue = 'm';
      }

      switch (sValue) {
        case 'M':
          //Codigo para letras MAYUSCULAS
          //Aplico la formula de cifrado y guardo el caracter nuevo en una variable
          y = String.fromCharCode(((x - 65 + offset)%26) + 65);
          //Actualizo mi nuevo string, concatenando las letras cifradas
          newString += y;
          break;
        case 'm':
          //Codigo para letras minusculas
          //Aplico la formula de cifrado y guardo el caracter nuevo en una variable
          y = String.fromCharCode(((x - 97 + offset)%26) + 97);
          //Actualizo mi nuevo string, concatenando las letras cifradas
          newString += y;
        default:

      }
    }
    //Envio el string desencriptado para mostrarlo desde index.js
    return(newString);
  },

  //Funcion para decodificar un mensaje
  decode: function(offset, string){

    //Declaro un string nuevo vacio donde voy a guardar mi mensaje desencriptado
    let newString = '';
    let i;
    let sValue;
    let y;

    //Ciclo for para desencriptar letra por letra
    for(i = 0; i < string.length; i++){

      //Guardo el caracter en la posicion i en una variable
      let x = string.charCodeAt(i);

      if(x >=65 && x<= 90){
        sValue = 'M';
      }
      else if(x >=97 && x <= 122){
        sValue = 'm';
      }

      switch (sValue) {
        case 'M':
          //Codigo para MAYUSCULAS
          //Aplico la formula de decifrado y guardo el caracter nuevo en una variable
          y = String.fromCharCode(((x - 90 - offset) % 26) + 90);
          //Actualizo mi nuevo string, concatenando las letras cifradas
          newString = newString + y;
          break;
        case 'm':
          //Codigo para letras minusculas
          //Aplico la formula de cifrado y guardo el caracter nuevo en una variable
          y = String.fromCharCode(((x - 122 - offset) % 26) + 122);
          //Actualizo mi nuevo string, concatenando las letras cifradas
          newString += y;
        default:
      }
    }
    //Envio el string desencriptado para mostrarlo desde index.js
    return(newString);
    }
};
