import path from 'path';
import { stdin } from 'process';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');

export const write = async () => {
  const file = createWriteStream(fileToWrite);
  stdin.pipe(file);
};

write();
