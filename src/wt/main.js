import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const onWorkerEndedCalculations = (counter, length, workerResults, res) => {
  if (counter === length) {
    console.log(workerResults);
    res(workerResults);
    process.exit(0);
  }
};

export const performCalculations = async () => {
  const workerPath = path.join(__dirname, 'worker.js');

  const { length } = cpus();

  const workerResults = [];

  let counter = 0;

  return new Promise(res => {
    for (let i = 0; i < length; i += 1) {
      const worker = new Worker(workerPath);

      workerResults.push({});

      worker.postMessage(10 + i);

      worker.on('error', () => {
        counter += 1;

        workerResults[i] = {
          status: 'error',
          data: null,
        };

        onWorkerEndedCalculations(counter, length, workerResults, res);
      });
      worker.on('message', data => {
        counter += 1;

        workerResults[i] = {
          status: 'resolved',
          data,
        };

        onWorkerEndedCalculations(counter, length, workerResults, res);
      });
    }
  });
};

performCalculations();
