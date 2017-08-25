app.value('FieldTypes', {
        text: ['Text', 'should be text'],
        email: ['Email', 'should be an email address'],
        number: ['Number', 'should be a number'],
        date: ['Date', 'should be a date'],
        datetime: ['Datetime', 'should be a datetime'],
        time: ['Time', 'should be a time'],
        month: ['Month', 'should be a month'],
        week: ['Week', 'should be a week'],
        url: ['URL', 'should be a URL'],
        tel: ['Phone Number', 'should be a phone number'],
        color: ['Color', 'should be a color']
    });

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

                if( !_.has(state, 'title') || !_.isObject(state) || _.has(state, 'abstract') || _.has(state, 'parent')) {
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

app.directive('formField', function ($timeout, FieldTypes) {
        return {
            restrict: 'EA',
            templateUrl: 'views/form-field.html',
            replace: true,
            scope: {
                record: '=',
                field: '@',
                live: '@',
                required: '@'
            },
            link: function ($scope, element, attr) {
                $scope.$on('record:invalid', function () {
                    $scope[$scope.field].$setDirty();
                });

                $scope.types = FieldTypes;

                $scope.remove = function (field) {
                    delete $scope.record[field];
                    $scope.blurUpdate();
                };
                
                $scope.blurUpdate = function () {
                    if ($scope.live !== 'false') {
                        $scope.record.$update(function (updatedRecord) {
                            $scope.record = updatedRecord;
                        });
                    }
                };
                var saveTimeout;
                $scope.update = function () {
                    $timeout.cancel(saveTimeout);
                    saveTimeout = $timeout($scope.blurUpdate, 1000);
                };
            }
        };
    });