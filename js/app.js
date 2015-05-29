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

weddingApp.controller('showhide', ['ngAnimate', function ($scope) {

}]);


weddingApp.controller('balloonController', function ($scope) {

    $scope.texts = ["Guarda Mamma... sto volando!",
        "Merito del mio amore?",
        "...credo sia il principio di Archimede!",
        "...",
        "Senti, vogliamo dire qualcosa ai nostri ospiti?",
        "Si! Aiutooooooooo! Salvatemi!",
        "... spiritoso!",
        "Ok, ci riprovo: Venghino Signori, venghino! Cibo, musica, ricchi premi e cotillons!",
        "Si! Divertimento assicurato!",
        "Non vediamo l'ora di festeggiare insieme a voi!",
        "Pssss! Hey! Hey tu, mi aiuti?",
        "Ti ho detto che non puoi chiedere l'aiuto ai nostri amici!",
        "Non darle retta!",
        "Hey tu, ancora non ti sei stancato di cliccare?",
        "Cosa credi di ottenere continuando a premere il mouse sulle nostre facce?",
        "Di sicuro non troverà il Sacro Graal!",
        "Dovresti stare attento... potrebbe paralizzartisi il dito!",
        "E poi sono dolori! Fossi in te smetterei...",
        "Facciamo cosa: per ogni tuo click, mi offri un drink?",
        "Per ogni drink a Luca, due a me!",
        "Niente, sembri motivato...",
        "Va bene, basta! Ci siamo stancati...",
        "Ok, Ok! Hai vinto tu! Ci vediamo al matrimonio! Ciaoooo!"];


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
