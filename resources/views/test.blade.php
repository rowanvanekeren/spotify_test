<!doctype html>
<html lang="nl" ng-app="spottest">
<head>
    <meta charset="UTF-8">

    <link href="{{ asset('css/test/test.css') }}" rel="stylesheet">
    <title>test spotify</title>
</head>
<body>
    <h1> dit is ene test</h1>


    <div ng-view>

    </div>




    <script src="{{url('/js/test.js')}}"></script>
    <script src="{{url('/js/testAng.js')}}"></script>
</body>
</html>