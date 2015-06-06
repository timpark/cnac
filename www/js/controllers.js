angular.module('starter.controllers', [])

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

.controller('ControlCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
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
});
