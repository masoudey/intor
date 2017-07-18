app.directive('navigation', ['$parse', '$compile', function ($parse, $compile) {
    return {
        restrict: 'E',
        templateUrl: 'views/navbar.html',
        replace: true,
        scope: {},
        controller: ['$scope', '$state', function ($scope, $state) {
            var menu = [];
                var states = $state.get();

            _.each(states, function(state, key) {
                if(!_.isObject(state) || _.has(state, 'abstract') || _.has(state, 'parent')) {
                    return;
                }

                var object = {
                    text:  _.has(state, 'title') 
                            ? state.title : '(no title)',
                    state: state.name,
                    href: state.url
               }

               menu.push(object);
            });

            $scope.nav = {};
            $scope.nav.menu = menu;
        }],
        link: function (scope, element, attrs) {
            scope.nav.brand = attrs.navBrand; 
            
        }
    };
 }]);