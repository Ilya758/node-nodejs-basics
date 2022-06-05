import { rm } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

export const remove = async () => {
  await rm(filePath).catch(() => console.log('FS operation failed'));
};

remove();
