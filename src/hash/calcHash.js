import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const requiredFilePath = path.join(__dirname, 'fileToCalculateHashFor.txt');

export const calculateHash = async () => {
  const hex = crypto
    .createHash('sha256')
    .update(requiredFilePath)
    .digest('hex');
  console.log(hex);
  return hex;
};

calculateHash();
