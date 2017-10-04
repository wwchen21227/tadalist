var directives = angular.module('directives', []);
directives.directive('showOnHoverParent',
    function() {
        return {
            link : function(scope, element, attrs) {
            element.parent().bind('mouseenter', function() {
                element[0].style.display = 'inline-block';
            });
            element.parent().bind('mouseleave', function() {
                element[0].style.display = 'none';
            });
        }
    };
});