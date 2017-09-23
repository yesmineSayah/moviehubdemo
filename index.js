var myApp = angular.module('app', []).controller("MainController", function ($scope) {
    $scope.idIndex = 5;
    $scope.movies = [{
        id: 1,
        title: "NoteBook",
        duration: 124,
        actors: "Ryan Gosling , Rachel McAdams",
        director: "Nick Cassavetes",
    }, {
        id: 2,
        title: "Three steps above heaven",
        duration: 118,
        actors: "Mario Casas , María Valverde",
        director: "Fernando González Molina",
    }, {
        id: 3,
        title: "Fifty shades darker",
        duration: 129,
        actors: "Jamie Dornan , Dakota Johnson",
        director: "James Foley"
    }, {
        id: 4,
        title: "Sweet november",
        duration: 120,
        actors: "Charlize Theron , Keanu Reeves",
        director: "Pat O'Connor"
    }];
    $scope.visible = false;
    $scope.typeAdd = false;
    $scope.addButton = function () {
        $scope.visible = true;
        $scope.typeAdd = true;
        $scope.movie = {};
    }

    $scope.addMovie = function () {
        $scope.movie.id = $scope.idIndex;
        $scope.idIndex++;
        let movie = new Object();
        Object.assign(movie, $scope.movie)
        $scope.movies.push($scope.movie);
        $scope.movie = {};
        $scope.visible = false;
    }

    $scope.selectButton = function (movie) {
        $scope.visible = true;
        $scope.typeAdd = false;
        $scope.movie = movie;
    }

    function getIndex(movie) {
        for (let i = 0; i < $scope.movies.length; i++) {
            if ($scope.movies[i].id === movie.id) {
                return i;
            }
        }
        return -1;
    }

    $scope.editMovie = function () {
        let index = getIndex($scope.movie);
        let movie = new Object();
        Object.assign(movie, $scope.movie)
        $scope.movies[index] = movie;
        $scope.movie = {};
        $scope.visible = false;
    }
    $scope.removeMovie = function () {
        let index = getIndex($scope.movie);
        let movie = new Object();
        Object.assign(movie, $scope.movie)
        $scope.movies.splice(index, 1)
        $scope.movie = {};
        $scope.visible = false;
    }
});
