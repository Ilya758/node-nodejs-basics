import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdin, stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const spawnScriptFilePath = path.join(__dirname, 'files', 'script.js');

export const spawnChildProcess = async args => {
  const child = spawn('node', [spawnScriptFilePath, ...args]);

  stdin.pipe(child.stdin);

  child.stdout.on('data', data => {
    stdout.write(data);
  });
};

spawnChildProcess([1, 2, 3]);
