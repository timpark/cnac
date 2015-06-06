// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
cnacApp = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.experience', {
    url: '/experience',
    views: {
      'tab-experience': {
        templateUrl: 'templates/tab-experience.html',
        controller: 'ExperienceCtrl'
      }
    }
  })

  .state('tab.benefits', {
      url: '/benefits',
      views: {
        'tab-benefits': {
          templateUrl: 'templates/tab-benefits.html',
          controller: 'BenefitsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.risk', {
    url: '/risk',
    views: {
      'tab-risk': {
        templateUrl: 'templates/tab-risk.html',
        controller: 'RiskCtrl'
      }
    }
  })

  .state('tab.control', {
    url: '/control',
    views: {
      'tab-control': {
        templateUrl: 'templates/tab-control.html',
        controller: 'ControlCtrl'
      }
    }
  })

  .state('tab.assessment1', {
    url: '/assessment1',
    views: {
      'tab-assessment': {
        templateUrl: 'templates/tab-assessment1.html',
        controller: 'Assessment1Ctrl'
      }
    }
  })

  .state('tab.assessment2', {
    url: '/assessment2',
    views: {
      'tab-assessment': {
        templateUrl: 'templates/tab-assessment2.html',
        controller: 'Assessment2Ctrl'
      }
    }
  })

  .state('tab.assessment3', {
    url: '/assessment3',
    views: {
      'tab-assessment': {
        templateUrl: 'templates/tab-assessment3.html',
        controller: 'Assessment3Ctrl'
      }
    }
  })

  .state('tab.assessment4', {
    url: '/assessment4',
    views: {
      'tab-assessment': {
        templateUrl: 'templates/tab-assessment4.html',
        controller: 'Assessment4Ctrl'
      }
    }
  })

  .state('tab.assessment5', {
    url: '/assessment5',
    views: {
      'tab-assessment': {
        templateUrl: 'templates/tab-assessment5.html',
        controller: 'Assessment5Ctrl'
      }
    }
  })

  .state('tab.assessment6', {
    url: '/assessment6',
    views: {
      'tab-assessment': {
        templateUrl: 'templates/tab-assessment6.html',
        controller: 'Assessment6Ctrl'
      }
    }
  })

  .state('tab.assessment7', {
    url: '/assessment7',
    views: {
      'tab-assessment': {
        templateUrl: 'templates/tab-assessment7.html',
        controller: 'Assessment7Ctrl'
      }
    }
  })

  .state('tab.assessment8', {
    url: '/assessment8',
    views: {
      'tab-assessment': {
        templateUrl: 'templates/tab-assessment8.html',
        controller: 'Assessment8Ctrl'
      }
    }
  })

  .state('tab.about', {
    url: '/about',
    views: {
      'tab-about': {
        templateUrl: 'templates/tab-about.html',
        controller: 'AboutCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/assessment1');

});

cnacApp.controller("PhotoController", function($scope, $cordovaCamera) {
    $scope.takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }
});

cnacApp.controller("EmailController", function($scope) {
    $scope.sendEmail = function() {
        var body = window.localStorage['A1Location'] + " " +
            window.localStorage['A1NumChildren'] + " " +
            window.localStorage['A1AgeChildren'] + " " +
            window.localStorage['A1Relationship'] + " " +
            window.localStorage['A1NumAdults'];
        if(window.plugins && window.plugins.emailComposer) {
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
                console.log("Response -> " + result);
            }, 
            "Risk Assessment",       // Subject
            body,                    // Body
            ["timpark@gmail.com"],   // To
            null,                    // CC
            null,                    // BCC
            false,                   // isHTML
            null,                    // Attachments
            null);                   // Attachment Data
        }
    }
});
