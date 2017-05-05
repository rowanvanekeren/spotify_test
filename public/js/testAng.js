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
    var REDIRECT_URI = 'http://localhost:80/spotify_test/public/callback';
    var scopes = 'user-read-private user-read-email';
    function getLoginURL(scopes) {
        return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
            '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
            '&scope=' + encodeURIComponent(scopes.join(' ')) +
            '&response_type=code';
    }

    var url = getLoginURL([
        'user-read-email user-read-private user-read-birthdate'
    ]);
    $scope.openlogin = function(){
        var w =  window.open(url,
            'Spotify',
            'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + 200 + ', height=' + 500 + ', top=' + 80 + ', left=' + 80
        );
        console.log(w.location.href);
        console.log(extractUrl(w.location));
    }

});


function extractUrl(windowLocation) {

    var query_string = {};
    var query = windowLocation.href;
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }

    //extract acces_token from dirty url
    var strName, strValue;
    var tokenKeyName = 'access_token';
    var codeKeyName = 'code';
    var errorKeyName = 'error';
    for (strName in query_string) {
        strValue = query_string[strName];

        if(strName.indexOf(tokenKeyName) !== -1) {
            //if tokenKeyName is in string make key in object with access token
            query_string[tokenKeyName] = strValue;
        }else if(strName.indexOf(codeKeyName) !== -1){
            query_string[codeKeyName] = strValue;
        }else if(strName.indexOf(errorKeyName) !== -1){
            query_string[errorKeyName] = strValue;
        }
    }

    return query_string;
}

function checkIfValidUserByCookie() {

}