// storage.js
import { AES, enc } from "crypto-js";

const storage = {
  getItem: async (key) => {
    const encryptedData = localStorage.getItem(key);
    if (!encryptedData) return null;
    return AES.decrypt(encryptedData, "user").toString(enc.Utf8);
  },
  setItem: async (key, value) => {
    const encryptedValue = AES.encrypt(value, "user").toString();
    localStorage.setItem(key, encryptedValue);
  },
  removeItem: async (key) => {
    localStorage.removeItem(key);
  },
};

export default storage;
