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

    $scope.texts = ["Guarda Mamma... sto volando!",
        "Merito del mio amore?",
        "...credo sia il principio di Archimede!",
        "Mmmh...",
        "Senti, vogliamo dire qualcosa ai nostri ospiti?",
        "Si! Aiutooooooooo! Salvatemi!",
        "... spiritoso!",
        "Ok, ci riprovo: Venghino Signori, venghino! Cibo, musica, ricchi premi e cotillons!",
        "Si! Divertimento assicurato!",
        "Evviva!",
        "Vi aspettiamo!",
        "Pronti?",
        "Partenza...",
        "Via!",
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
