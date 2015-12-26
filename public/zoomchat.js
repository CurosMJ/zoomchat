var zoomchat = angular.module("zoomchat", ["firebase"]);

zoomchat.controller('chatController', ['$scope','$firebaseArray',
    function($scope, $firebaseArray) {
        var messages = new Firebase("https://zoomchat.firebaseio.com/messages");
        $scope.messages = $firebaseArray(messages.limitToLast(5));

        $scope.newMessage = {from:"Anonymous",message:"Hi!"};

        $scope.sendMessage = function () {
            $scope.messages.$add($scope.newMessage);
            $('#message').val("");
        }
    }
]);