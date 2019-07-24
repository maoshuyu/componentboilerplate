const fs = require('fs');
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const glob = require('glob');

function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.sass/g, '.css')
    .replace(/\.scss/g, '.css');
}

try {
  glob.sync('lib/**/style/index.js')
    .map(file => ({
      content: fs.readFileSync(file, 'utf8'),
      path: file.replace(/index\.js/, 'css.js'),
    }))
    .forEach(({ content, path }) => fs.writeFileSync(path, cssInjection(content)));
  process.exit(0);
} catch (e) {
  // eslint-disable-next-line no-console
  console.log(e);
  process.exit(1);
}
