var lasifApp = angular.module("LASIFApp",
    ["ngRoute", "mgcrea.ngStrap", "route-segment", "view-segment",
     "nvd3ChartDirectives"]);


lasifApp.factory('projectInfo', function($http) {
    return $http.get('rest/info');
});


lasifApp.factory('eventList', function($http) {
    return $http.get('rest/event');
});

lasifApp.factory('latestOutput', function($http) {
    return $http.get('rest/latest_output');
});



// create the controller and inject Angular's $scope
lasifApp.controller('mainController', function ($scope, projectInfo) {
    $scope.project_name = null;
    $scope.project_root = null;

    projectInfo.success(function(data) {
        $scope.project_name = data.project_name;
        $scope.project_root = data.project_root;
    })
});


lasifApp.controller('mapController', function ($scope) {
});


lasifApp.controller('iterationsController', function ($scope) {
});