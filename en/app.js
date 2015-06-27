/**
 * Created by luca on 5/17/15.
 */
var weddingApp = angular.module('weddingApp', ['ngAnimate']);

weddingApp.controller('rsvpController', ['$scope', function ($scope) {
    $scope.rsvpDone = false;
}]);

weddingApp.controller('showHide', function ($scope) {

});


weddingApp.controller('balloonController', function ($scope) {

    $scope.texts = ["Look! Look... I'm flying!",
        "Is it because of our immeasurable love?",
        "...I'd rather say it's the Archimedes' principle!",
        "Mmmh... I see.",
        "Do you think we should tell something to our guests?",
        "Oh yes! Please, heeeeelp me!!!",
        "...yeah nice try!",
        "All right: Come one, come all! Music, food, fun and prizes!",
        "Oh yes! Can't wait to celebrate with you guys!",
        "Evviva!",
        "See you in Italy!",
        "Ready?",
        "Steady...",
        "Go!",
        "Ciaoooooooooo!!!"];


    $scope.textIndex = 0;
    $scope.isDone = false;

    $scope.currentText = function () {
        return $scope.texts[$scope.textIndex];
    };

    $scope.isMirta = function () {
        return $scope.textIndex % 2 == 0;
    };

    $scope.isLuca = function () {
        return $scope.textIndex % 2 != 0;
    };

    $scope.incrementTextIndex = function () {
        if ($scope.textIndex < $scope.texts.length - 1) {
            $scope.textIndex = $scope.textIndex + 1;
            $scope.isDone = false;
        }
        else {
            $scope.textIndex = -1;
            $scope.isDone = true;
        }

    };
});
