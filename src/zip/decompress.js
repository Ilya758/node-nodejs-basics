import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream, rm } from 'fs';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePathToArchive = path.join(__dirname, 'files', 'archive.gz');
const filePathToDecompress = path.join(
  __dirname,
  'files',
  'fileToCompress.txt',
);
const unzip = zlib.createUnzip();

export const decompress = async () => {
  const stream = createReadStream(filePathToArchive);
  stream
    .pipe(unzip)
    .pipe(createWriteStream(filePathToDecompress))
    .on('finish', () => {
      rm(filePathToArchive, console.log);
      console.log('finished!');
    });
};

decompress();
