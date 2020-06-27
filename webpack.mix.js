const path = require('path');
const mix = require('laravel-mix');
const theme = path.basename(__dirname);
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const jsxFiles = {
  'src/js/carousel.js': 'dist/js'
};

const jsFiles = {
  'src/js/app.js': 'dist/js'
};

const scssFiles = {
  'src/sass/app.scss': 'dist/css',
  'src/sass/editor.scss': 'css',
};

const defaultOptions = {};

const webpackOptions = {
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      images: path.resolve(__dirname, 'images'),
    },
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'js'), 'node_modules']
  },
};

Object.entries(jsxFiles)
  .forEach(([src, dest]) => mix.react(src, dest, defaultOptions));

Object.entries(jsFiles)
  .forEach(([src, dest]) => mix.js(src, dest, defaultOptions));

Object.entries(scssFiles)
  .forEach(([src, dest]) => mix.sass(src, dest, defaultOptions));


if (mix.inProduction()) {
  mix.setResourceRoot(`/_resources/themes/${theme}/dist`);
} else if (mix.config.hmr) {
  mix.setResourceRoot(`http://${mix.config.hmrOptions.host}:${mix.config.hmrOptions.port}/`);
}

mix
  .webpackConfig(webpackOptions)
  .setPublicPath('dist')
  .sourceMaps(true, 'source-map')
  .extract();
