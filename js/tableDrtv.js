/**
 * Created by RAZZKO on 30.10.2016.
 */
app.directive('sortTable', [
    function () {
        return {
            restrict: 'E',
            templateUrl: 'tableTemplate.html',
            scope: {
                tableHeaders: "=",
                tableItems: "="
            },
            link: function(scope) {
                scope.sortType = '0';
                scope.sortReverse = false;
                scope.currentPage = 0;
                scope.listSize = 10;

                scope.sortCheck = function (index) {
                    scope.sortType = index.toString();
                    if (scope.sortReverse) {
                        scope.sortReverse = false;
                    } else {
                        scope.sortReverse = true;
                    }
                };

                scope.numberOfPages=function(){
                    return Math.ceil(scope.tableItems.length/scope.listSize);
                }
            }
        }
    }
]);