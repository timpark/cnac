angular.module('starter.controllers', ['ionic'])

.run(function($rootScope) {
  $rootScope.benefits = {
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

  $rootScope.groups = [ {name: "Height",
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
})

.controller('BenefitListCtrl', function($scope) {
})

.controller('ControlMeasuresCtrl', function($scope) {
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

.controller('RiskCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
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
    }
})

.controller('Assessment2Ctrl', function($scope) {

    var _Experience = (window.localStorage['A2Experience']) ? window.localStorage['A2Experience'] : "";
    var _GroupDetails = (window.localStorage['A2GroupDetails']) ? window.localStorage['A2GroupDetails'] : "";
    var _References = (window.localStorage['A2References']) ? window.localStorage['A2References'] : "";
    var _Activity = (window.localStorage['A2Activity']) ? window.localStorage['A2Activity'] : "";
    $scope.A2 = {
        Experience: function(newExperience) {
            window.localStorage['A2Experience'] = arguments.length ? (_Experience = newExperience) : _Experience;
            return window.localStorage['A2Experience'];
        },
        GroupDetails: function(newGroupDetails) {
            window.localStorage['A2GroupDetails'] = arguments.length ? (_GroupDetails = newGroupDetails) : _GroupDetails;
            return window.localStorage['A2GroupDetails'];
        },
        References: function(newReferences) {
            window.localStorage['A2References'] = arguments.length ? (_References = newReferences) : _References;
            return window.localStorage['A2References'];
        },
        Activity: function(newActivity) {
            window.localStorage['A2Activity'] = arguments.length ? (_Activity = newActivity) : _Activity;
            return window.localStorage['A2Activity'];
        }
    }
})

.controller('Assessment3Ctrl', function($scope) {
  var _Benefits = (window.localStorage['A3Benefits']) ? window.localStorage['A3Benefits'] : {};
  
  /*$scope.updateValue = function(name) {
    window.localStorage['A3Benefits'][name] = benefits[name] ? "YES" : "NO"
    return window.localStorage['A3Benefits'];
  }*/

  $scope.updateValue = function(name) {
    return window.localStorage['A3Benefits'][name];
  }
    
})

.controller('Assessment4Ctrl', function($scope) {
})

.controller('Assessment5Ctrl', function($scope) {
})

.controller('Assessment6Ctrl', function($scope) {
})

.controller('Assessment7Ctrl', function($scope, $ionicPopup) {

  $scope.settings = {
    enableFriends: true
  };

  $scope.risk = {
    title: "RISK",
    template: "MSG"
  };

  $scope.high = {
    title: "High",
    template: "This may not be a great idea. Are you sure you want to proceed?"
  };

  $scope.med = {
    title: "Medium",
    template: "Okay. Please proceed with caution."
  };

  $scope.low = {
    title: "Low Risk",
    template: "Go ahead and have fun!"
  };

  $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm($scope.risk);
   confirmPopup.then(function(res) {
     if(res) {
       // SOMETHING LATER
     }
   });
  };
})

.controller('Assessment8Ctrl', function($scope) {
})

.controller('AboutCtrl', function($scope) {
})
