const ukrainian_alphabet = [' ', 'а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я']
const english_alphabet = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// console.log(ukrainian_alphabet.length) === 34
// console.log(english_alphabet.length) === 27

function getType(char) {
  let charCode = char.charCodeAt();
  if(97<=charCode && charCode<=122)
    return 'en';
  if(char === ' ' || char === '\n')
    return ' ';
  if(ukrainian_alphabet.indexOf(char) !==-1)
    return 'uk';
  //else
  return 'symbol'
}

class Cipher {
  static encrypt(input, shift) { throw Error('Abstract method!')}
  static decrypt(input, shift) { throw Error('Abstract method!')}
}

class Caesar extends Cipher{
  static encryptEnCharacter(char, shift) {
    let index = english_alphabet.indexOf(char);
    const shiftedIndex = index + shift;
    const encryptedIndex = shiftedIndex > 0 ?(shiftedIndex)%27: (shiftedIndex+27)%27;

    return english_alphabet[encryptedIndex]
  }
  static encryptUkCharacter(char, shift) {
    const index = ukrainian_alphabet.indexOf(char);
    const shiftedIndex = index + shift;
    const encryptedIndex = shiftedIndex > 0 ?(shiftedIndex)%34: (shiftedIndex+34)%34;

    return ukrainian_alphabet[encryptedIndex];
  }
  static encrypt(input, shift) { 
    let text = input.value.toLowerCase();
    let encoded = '';
    let lang = '';
    for (let char of text) {
      const type = getType(char);
      if(type==='en') {
        lang = 'en';
        encoded+= Caesar.encryptEnCharacter(char, shift);
      }
      else if(type==='uk') {
        lang = 'uk';
        encoded+= Caesar.encryptUkCharacter(char, shift);
      }
      else if(type===' ') {
        if(char === '\n')
          char = ' ';
        if(lang === 'en')
          encoded+= Caesar.encryptEnCharacter(char, shift);
        else
          encoded+= Caesar.encryptUkCharacter(char, shift);
      }
    }
    input.value = encoded;
  }
  static decrypt(input, shift) { 
    Caesar.encrypt(input,-shift)
  }
}

document.getElementById("file").onchange = function() {
    const file = $('#file')[0].files[0];
    const reader = new FileReader();
    reader.onload = function(){
    	document.getElementById("filename").value = file.name;
    	document.getElementById("content").innerHTML = this.result;
    }
    reader.readAsText(file);
}
