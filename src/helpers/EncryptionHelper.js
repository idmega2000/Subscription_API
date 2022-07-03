import crypto from 'crypto';
import EnvData from 'configs/EnvData';

const { ENCYPTION_KEY, ENCRYPTION_MODE } = EnvData;

/**
 * @description This class a helper class for Encryption
 */
class EncryptionHelper {
  /**
   * method that encrypts a given payload
   * @param {string | object} value
   * @returns { string } encryptedHex
   */
  static encryptBasic(value) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ENCRYPTION_MODE, ENCYPTION_KEY, iv);
    let encrypted = cipher.update(value, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return [encrypted, iv, cipher.getAuthTag()];
  }

  /**
   * method that decrypts an encrypted payload
   * @param {string} encryptedText - the encrypted text
   * @param {string} iv the iv vector
   * @param {string} authTag the authentication tag
   * @returns {string | text} plaintext
   */
  static decryptBasic(encryptedText, iv, authTag) {
    const decipher = crypto.createDecipheriv(ENCRYPTION_MODE, ENCYPTION_KEY, iv);
    decipher.setAuthTag(authTag);
    const decrypted = decipher.update(encryptedText, 'base64', 'utf8');
    return decrypted + decipher.final('utf8');
  }

  /**
   * method that decrypts an encrypted payload
   * @param {string} data - the data that has the encrypted information
   * @returns {string | text} plaintext
   */
  static encrypt(data) {
    const [encrypted, iv, authTag] = EncryptionHelper.encryptBasic(data);
    const bufferEncrypted = Buffer.from(encrypted, 'base64');
    const ivBuffer = Buffer.from(iv, 'base64');
    const arr = [bufferEncrypted, ivBuffer, authTag];
    return Buffer.concat(arr).toString('base64');
  }

  /**
   * method that decrypts an encrypted payload
   * @param {string} encryptedText - the data that has the encrypted information
   * @returns {string | text} plaintext
   */
  static decrypt(encryptedText) {
    if (encryptedText) {
      const fullEncryptedResponseToBuffer = Buffer.from(encryptedText, 'base64');
      const getTotalLength = fullEncryptedResponseToBuffer.byteLength;
      const authTagFromResponse = fullEncryptedResponseToBuffer.slice(getTotalLength - 16, getTotalLength);
      const ivFromResponse = fullEncryptedResponseToBuffer.slice(getTotalLength - 32, getTotalLength - 16);
      const cipherFromresponse = fullEncryptedResponseToBuffer.slice(0, getTotalLength - 32);
      return EncryptionHelper.decryptBasic(cipherFromresponse, ivFromResponse, authTagFromResponse);
    }
    return encryptedText;
  }

  /**
* @description, funtion for masking
* @param {object} pan - pan to be masked
* @returns {object} -the masked string
*/
  static masked(pan) {
    const firstSix = pan.substring(0, 6);
    const lastFour = pan.substring(pan.length - 4);

    const mask = pan.substring(4, pan.length - 6).replace(/\d/g, '*');

    return `${firstSix}${mask}${lastFour}`;
  }

  /**
* @description, funtion for masking
* @param {object} pan - pan to be masked
* @returns {object} -the masked string
*/
  static maskedPanNumbersOnly(pan) {
    const firstSix = pan.substring(0, 6);
    const lastFour = pan.substring(pan.length - 4);
    return `${firstSix}${lastFour}`;
  }
}

export default EncryptionHelper;
