import path from 'path';
import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesFolder = path.join(__dirname, 'files');

export const list = async () => {
  await readdir(filesFolder)
    .then(console.log)
    .catch(() => console.log('FS operation failed'));
};

list();
