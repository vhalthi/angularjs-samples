var myApp = angular.module('myApp', []);

myApp.controller('ContactsController',  function($scope){
    $scope.contacts =[{name: 'djdh'}, {name: "dmjfkdjfk"}]
    window.$scope = $scope;
});
myApp.directive('people', function(){
    return{
        restrict: 'E',
        templateUrl: 'people.html'

    }
});
myApp.directive('person', function(){
    return{
        restrict: 'E',
        templateUrl: 'person.html'

    }
});


myApp.directive('contenteditable', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            console.log("element= ", elm);
            console.log("attrs= ", attrs);
            console.log("scope= ", scope);
            console.log("ctrl= ", ctrl);
            elm.css('color', 'green')
            // view -> model
            elm.on('blur', function() {
                scope.text = elm.text();
            });

            // model -> view
            ctrl.render = function(value) {
                elm.html(value);
            };

            // load init value from DOM
            ctrl.$setViewValue(elm.html());

            elm.bind('keydown', function(event) {
                console.log("keydown " + event.which);
                var esc = event.which == 27,
                    el = event.target;

                if (esc) {
                        console.log("esc");
                        ctrl.$setViewValue(elm.html());
                        el.blur();
                        event.preventDefault();                        
                    }
                    
            });
            
        }
    };
});

