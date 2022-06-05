import path from 'path';
import { writeFile, stat } from 'fs/promises';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
  const filePath = path.resolve(__dirname, 'files', 'fresh.txt');

  await stat(filePath)
    .then(() => {
      throw new Error('FS operation failed');
    })
    .catch(e => {
      if (!e.message.match(/ENOENT/)) console.log(e.message);
    });

  await writeFile(filePath, 'I am fresh and young');
};

create();
