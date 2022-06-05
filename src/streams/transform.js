import { stdout, stdin } from 'process';

export const transform = async () => {
  stdin.on('data', data => {
    stdout.write(data.toString().split('').reverse().join(''));
  });

  process.on('SIGINT', () => {
    stdout.write('\nHave a nice day!');
    process.exit();
  });
};

transform();
