(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

    $scope.countlunch = function () {

        String.prototype.splitPlus = function(sep) {
            var a = this.split(sep)
            var b = new Array;

            for(var i=0; i<a.length;i++ ) {
                if (!(a[i] == '') && !(a[i].length == 1)){
                    b.push(a[i]);    
                }     
            }
            return b;
        };

        var test = new String;
        test = $scope.xlunch; 

        if(test == "" || test == null)
        {
            $scope.xmessage = "Please enter data first";
            $scope.colormsg = {color:'red'};
        } else {
            var rs = /\s*,\s*/;
            var arrayLunchs = test.splitPlus(rs);
            $scope.xmessage = (arrayLunchs.length <= 3) ? "Enjoy!":"Too much!";
            $scope.colormsg = {color:'green'};
        }
  };

  $scope.clearmsg = function () {
        $scope.xmessage = "";
        $scope.xlunch = "";
  };
}

})();