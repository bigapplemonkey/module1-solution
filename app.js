(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.listString = '';
        $scope.foodCount = 0;
        $scope.message = '';
        $scope.messageClass = '';

        $scope.countFood = function() {
            var arrayOfStrings = $scope.listString.split(',');
            var foodCount = arrayOfStrings.length;
            $scope.messageClass = 'green';

            for (var i = 0; i < arrayOfStrings.length; i++) {
                if (arrayOfStrings[i].trim().length === 0) foodCount -= 1;
            }

            if (foodCount < 1) {
                $scope.message = 'Please enter data first!';
                $scope.messageClass = 'red';
            } else if (foodCount <= 3) $scope.message = 'Enjoy!';
            else $scope.message = 'Too much!';
        };
    }

})();
