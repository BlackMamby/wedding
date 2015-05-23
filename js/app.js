/**
 * Created by luca on 5/17/15.
 */
var weddingApp = angular.module('weddingApp', []);

weddingApp.controller('rsvpController', ['$scope', function ($scope) {
    $scope.rsvpDone = false;
}]);

weddingApp.controller('rsvpController', function ($scope, $location, $anchorScroll) {
    $scope.scrollTo = function (id) {
        $location.hash(id);
        $anchorScroll();
    }
});

weddingApp.controller('balloonController', function ($scope) {

    $scope.texts = ["Guarda Mamma... sto volando!",
        "Merito del mio amore?",
        "...credo sia il principio di Archimede!",
        "...",
        "Vogliamo dire qualcosa ai nostri ospiti?",
        "Aiutooooooooo! Salvatemi!",
        "... spiritoso!",
        "Ok, ci riprovo: Venghino Signori, venghino! Cibo, musica, ricchi premi e cotillons!",
        "Ancora non ti sei stancato di cliccare?",
        "Guarda che ti si paralizza il dito! Sul serio...",
        "Per ogni drink a Luca, due a me!",
        "Guarda che possiamo andare avanti all'infinito...",
        "Facciamo cosÃ¬: per ogni click, mi offri un drink?",
        "Va bene, ci siamo stancati... hai vinto tu! Ci vediamo al matrimonio!"];


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
        }
        else {
            $scope.textIndex = 0;
            $scope.isDone = true;
        }

    };
});
