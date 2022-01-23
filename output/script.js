"use strict";
const country = "Bangladesh";
console.log(country);
const myfun = (a, b, c) => {
    if (c == "add") {
        return a + b;
    }
    else if (c == "multiply") {
        return a * b;
    }
    else if (c == "division") {
        return a / b;
    }
    else if (c == "minus") {
        return a - b;
    }
    else {
        return "You can Add, Minus, Multiply, Divided of these number. Please Enter value add, minus, multiply of division.";
    }
};
const value = myfun(30, 5, "minus");
const ageCalculation = () => {
    let input1 = document.querySelector("#birthDay");
    let birthDay = parseFloat(input1.value);
    let input2 = document.querySelector("#birthMonth");
    let birthMonth = parseFloat(input2.value);
    let input3 = document.querySelector("#birthYear");
    let birthYear = parseFloat(input3.value);
    let currentDay = new Date().getDate();
    let month = new Date().getMonth();
    let currentMonth;
    if (month == 0) {
        currentMonth = month + 1;
    }
    else {
        currentMonth = month;
    }
    let currentYear = new Date().getFullYear();
    let finalDay;
    let finalMonth;
    let finalYear;
    if (currentDay > birthDay &&
        currentMonth >= birthMonth &&
        currentYear > birthYear) {
        finalDay = currentDay - birthDay;
        finalMonth = currentMonth - birthMonth;
        finalYear = currentYear - birthYear;
    }
    if (currentMonth < birthMonth || currentDay < birthDay) {
        // let year = (currentYear - birthYear) - 1;
        // let month = currentMonth + 12;
        //finalMonth = month - birthMonth;
        if (currentMonth < birthMonth) {
            // currentYear - birthYear - 1;
            let month = currentMonth + 12;
            finalMonth = month - birthMonth; // 5
            finalYear = currentYear - birthYear - 1;
        }
        else {
            finalMonth = currentMonth - birthMonth;
        }
        if (currentDay < birthDay) {
            //finalMonth - 1;
            finalMonth = finalMonth - 1;
            let day = currentDay + 30; // 23 + 30 = 53
            finalDay = day - birthDay;
        }
        else {
            finalDay = currentDay - birthDay;
        }
    }
    let showMonth; // `${finalMonth} Months`
    if (finalMonth == 0) {
        showMonth = "";
    }
    else {
        showMonth = `${finalMonth} Months`;
    }
    //   Show in Html
    const showAge = document.querySelector("#showAge");
    showAge.innerHTML = `Your age is ${finalYear} Years ${showMonth} ${finalDay} Days.`;
};
