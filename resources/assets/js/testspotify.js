/**
 * Created by Rowan on 3-5-2017.
 */

var spotifyTest = angular.module("spottest", ['ngRoute']);

spotifyTest.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '../resources/views/angular/test1.html',
            controller: 'testController'
        }).when('/otherpage', {
            templateUrl: '../resources/views/angular/test2.html'
        })
}]);

spotifyTest.controller("testController", function ($scope, $http) {
    console.log('blasdbfasldkfsa');
    var CLIENT_ID = '6b284830006843e7ae7b170725715aed';
    var REDIRECT_URI = 'http://jmperezperez.com/spotify-oauth-jsfiddle-proxy/';
    function getLoginURL(scopes) {
        return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
            '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
            '&scope=' + encodeURIComponent(scopes.join(' ')) +
            '&response_type=token';
    }

    var url = getLoginURL([
        'user-read-email'
    ]);
   var w =  window.open(url,
        'Spotify',
        'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + 200 + ', height=' + 500 + ', top=' + (screen.height / 2) - (height / 2) + ', left=' + (screen.width / 2) - (width / 2)
    );
});