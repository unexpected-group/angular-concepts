(function(){
  angular.module("myApp", [ ])
    .directive("viewPanels", function(){
      return {
        replace: true,
        restrict: 'E',
        controller: function(){
          var current = 1;

          this.setCurrent = function(index){
            current = index;
          };

          this.isCurrent = function(index){
            return index === current;
          };
        },
        controllerAs: 'panels',
        templateUrl: 'view-panels.html',
      };
    })
     .directive("busquedaJugador", function(){
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'busqueda-jugador.html',
      };
    })
})();
