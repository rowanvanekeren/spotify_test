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
    var CLIENT_ID = '085a51e5775241c18991d6751571de71';
    var REDIRECT_URI = 'http://localhost/spotify_test/public';
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
        'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + 50 + ', height=' + 50 + ', top=' + 50 + ', left=' + 50
    );
});