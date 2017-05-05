const { mix } = require('laravel-mix');

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
mix.scripts([
    'resources/assets/js/angular.min.js',
    'resources/assets/js/angular-route.min.js'
], 'public/js/test.js');
mix.scripts([
    'resources/assets/js/testspotify.js'
], 'public/js/testAng.js');
mix.js('resources/assets/js/app.js', 'public/js')
   /*.sass('resources/assets/sass/app.scss', 'public/css')*/
   .sass('resources/assets/sass/test.scss', 'public/css/test');
