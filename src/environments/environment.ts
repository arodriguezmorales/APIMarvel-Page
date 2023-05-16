import * as CryptoJS from 'crypto'

const publicKey = "483f66504bf6cd16db26527a625b6516";
const privateKey = "ee1d5f9fc4303ae77199704eb7887fb911e32e1c";
const timeStamp = Date.now();

let message = timeStamp + privateKey + publicKey;
let hash = CryptoJS.createHash('md5').update(message).digest('hex');

export const environment = {
    production: true,
    apiKeyComicMarvel: "https://gateway.marvel.com:443/v1/public/comics?ts:"+ timeStamp +"&apikey:"+ publicKey +"&hash:"+hash,
    apiKeyCharactersMarvel: "https://gateway.marvel.com:443/v1/public/characters?ts="+ timeStamp +"&apikey="+ publicKey +"&hash="+hash   
};
