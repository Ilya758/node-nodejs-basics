import path from 'path';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
  await readFile(fileToReadPath, 'utf-8')
    .then(console.log)
    .catch(() => console.log('FS operation failed'));
};

read();
