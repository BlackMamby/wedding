/**
 * Created by luca on 5/17/15.
 */
var weddingApp = angular.module('weddingApp',[]);

weddingApp.controller('rsvpController', ['$scope', function($scope) {
    $scope.rsvpDone = false;
}]);

weddingApp.controller('rsvpController', function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    }
});
