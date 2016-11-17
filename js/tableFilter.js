/**
 * Created by RAZZKO on 31.10.2016.
 */
app.filter('start', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
});