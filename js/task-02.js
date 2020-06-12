import users from './users.js';

console.log(users);

const getUsersWithEyeColor = (users, color) => {
    const user = users.filter(user => user.eyeColor === color);

    return user;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
