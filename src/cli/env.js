export const parseEnv = () => {
  Object.entries(process.env).forEach(([prop, value]) => {
    if (prop.match(new RegExp('RSS_'))) {
      console.log(`${prop}=${value};`);
    }
  });
};

parseEnv();
