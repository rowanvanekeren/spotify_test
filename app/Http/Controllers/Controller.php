<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Laravel\Socialite\Facades\Socialite;
use Auth;
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    function testcURL(){
        $code = $_GET;
        //$code['code'] to get code;

        $redirectURL = 'http://localhost:80/spotify_test/public/callback';


        $client_id = '085a51e5775241c18991d6751571de71';
        $client_secret = 'a0c7f3538bed4d80b4c9665b2e2ddeca';

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,            'https://accounts.spotify.com/api/token' );
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
        curl_setopt($ch, CURLOPT_POST,           1 );
        /* curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 1);*/
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS,     'grant_type=authorization_code&code='. $code['code'] . '&redirect_uri=' . $redirectURL);
        curl_setopt($ch, CURLOPT_HTTPHEADER,     array('Authorization: Basic '.base64_encode($client_id.':'.$client_secret)));

        $result=curl_exec($ch);
        return $result;
    }

    function loginUsr(){
   /*     $cliend_id = '';
        $client_secret = '';
        $spot_api_redirect = 'http://localhost:80/spotify_test/public/callback';
        $credentials = "client:secret";*/

        $client_id = '085a51e5775241c18991d6751571de71';
        $client_secret = 'a0c7f3538bed4d80b4c9665b2e2ddeca';

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,            'https://accounts.spotify.com/api/token' );
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
        curl_setopt($ch, CURLOPT_POST,           1 );
       /* curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 1);*/
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS,     'grant_type=client_credentials' );
        curl_setopt($ch, CURLOPT_HTTPHEADER,     array('Authorization: Basic '.base64_encode($client_id.':'.$client_secret)));

        $result=curl_exec($ch);
        return $result;
    }

    function testSocialite(){
        $user = Socialite::driver('spotify')->user();
        $accessTokenResponseBody = $user->token;

        return dd($user);
    }

    function redTest(){
        $scopes = [
            'user-library-read',
            'user-library-modify',
            'user-read-birthdate',
            'user-read-email'
        ];
        return Socialite::driver('spotify')->scopes($scopes)
            ->redirect();
    }

    function deAuthorize(){
    }
}
