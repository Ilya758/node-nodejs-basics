export const parseArgs = () => {
  const replacer = arg => arg.replace('--', '');
  console.log(
    process.argv
      .slice(2)
      .reduce(
        (r, c, i) =>
          i % 2 === 0 ? (r += replacer(c)) : (r += ` is ${replacer(c)}, `),
        '',
      )
      .slice(0, -2),
  );
};

parseArgs();
