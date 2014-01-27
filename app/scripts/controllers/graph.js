app.controller('GraphCtrl', function ($scope) {

    'use strict';

    $scope.chartData = [
      {
        date: '2013-01-01',
        sent: 20000,
        openRate: 30,
        bounceRate: 5,
        clickRate: 15,
        optoutRate: 3
      },
      {
        date: '2013-01-02',
        sent: 35000,
        openRate: 23,
        bounceRate: 7,
        clickRate: 10,
        optoutRate: 1
      },
      {
        date: '2013-01-03',
        sent: 75773,
        openRate: 28,
        bounceRate: 4,
        clickRate: 22,
        optoutRate: 3
      },
      {
        date: '2013-01-04',
        sent: 13876,
        openRate: 27.4,
        bounceRate: 5.4,
        clickRate: 17.3,
        optoutRate: 3.2
      },
      {
        date: '2013-01-05',
        sent: 56897,
        openRate: 33.2,
        bounceRate: 3.4,
        clickRate: 14.7,
        optoutRate: 2.4
      }
    ];

    // set graph to include all stats on load
    $scope.includeStat = {
      sent: true,
      openRate: true,
      clickRate: true,
      bounceRate: true,
      optoutRate: true
    };


    /**
     * Actions to perform on page initialization
     */
    $scope.init = function() {
      
    };
  });
