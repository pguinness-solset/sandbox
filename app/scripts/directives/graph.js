app.directive('lineGraph', ['d3', function(d3){

  'use strict';

  return {
    restrict: 'EA',
    scope: {
      data: '='
    },
    link: function(scope, element, attrs) {

      var startWidth = (attrs.width) || '100%',
          startHeight = (attrs.height) || '200px';

      var canvas = d3.select(element[0])
        .append('svg')
        .style('width', startWidth)
        .style('height', startHeight)
        .style('background', 'black');

      // generate the chart
      scope.render = function(data) {

        canvas.selectAll('*').remove();

        if (!data) {
          return;
        }

        var x,
            y,
            canvasWidth = d3.select(element[0]).node().offsetWidth,
            canvasHeight = element.children('svg')[0].offsetHeight;

        x = d3.scale.linear().range([0, canvasWidth]);
        y = d3.scale.linear().range([canvasHeight, 0]);

        x.domain(d3.extent(data, function(d) { return d.x; }));
        y.domain(d3.extent(data, function(d) { return d.y; }));
      };


      // browser resize event
      // window.onresize = function() {
      //   scope.$apply();
      // };

      // watch for resize event
      // scope.$watch(function(){
      //   return angular.element($window)[0].innerWidth;
      // }, function(){
      //   scope.render(scope.data);
      // });

      // watch for changes to the data object
      // scope.$watch('data', function(newVals, oldVals){
      //   return scope.render(newVals);
      // }, true);
    }
  };
}]);