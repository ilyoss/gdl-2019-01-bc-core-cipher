window.cipher = {

  cipher.encode(offset, string) = {

    let newString = '';
    let i;

    for(i = 0; i < string.length; i++){
      let x = string.charCodeAt(i);
      let y = (x - 65 + offset)%26 + 65;
      newString = newString+y;
    }

    displayResult(newString);
  }

};
