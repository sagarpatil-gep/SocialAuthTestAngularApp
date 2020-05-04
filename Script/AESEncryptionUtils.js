
/*
    * Secret key and vector key will both be stored in the form of a WordArray
    */
var secretKey = null;
var vectorKey = null;

var aesEncryption = {

    /*
     * @method Sets the secret key for encryption and decryption
     */
    setSecretKey: function (keyToSet) {
        if (keyToSet != null && keyToSet != undefined && keyToSet != "") {
            keyToSet = aesEncryption.pad_with_zeroes(keyToSet, 32);
            secretKey = CryptoJS.enc.Utf8.parse(keyToSet.substring(0, 32));
        }
    },

    /*
     * @method Returns the secret key
     */
    getSecretKey: function () {
        return secretKey;
    },

    /*
     * @method Sets the vector key for encryption and decryption
     */
    setVectorKey: function (keyToSet) {
        if (keyToSet != null && keyToSet != "") {
            keyToSet = aesEncryption.pad_with_zeroes(keyToSet, 16);
            vectorKey = CryptoJS.enc.Utf8.parse(keyToSet.substring(0,16));
        }
    },

    /*
     * @method Returns the vector key
     */
    getVectorKey: function () {
        return vectorKey;
    },

    /*
     * @method Encrypts the data based on the secret key and the vector key set beforehand
     */
    encryptData: function (dataToEncrypt) {
        var encryptedString = "";
        if (dataToEncrypt != "" && dataToEncrypt != null) {
            var resultObject = CryptoJS.AES.encrypt(dataToEncrypt, secretKey, { iv: vectorKey });
            encryptedString = (resultObject.ciphertext).toString(CryptoJS.enc.Base64);
            return encryptedString.replace("/", "*");
        }
    },

    /*
     * @method Decrypts the data based on the secret key and the vector key set beforehand
     */
    decryptData: function (dataToDecrypt) {
        if (dataToDecrypt != null && dataToDecrypt != undefined) {
            CryptoJS.AES.decrypt();
            return decryptedString;
        }
    },

    pad_with_zeroes: function (my_string,length) {
        while (my_string.length <= length) {
            my_string = my_string + '0';
        }

        return my_string;
    }

};

