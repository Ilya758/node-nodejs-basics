import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePathToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
const filePathToArchive = path.join(__dirname, 'files', 'archive.gz');
const gZip = zlib.createGzip();

export const compress = async () => {
  const stream = createReadStream(filePathToCompress);
  stream
    .pipe(gZip)
    .pipe(createWriteStream(filePathToArchive))
    .on('finish', () => console.log('finished!'));
};

compress();
