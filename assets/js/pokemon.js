angular.module('Pokemon', []);

angular.module('Pokemon')
.controller('PokeCtrl', [
        '$scope', '$http',
function($scope,$http) {

$scope.getPokemon = function() {
 $http.post('/pokemon', {
  pokemonId: $scope.pokemonId
})
.then(function(res){
  $scope.pokemon = res.data;
});
};
console.log("it works!!")

}]);