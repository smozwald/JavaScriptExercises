const leapYears = function(year) {
    leap = (year % 4 == 0) ? ((year % 100 == 0) ? ((year % 400 == 0) ? true : false ) : true) : false;
    return leap;

}

module.exports = leapYears
