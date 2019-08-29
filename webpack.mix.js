const mix         = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const fontfaces   = [
  '@fortawesome/fontawesome-free/webfonts'
];

mix
  .js('src/js/main.js', 'dist/js')
  .sass('src/scss/main.scss', 'dist/css')
  .copyDirectory('src/img', 'dist/img')
;

fontfaces.forEach((font) => {
  mix.copy(`node_modules/${font}`, 'dist/fonts');
});

mix
  .browserSync({
    open: false,
  })
  .options({
    processCssUrls: false,
    postCss: [
      tailwindcss('tailwind.config.js')
    ],
  })
  .sourceMaps()
  .disableNotifications();
;
