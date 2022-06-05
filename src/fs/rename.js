import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const wrongFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const correctFilePath = path.join(__dirname, 'files', 'properFilename.md');

export const rename = async () => {
  await fs
    .rename(wrongFilePath, correctFilePath)
    .catch(() => console.log('FS operation failed'));
};

rename();
