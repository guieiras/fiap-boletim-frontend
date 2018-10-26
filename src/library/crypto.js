import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
const SECRET_KEY = 'FIAP-Boletim';

export function encrypt(data) {
  return AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
}

export function decrypt(cipher) {
  const decrypted = AES.decrypt(cipher, SECRET_KEY);
  return JSON.parse(decrypted.toString(Utf8));
}
