const { readdirSync } = require('fs');
const { build } = require('esbuild');
const { join } = require('path');
const pkgJson = require('../package.json');

const external = Object.keys(pkgJson.dependencies).concat(Object.keys(pkgJson.devDependencies));

readdirSync(__dirname, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .forEach((d) =>
    build({
      entryPoints: [join(__dirname, d.name, 'index.ts')],
      bundle: true,
      outfile: join(__dirname, d.name, 'index.js'),
      platform: 'node',
      external: ['./node_modules/*', './src/*'],
    })
  );
