angular.module('app.controllers', [])
     
.controller('surveyCtrl', ['$scope', '$stateParams', '$ionicPopup', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup, Survey) {

    $scope.data = { name: '',
                    color: 'Green',
                    topping: 'Topping 1'
    };

    $scope.submitting = false;
    
    $scope.nameIsRequired = true;

    $scope.submit = function(){
        if($scope.data.name == ''){
            $scope.nameIsRequired = false;
        
            return;
        }
        
        $scope.nameIsRequired = true;
        
        $scope.submitting = true;
        
        Survey.add().then(function(){
            
            $ionicPopup.alert({
            title: 'Thank you!',
            template: 'Done1'
            });
        });
    }
}])
   
.controller('resultsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('searchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 