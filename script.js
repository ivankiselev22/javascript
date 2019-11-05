//'use strict'; 

let money = prompt ("Ваш бюджет на месяц?");

let time = prompt ("Введите дату в формате YYYY-MM-DD");

let expensesItem = prompt ("Введите обязательную статью расходов в этом месяце");
let expensesMoney = prompt ("Во сколько обойдется?");

let appData = {
    money: console.log(money),
    time: console.log(time),

    expenses: {
        expensesItem: console.log(expensesItem),
        expensesMoney: console.log(expensesMoney),
    },

    optionalExpenses: {},
    income: [],
    savings: false
};

let x;

x = money;
alert(x/30);