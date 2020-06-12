import users from './users.js';

const calculateTotalBalance = users => {
    const totalUserBalance = users.reduce(
        (totalBalance, money) => totalBalance + money.balance,
        0,
    );
    return totalUserBalance;
};

console.log(calculateTotalBalance(users)); // 20916
