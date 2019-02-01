window.cipher = {

  //Funcion para codificar el mensaje
  encode: function(offset, string) {

    //Declaro un string nuevo vacio donde voy a guardar mi mensaje encriptado
    let newString = '';
    let i;

    //Ciclo for para encriptar letra por letra
    for(i = 0; i < string.length; i++){

      //Guardo el caracter en la posicion i en una variable
      let x = string.charCodeAt(i);
      //Aplico la formula de cifrado y guardo el caracter nuevo en una variable
      let y = String.fromCharCode(((x - 65 + offset)%26) + 65);
      //Actualizo mi nuevo string, concatenando las letras cifradas
      newString = newString + y;

    }
    return(newString);
  },

  //Funcion para decodificar un mensaje
  decode: function(offset, string){

    //Declaro un string nuevo vacio donde voy a guardar mi mensaje desencriptado
    let newString = '';
    let i;

    //Ciclo for para desencriptar letra por letra
    for(i = 0; i < string.length; i++){

      //Guardo el caracter en la posicion i en una variable
      let x = string.charCodeAt(i);

      //Aplico la formula de decifrado y guardo el caracter nuevo en una variable
      let y = String.fromCharCode(((x - 90 - offset) % 26) + 90);
      //Actualizo mi nuevo string, concatenando las letras cifradas
      newString = newString + y;
      }

      //Envio el string desencriptado para mostrarlo desde index.js
      return(newString);
    }
};
