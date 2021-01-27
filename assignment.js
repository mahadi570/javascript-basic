// https://github.com/mahadi570/javascript-basic



// 1. kilometerToMeter function
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}



// 2. budgetCalculator function 
function budgetCalculor(watch, phone, laptop) {
    watch = watch * 50;
    phone = phone * 100;
    laptop = laptop * 500;

    var totalBudget = watch + phone + laptop;
    return totalBudget;
}



// 3. hotelCost funcion
function hotelCost(days) {
    var totalCost = 0;
    if (days <= 10) {
        totalCost = days * 100;
    } else if (days <= 20) {
        var firstDays = 10 * 100;
        var remaining = days - 10;
        var middleDays = remaining * 80;
        totalCost = firstDays + middleDays;
    } else {
        var firstDays = 10 * 100;
        var middleDays = 10 * 80;
        var remaining = days - 20;
        var lastDays = remaining * 50;
        totalCost = firstDays + middleDays + lastDays;
    }
    return totalCost;
}



// 4. megaFriend function
function megaFriend(name) {
    return name.sort(function (min, max) {
        return max.length - min.length
    })[0];
}