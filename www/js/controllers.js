angular.module('starter.controllers', ['ionic'])

.controller('ExperienceCtrl', function($scope) {})

.controller('BenefitsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('RiskCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ControlCtrl', function($scope, $ionicPopup) {

  $scope.settings = {
    enableFriends: true
  };

  $scope.risk = {
    title: "RISK",
    template: "MSG"
  };

  $scope.high = {
    title: "High",
    template: "Are you sure you want to proceed?"
  };

  $scope.med = {
    title: "Medium",
    template: "Please proceed with caution."
  };

  $scope.low = {
    title: "Low Risk",
    template: "Go ahead and have fun!"
  };

  $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm($scope.risk);
   confirmPopup.then(function(res) {
     if(res) {
       // TO FILL IN LATER
     }
   });
  };
})

.controller('Assessment1Ctrl', function($scope) {
})

.controller('Assessment2Ctrl', function($scope) {
})

.controller('Assessment3Ctrl', function($scope) {
})

.controller('Assessment4Ctrl', function($scope) {
})

.controller('Assessment5Ctrl', function($scope) {
})

.controller('Assessment6Ctrl', function($scope) {
})

.controller('Assessment7Ctrl', function($scope) {
})

.controller('Assessment8Ctrl', function($scope) {
})
