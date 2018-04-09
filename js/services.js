angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('Survey', ['$q', '$http', '$ionicPopup', function($q, $http, $ionicPopup){

    var currentID = 1;
    
    var api_url  = 'https://sheetsu.com/apis/v1.0/1d27368dcb77';
    
    var ret = {
        all: function(){ 
            var deferred = $q.defer();
            
            $http.get(api_url).then(function(resp){
                console.log(resp);
            })
            
            return deferred.promise;
        },

        add: function(){ 
            
            var deferred = $q.defer();

            $http(
                {   url: 'https://api.airtable.com/v0/appHevBQOKB5qy5mq/Names', 
                    
                    method: 'POST',
                    
                    data: {
                        'fields': {
                        'id': '3',
                        'name': 'Ali  gggfff'
                        }
                    },
                    
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: 'Bearer keyQrq5vzloJbIwjA'
                    }
                }
            )
            .then(function(resp){
                deferred.resolve(resp.data);
            });
            
            return deferred.promise;            
        }
    }
    
    return ret;
}]);