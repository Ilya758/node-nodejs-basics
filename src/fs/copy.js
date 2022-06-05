import path from 'path';
import { copyFile, mkdir, readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const copyFolder = 'files_copy';
const dirPath = path.join(__dirname, 'files');
const cfPath = path.join(__dirname, copyFolder);

export const copy = async () => {
  await mkdir(cfPath)
    .then(async () => {
      await readdir(dirPath).then(r => {
        r.forEach(fPath => {
          copyFile(path.join(dirPath, fPath), path.join(cfPath, fPath));
        });
      });
    })
    .catch(() => console.log('FS operation failed'));
};

copy();
