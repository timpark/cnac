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

.controller('HomeCtrl', function($scope) {
    var _Name = (window.localStorage['A0Name']) ? window.localStorage['A0Name'] : "";
    var _Program = (window.localStorage['A0Program']) ? window.localStorage['A0Program'] : "";
    var _Email = (window.localStorage['A0Email']) ? window.localStorage['A0Email'] : "";
    $scope.A0 = {
        Name: function(newName) {
            window.localStorage['A0Name'] = arguments.length ? (_Name = newName) : _Name;
            return window.localStorage['A0Name'];
        },
        Program: function(newProgram) {
            window.localStorage['A0Program'] = arguments.length ? (_Program = newProgram) : _Program;
            return window.localStorage['A0Program'];
        },
        Email: function(newEmail) {
            window.localStorage['A0Email'] = arguments.length ? (_Email = newEmail) : _Email;
            return window.localStorage['A0Email'];
        },
    }
})

.controller('Assessment1Ctrl', function($scope) {
    var _Location = (window.localStorage['A1Location']) ? window.localStorage['A1Location'] : "";
    var _NumChildren = (window.localStorage['A1NumChildren']) ? window.localStorage['A1NumChildren'] : "";
    var _AgeChildren = (window.localStorage['A1AgeChildren']) ? window.localStorage['A1AgeChildren'] : "";
    var _Relationship = (window.localStorage['A1Relationship']) ? window.localStorage['A1Relationship'] : false;
    var _NumAdults = (window.localStorage['A1NumAdults']) ? window.localStorage['A1NumAdults'] : "";
    $scope.A1 = {
        Location: function(newLocation) {
            window.localStorage['A1Location'] = arguments.length ? (_Location = newLocation) : _Location;
            return window.localStorage['A1Location'];
        },
        NumChildren: function(newNumChildren) {
            window.localStorage['A1NumChildren'] = arguments.length ? (_NumChildren = newNumChildren) : _NumChildren;
            return window.localStorage['A1NumChildren'];
        },
        AgeChildren: function(newAgeChildren) {
            window.localStorage['A1AgeChildren'] = arguments.length ? (_AgeChildren = newAgeChildren) : _AgeChildren;
            return window.localStorage['A1AgeChildren'];
        },
        Relationship: function(newRelationship) {
            window.localStorage['A1Relationship'] = arguments.length ? (_Relationship = newRelationship) : _Relationship;
            return window.localStorage['A1Relationship'];
        },
        NumAdults: function(newNumAdults) {
            window.localStorage['A1NumAdults'] = arguments.length ? (_NumAdults = newNumAdults) : _NumAdults;
            return window.localStorage['A1NumAdults'];
        }
    };
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

.controller('AboutCtrl', function($scope) {
})
