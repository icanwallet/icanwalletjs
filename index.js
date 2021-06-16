const bip39 = require('iwcrypto/bip39')
/**
 * 创建助记词
 */
export const getMnemonic = bip39.generateMnemonic
/**
 * 验证助记词
 * @param {Object} mnemonic
 */
 export const isMnemonic = bip39.validateMnemonic