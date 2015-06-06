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

.controller('BenefitListCtrl', function($scope) {
  $scope.benefits = {
    "Physical Activity": false,
    "Independence": false,
    "Cognitive Reasoning": false,
    "Socializing With Peers": false,
    "Risk Management Skills": false,
    "Mastery of Skills": false,
    "Self-Esteem/Confidence": false,
    "Curriculum Links": false,
    "Conflict Resolution": false,
    "Problem Solving": false,
    "Spatial Awareness": false,
    "Fine Motor Skills": false,
    "Gross Motor Skills": false
  }
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.groups = [ {name: "Height",
                    items: ["Discussion that if you can\'t get there on your own then you can\'t do it.",
                            "Keep three parts of body in contact with surface",
                            "Discussion and identification of dead versus living trees/branches",
                            "Encourage space",
                            "Keep educator/adult in close proximity",
                            "Clear fall zones"]},
                    {name: "Speed",
                    items: ["Establish site boundaries",
                            "Introduce wolf howl or owl hoot (call back)",
                            "Remove/prune sticks at eye level",
                            "Discussion of uneven ground",
                            "Identify and remove tripping hazards"]},
                    {name: "Dangerous Elements (Fire, Water, Animals, etc.)",
                    items: ["Wear hunting vests in season",
                            "Keep fires small",
                            "Remove tripping hazards",
                            "Identify poisonous plants",
                            "Slowly introduce fire (over 2-3 sessions)",
                            "Use protective gear",
                            "Remove dangling bits (scarves, hair)",
                            "Carry bear spray"]},
                    {name: "Use of Dangerous Tools",
                    items: ["Establish and mark tool area",
                            "Introduce concept of \"blood bubble\"",
                            "Use personal protective gear",
                            "Clear work zone and tripping hazards",
                            "Dialogue on safe tool usage and storage"]},
                    {name: "Potential to Become Lost",
                    items: ["Keep child:adult ratios low",
                            "Use wolf call and owl hoot",
                            "Identify potential \"runners\" and initiate dialogue with parents and children",
                            "Use GPS markers",
                            "Buddy system"]}]
                    
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
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
