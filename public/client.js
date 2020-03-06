const ukrainian_alphabet = [' ', 'а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я']
// console.log(ukrainian_alphabet.length) === 34
const english_alphabet = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// console.log(english_alphabet.length) === 27
const alphabet = ukrainian_alphabet.concat(english_alphabet.slice(1))
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181, 1187, 1193, 1201, 1213, 1217, 1223, 1229, 1231, 1237, 1249, 1259, 1277, 1279, 1283, 1289, 1291, 1297, 1301, 1303, 1307, 1319, 1321, 1327, 1361, 1367, 1373, 1381, 1399, 1409, 1423, 1427, 1429, 1433, 1439, 1447, 1451, 1453, 1459, 1471, 1481, 1483, 1487, 1489, 1493, 1499, 1511, 1523, 1531, 1543, 1549, 1553, 1559, 1567, 1571, 1579, 1583, 1597, 1601, 1607, 1609, 1613, 1619, 1621, 1627, 1637, 1657, 1663, 1667, 1669, 1693, 1697, 1699, 1709, 1721, 1723, 1733, 1741, 1747, 1753, 1759, 1777, 1783, 1787, 1789, 1801, 1811, 1823, 1831, 1847, 1861, 1867, 1871, 1873, 1877, 1879, 1889, 1901, 1907, 1913, 1931, 1933, 1949, 1951, 1973, 1979, 1987, 1993, 1997, 1999, 2003, 2011, 2017, 2027, 2029, 2039, 2053, 2063, 2069, 2081, 2083, 2087, 2089, 2099, 2111, 2113, 2129, 2131, 2137, 2141, 2143, 2153, 2161, 2179, 2203, 2207, 2213, 2221, 2237, 2239, 2243, 2251, 2267, 2269, 2273, 2281, 2287, 2293, 2297, 2309, 2311, 2333, 2339, 2341, 2347, 2351, 2357, 2371, 2377, 2381, 2383, 2389, 2393, 2399, 2411, 2417, 2423, 2437, 2441, 2447, 2459, 2467, 2473, 2477, 2503, 2521, 2531, 2539, 2543, 2549, 2551, 2557, 2579, 2591, 2593, 2609, 2617, 2621, 2633, 2647, 2657, 2659, 2663, 2671, 2677, 2683, 2687, 2689, 2693, 2699, 2707, 2711, 2713, 2719, 2729, 2731, 2741, 2749, 2753, 2767, 2777, 2789, 2791, 2797, 2801, 2803, 2819, 2833, 2837, 2843, 2851, 2857, 2861, 2879, 2887, 2897, 2903, 2909, 2917, 2927, 2939, 2953, 2957, 2963, 2969, 2971, 2999, 3001, 3011, 3019, 3023, 3037, 3041, 3049, 3061, 3067, 3079, 3083, 3089, 3109, 3119, 3121, 3137, 3163, 3167, 3169, 3181, 3187, 3191, 3203, 3209, 3217, 3221, 3229, 3251, 3253, 3257, 3259, 3271, 3299, 3301, 3307, 3313, 3319, 3323, 3329, 3331, 3343, 3347, 3359, 3361, 3371, 3373, 3389, 3391, 3407, 3413, 3433, 3449, 3457, 3461, 3463, 3467, 3469, 3491, 3499, 3511, 3517, 3527, 3529, 3533, 3539, 3541, 3547, 3557, 3559, 3571, 3581, 3583, 3593, 3607, 3613, 3617, 3623, 3631, 3637, 3643, 3659, 3671, 3673, 3677, 3691, 3697, 3701, 3709, 3719, 3727, 3733, 3739, 3761, 3767, 3769, 3779, 3793, 3797, 3803, 3821, 3823, 3833, 3847, 3851, 3853, 3863, 3877, 3881, 3889, 3907, 3911, 3917, 3919, 3923, 3929, 3931, 3943, 3947, 3967, 3989, 4001, 4003, 4007, 4013, 4019, 4021, 4027, 4049, 4051, 4057, 4073, 4079, 4091, 4093, 4099, 4111, 4127, 4129, 4133, 4139, 4153, 4157, 4159, 4177, 4201, 4211, 4217, 4219, 4229, 4231, 4241, 4243, 4253, 4259, 4261, 4271, 4273, 4283, 4289, 4297, 4327, 4337, 4339, 4349, 4357, 4363, 4373, 4391, 4397, 4409, 4421, 4423, 4441, 4447, 4451, 4457, 4463, 4481, 4483, 4493, 4507, 4513, 4517, 4519, 4523, 4547, 4549, 4561, 4567, 4583, 4591, 4597, 4603, 4621, 4637, 4639, 4643, 4649, 4651, 4657, 4663, 4673, 4679, 4691, 4703, 4721, 4723, 4729, 4733, 4751, 4759, 4783, 4787, 4789, 4793, 4799, 4801, 4813, 4817, 4831, 4861, 4871, 4877, 4889, 4903, 4909, 4919, 4931, 4933, 4937, 4943, 4951, 4957, 4967, 4969, 4973, 4987, 4993, 4999, 5003, 5009, 5011, 5021, 5023, 5039, 5051, 5059, 5077, 5081, 5087, 5099, 5101, 5107, 5113, 5119, 5147, 5153, 5167, 5171, 5179, 5189, 5197, 5209, 5227, 5231, 5233, 5237, 5261, 5273, 5279, 5281, 5297, 5303, 5309, 5323, 5333, 5347, 5351, 5381, 5387, 5393, 5399, 5407, 5413, 5417, 5419, 5431, 5437, 5441, 5443, 5449, 5471, 5477, 5479, 5483, 5501, 5503, 5507, 5519, 5521, 5527, 5531, 5557, 5563, 5569, 5573, 5581, 5591, 5623, 5639, 5641, 5647, 5651, 5653, 5657, 5659, 5669, 5683, 5689, 5693, 5701, 5711, 5717, 5737, 5741, 5743, 5749, 5779, 5783, 5791, 5801, 5807, 5813, 5821, 5827, 5839, 5843, 5849, 5851, 5857, 5861, 5867, 5869, 5879, 5881, 5897, 5903, 5923, 5927, 5939, 5953, 5981, 5987, 6007, 6011, 6029, 6037, 6043, 6047, 6053, 6067, 6073, 6079, 6089, 6091, 6101, 6113, 6121, 6131, 6133, 6143, 6151, 6163, 6173, 6197, 6199, 6203, 6211, 6217, 6221, 6229, 6247, 6257, 6263, 6269, 6271, 6277, 6287, 6299, 6301, 6311, 6317, 6323, 6329, 6337, 6343, 6353, 6359, 6361, 6367, 6373, 6379, 6389, 6397, 6421, 6427, 6449, 6451, 6469, 6473, 6481, 6491, 6521, 6529, 6547, 6551, 6553, 6563, 6569, 6571, 6577, 6581, 6599, 6607, 6619, 6637, 6653, 6659, 6661, 6673, 6679, 6689, 6691, 6701, 6703, 6709, 6719, 6733, 6737, 6761, 6763, 6779, 6781, 6791, 6793, 6803, 6823, 6827, 6829, 6833, 6841, 6857, 6863, 6869, 6871, 6883, 6899, 6907, 6911, 6917, 6947, 6949, 6959, 6961, 6967, 6971, 6977, 6983, 6991, 6997, 7001, 7013, 7019, 7027, 7039, 7043, 7057, 7069, 7079, 7103, 7109, 7121, 7127, 7129, 7151, 7159, 7177, 7187, 7193, 7207, 7211, 7213, 7219, 7229, 7237, 7243, 7247, 7253, 7283, 7297, 7307, 7309, 7321, 7331, 7333, 7349, 7351, 7369, 7393, 7411, 7417, 7433, 7451, 7457, 7459, 7477, 7481, 7487, 7489, 7499, 7507, 7517, 7523, 7529, 7537, 7541, 7547, 7549, 7559, 7561, 7573, 7577, 7583, 7589, 7591, 7603, 7607, 7621, 7639, 7643, 7649, 7669, 7673, 7681, 7687, 7691, 7699, 7703, 7717, 7723, 7727, 7741, 7753, 7757, 7759, 7789, 7793, 7817, 7823, 7829, 7841, 7853, 7867, 7873, 7877, 7879, 7883, 7901, 7907, 7919, 7927, 7933, 7937, 7949, 7951, 7963, 7993, 8009, 8011, 8017, 8039, 8053, 8059, 8069, 8081, 8087, 8089, 8093, 8101, 8111, 8117, 8123, 8147, 8161, 8167, 8171, 8179, 8191, 8209, 8219, 8221, 8231, 8233, 8237, 8243, 8263, 8269, 8273, 8287, 8291, 8293, 8297, 8311, 8317, 8329, 8353, 8363, 8369, 8377, 8387, 8389, 8419, 8423, 8429, 8431, 8443, 8447, 8461, 8467, 8501, 8513, 8521, 8527, 8537, 8539, 8543, 8563, 8573, 8581, 8597, 8599, 8609, 8623, 8627, 8629, 8641, 8647, 8663, 8669, 8677, 8681, 8689, 8693, 8699, 8707, 8713, 8719, 8731, 8737, 8741, 8747, 8753, 8761, 8779, 8783, 8803, 8807, 8819, 8821, 8831, 8837, 8839, 8849, 8861, 8863, 8867, 8887, 8893, 8923, 8929, 8933, 8941, 8951, 8963, 8969, 8971, 8999, 9001, 9007, 9011, 9013, 9029, 9041, 9043, 9049, 9059, 9067, 9091, 9103, 9109, 9127, 9133, 9137, 9151, 9157, 9161, 9173, 9181, 9187, 9199, 9203, 9209, 9221, 9227, 9239, 9241, 9257, 9277, 9281, 9283, 9293, 9311, 9319, 9323, 9337, 9341, 9343, 9349, 9371, 9377, 9391, 9397, 9403, 9413, 9419, 9421, 9431, 9433, 9437, 9439, 9461, 9463, 9467, 9473, 9479, 9491, 9497, 9511, 9521, 9533, 9539, 9547, 9551, 9587, 9601, 9613, 9619, 9623, 9629, 9631, 9643, 9649, 9661, 9677, 9679, 9689, 9697, 9719, 9721, 9733, 9739, 9743, 9749, 9767, 9769, 9781, 9787, 9791, 9803, 9811, 9817, 9829, 9833, 9839, 9851, 9857, 9859, 9871, 9883, 9887, 9901, 9907, 9923, 9929, 9931, 9941, 9949, 9967, 9973] 

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
function randomInt(max = 1, min = 0){
  return Math.floor(Math.random() * (max - min) + min);
}
function gcd(a,b) { 
    if(b===0) 
        return a 
    else
        return gcd(b,a%b)
}
function pow(x, exp, mod) { 
    let res = 1;
    x = x % mod;  
  
    while (exp > 0) { 
        if (exp & 1) 
            res = (res * x) % mod; 
  
        exp = exp >> 1;
        x = (x * x) % mod; 
    } 
    return res; 
} 

class Cipher {
  static isValidKey(key) {throw Error('Abstract method!')}
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
    if (typeof key === "string" && key.length > 0)
      return true;
    else 
      throw Error('Key is not valid!');
  }
  static encrypt(input, key, lang, decryption) {
    Vigenere.isValidKey(key)
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

class RSA extends Cipher {
  static generateKeys(publicField, privateField) {
    let p = primes[randomInt(primes.length)];
    let q = primes[randomInt(primes.length)];
    let n = p*q;
    let fi = (p-1)*(q-1)
    let e = 2
    while(e < fi) {
        if(gcd(e,fi) === 1) 
            break;
        e++;
    }
    publicField.value = e + "," + n;
    
    let d;
    for(let i = 1; i < 10; i++) {
        let x = 1 + i*fi;
        if(x%e === 0) {
            d = Math.floor(x/e);
            break;
        }
    }
    privateField.value = d + "," + n;
  }
  static isValidKey(key) {
    if(typeof key === "string" || Number(key.split(",")[0])!==NaN || Number(key.split(",")[1])!==NaN)
      return true;
    else
      throw Error('Key is not valid!');
  }
  static encrypt(input, key) {
    RSA.isValidKey(key);
    let [e,n] = key.split(",").map(x=>Number(x));
    let m = Number(input.value);
    return pow(m, e, n);
  }
  static decrypt(input, key) {
    RSA.isValidKey(key);
    let [d,n] = key.split(",").map(x=>Number(x))
    let c = Number(input.value);
    return pow(c, d, n);
  }
}

class KEA {
  static generate() {
    const p = $("#p")[0];
    const q = $("#q")[0];

    const aSecret = $("#a_secret")[0];
    const bSecret = $("#b_secret")[0];
    const aPublic = $("#a_public")[0];
    const bPublic = $("#b_public")[0];
    const bGot = $("#b_got")[0];
    const aGot = $("#a_got")[0];
    const sLeft = $("#s_left")[0];
    const sRight = $("#s_right")[0];

    p.value = primes[randomInt(primes.length)];
    q.value = primes[randomInt(primes.length)];
    
    aSecret.value = randomInt(Number(p.value),2)
    aPublic.value = pow(Number(q.value),Number(aSecret.value),Number(p.value))
    
    bSecret.value = randomInt(Number(p.value),2)
    bPublic.value = pow(Number(q.value),Number(bSecret.value),Number(p.value))

    bGot.value = bPublic.value;
    aGot.value = aPublic.value;

    sLeft.value = pow(Number(bGot.value),Number(aSecret.value),Number(p.value))
    sRight.value = pow(Number(aGot.value),Number(bSecret.value),Number(p.value))
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

document.getElementById("rsa-toggle").onclick = function () {
  const hidden = $('#rsa')[0].hidden;
  for (let cipher of $(".cipher-menu"))
    cipher.hidden = true;
  $('#rsa')[0].hidden = !hidden;
} 

document.getElementById("kea-toggle").onclick = function () {
  const hidden = $('#kea')[0].hidden;
  for (let cipher of $(".cipher-menu"))
    cipher.hidden = true;
  $('#kea')[0].hidden = !hidden;
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