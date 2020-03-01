const ukrainian_alphabet = [' ', 'а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я']
const english_alphabet = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// console.log(ukrainian_alphabet.length) === 34
// console.log(english_alphabet.length) === 27

function getType(char) {
  let charCode = char.charCodeAt();
  if(97<=charCode && charCode<=122)
    return 'en';
  if(char === ' ')
    return ' ';
  if(ukrainian_alphabet.indexOf(char) !==-1)
    return 'uk';
  if(char === '\n')
    return '\n';
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
    const encryptedIndex = shiftedIndex > 0 ?(shiftedIndex)%27: (shiftedIndex-27*shift)%27;

    return english_alphabet[encryptedIndex]
  }
  static encryptUkCharacter(char, shift) {
    const index = ukrainian_alphabet.indexOf(char);
    const shiftedIndex = index + shift;
    const encryptedIndex = shiftedIndex > 0 ?(shiftedIndex)%34: (shiftedIndex-34*shift)%34;

    return ukrainian_alphabet[encryptedIndex];
  }
  static isValidKey(key) {
    return key === parseInt(key, 10)
  }

  static encrypt(input, key, lang) { 
    if (!Caesar.isValidKey(key))
      throw Error('Key is not valid!')
    let text = input.value;
    let encoded = '';
    lang = lang?lang:'';
    for (let char of text) {
      const type = getType(char);
      if(type === 'en') {
        lang = 'en';
        encoded += Caesar.encryptEnCharacter(char, key);
      }
      else if(type === 'uk') {
        lang = 'uk';
        encoded += Caesar.encryptUkCharacter(char, key);
      }
      else if(type === ' ') {
        if(lang === 'en')
          encoded += Caesar.encryptEnCharacter(char, key);
        else
          encoded += Caesar.encryptUkCharacter(char, key);
      }
      else if(type=== "\n") {
        encoded += "\n"
      }
      else {
        encoded += char;
      }
    }
    return encoded;
  }
  static decrypt(input, key, lang) { 
    return Caesar.encrypt(input,-key, lang)
  }
  static attack(encrypted, decrypted) {
    let shift = 0;
    while(encrypted.value.indexOf(decrypted)===-1) {
      if (shift > 35)
        throw Error('Key is not valid');
      shift++;
      encrypted.value = Caesar.decrypt(encrypted,1);
    }
    window.alert(`The system has been hacked! Secret shift is ${shift}`);
  }
}

class Trithemius extends Caesar {
  static calulateShift(pos, key) {
    if(key.length === 2)
      return (key[0]*pos + key[1])*(key.decryption?-1:1);
    else
      return (key[0]*key[0]+ key[1]*pos + key[2])*(key.decryption?-1:1);
  }
  static isValidKey(key) {
    return key instanceof Array && key.length >= 2 && key.length <= 3;
  }
  static encrypt(input, key, lang) { 
    if(!Trithemius.isValidKey(key))
      throw Error('Key is not valid');
    let text = input.value;
    let encoded = '';
    lang = lang?lang:'';
    for (let [pos, char] of text.split("").entries()) {
      const type = getType(char);
      const shift = Trithemius.calulateShift(pos, key)
      if(type === 'en') {
        lang = 'en';
        encoded += Trithemius.encryptEnCharacter(char, shift);
      }
      else if(type === 'uk') {
        lang = 'uk';
        encoded += Trithemius.encryptUkCharacter(char, shift);
      }
      else if(type === ' ') {
        if(lang === 'uk')
          encoded += Trithemius.encryptUkCharacter(char, shift);
        else
          encoded += Trithemius.encryptEnCharacter(char, shift);
      }
      else if(type=== "\n") {
        encoded += "\n"
      }
      else {
        encoded += char;
      }
    }
    return encoded;
  }
  static decrypt(input, key) {
    key.decryption = true;
    return Trithemius.encrypt(input,key)
  }
  static attack(encrypted, decrypted){
    [encrypted, decrypted] = [encrypted.value, decrypted.value]
    if(encrypted.length !== decrypted.length )
      throw Error("Strings lengths differ!")
    const shifts = [];
    for (var i = 0; i < encrypted.length; i++) {
      let shift = 0;
      let tmp = encrypted[i];
      let lang = getType(tmp)==='uk'?'uk':'en';
      while(tmp!==decrypted[i]) {
        if (shift > 35)
          throw Error('Key is not valid');
        shift++;
        tmp = Caesar.decrypt({value:tmp},1,lang);
        lang = getType(tmp)===' '?lang: (getType(tmp)==='uk'?'uk':'en')
      }
      shifts.push(shift);
    }
    window.alert(`The system has been hacked! Secret shifts is ${shifts}`);
  }
}

class XOR extends Cipher {
  /////
  static encryptCharacter(char, key) {
    const charCode = char.charCodeAt();
    return String.fromCharCode(charCode ^ key)
  }
  static isValidKey(key) {
    return key === parseInt(key, 10)
  }
  static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  static generateKey(keyLen) {
    const alphabet = ukrainian_alphabet.concat(english_alphabet.slice(1))
    const alphaLen = alphabet.length;
    let key = '';
    for(let i = 0; i < keyLen; i++)
      key+=alphabet[XOR.getRandomInt(alphaLen)]
    return key;
  }
  static encrypt(input, keyLen, key) {
    if (!XOR.isValidKey(keyLen))
      throw Error('Key is not valid!')
    let text = input.value;
    key = key?key: XOR.generateKey(keyLen);
    $("#xor-key")[0].value = key;
    let encoded = '';
    for (let [pos, char] of text.split("").entries()) {
      let keyPos = pos % key.length;
      encoded += XOR.encryptCharacter(char, key[keyPos].charCodeAt());
    }
    return encoded;
  }
  static decrypt(input, key) {
    return XOR.encrypt(input, 0,key);
  }
}

class Vigenere extends Caesar {
  static isValidKey(key) {
    return typeof key === "string" && key.length > 0;
  }
  static encrypt(input, key, lang, decryption) {
    if (!Vigenere.isValidKey(key))
      throw Error('Key is not valid!')
    let text = input.value;
    let encoded = '';
    lang = lang?lang:'';
    for (let [pos, char] of text.split("").entries()) {
      const type = getType(char);
      let keyPos = pos % key.length;
      if(type === 'en') {
        lang = 'en';
        encoded += Vigenere.encryptEnCharacter(char, key[keyPos].charCodeAt()*(decryption?-1:1));
      }
      else if(type === 'uk') {
        lang = 'uk';
        encoded += Vigenere.encryptUkCharacter(char, key[keyPos].charCodeAt()*(decryption?-1:1));
      }
      else if(type === ' ') {
        if(lang === 'uk')
          encoded += Vigenere.encryptUkCharacter(char, key[keyPos].charCodeAt()*(decryption?-1:1));
        else
          encoded += Vigenere.encryptEnCharacter(char, key[keyPos].charCodeAt()*(decryption?-1:1));
      }
      else if(type=== "\n") {
        encoded += "\n"
      }
      else {
        encoded += char;
      }
    }
    return encoded;
  }
  static decrypt(input, key, lang) {
    return Vigenere.encrypt(input,key,lang, true);
  }
}

document.getElementById("file").onchange = function() {
    const file = $('#file')[0].files[0];
    const reader = new FileReader();
    const isDoc = file.name.indexOf(".doc") !==-1

    reader.onload = function(){
      $("#filename")[0].value = file.name;
      if (isDoc) {
        let arrayBuffer = this.result;
        mammoth.extractRawText({arrayBuffer: arrayBuffer}).then(function (resultObject) {
          $("#content")[0].value = resultObject.value
        })

      }
      else {
      	$("#content")[0].value = this.result;
      }

    }
    if (isDoc) 
      reader.readAsArrayBuffer(file);
    else
      reader.readAsText(file);
}

document.getElementById("caesar-toggle").onclick = function () {
  const hidden = $('#caesar')[0].hidden;
  for (let cipher of $(".cipher-menu"))
    cipher.hidden = true;
  $('#caesar')[0].hidden = !hidden;
} 

document.getElementById("trithemius-toggle").onclick = function () {
  const hidden = $('#trithemius')[0].hidden;
  for (let cipher of $(".cipher-menu"))
    cipher.hidden = true;
  $('#trithemius')[0].hidden = !hidden;
} 

document.getElementById("xor-toggle").onclick = function () {
  const hidden = $('#xor')[0].hidden;
  for (let cipher of $(".cipher-menu"))
    cipher.hidden = true;
  $('#xor')[0].hidden = !hidden;
} 

document.getElementById("vigenere-toggle").onclick = function () {
  const hidden = $('#vigenere')[0].hidden;
  for (let cipher of $(".cipher-menu"))
    cipher.hidden = true;
  $('#vigenere')[0].hidden = !hidden;
} 

function doCipherJob(job, key) {
  $('#content')[0].value = job($('#content')[0], key)
}

function doCaesarJob(job) {
  doCipherJob(job, Number($('#shift')[0].value));
}

function doTrithemiusJob(job) {
  const key = [Number($('#a')[0].value), Number($('#b')[0].value)]
  if($('#a')[0].value)
    key.push(Number($('#c')[0].value))
  doCipherJob(job, key);
}

function doVigenereJob(job) {
  doCipherJob(job, $('#keyword')[0].value);
}

function doXORJob(job) {
  doCipherJob(job, Number($('#len')[0].value));
}