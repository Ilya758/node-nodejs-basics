import path from 'path';
import { stdout } from 'process';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
  const stream = createReadStream(fileToRead);
  stream.on('data', data => {
    stdout.write(data);
  });
};

read();
