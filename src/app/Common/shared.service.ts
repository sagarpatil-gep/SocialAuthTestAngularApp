import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js'; 

@Injectable()
export class SharedService {

 strVectorkey:string = "Cumulus@Gep$nbventures3579";
 strSecretKey:string = "jdsg432387#jdsg432387#jdsg432387#jdsg432387#";
  constructor() {
  }

  encryptData(val) {    
    var keyToSet = this.pad_with_zeroes(this.strVectorkey, 16);
    var vectorKey = CryptoJS.enc.Utf8.parse(keyToSet.substring(0,16));

    keyToSet = this.pad_with_zeroes(this.strSecretKey, 32);
    var secretKey = CryptoJS.enc.Utf8.parse(keyToSet.substring(0, 32));

    var resultObject = CryptoJS.AES.encrypt(val.trim(), secretKey, { iv: vectorKey });
    var encryptedString = (resultObject.ciphertext).toString(CryptoJS.enc.Base64);
    return encryptedString.replace(" ", "+");
  }

  decryptData(val) {        
    var keyToSet = this.pad_with_zeroes(this.strVectorkey, 16);
    var vectorKey = CryptoJS.enc.Utf8.parse(keyToSet.substring(0,16));

    keyToSet = this.pad_with_zeroes(this.strSecretKey, 32);
    var secretKey = CryptoJS.enc.Utf8.parse(keyToSet.substring(0, 32));

    var resultObject = CryptoJS.AES.decrypt(val, secretKey, { iv: vectorKey });

    var encryptedString = (resultObject).toString(CryptoJS.enc.Utf8);
    return encryptedString;
  }

  pad_with_zeroes(my_string:string ,length:any) {
    while (my_string.length <= length) {
        my_string = my_string + '0';
    }
  
    return my_string;
  }

}