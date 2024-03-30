//# Завдання 4
//Створіть об'єкт "користувач" з властивостями "ім'я" та "баланс". Додайте до
//об'єкту метод "додати гроші", який збільшує баланс користувача на вказану суму.
//Додайте до об'єкту метод "balanceInfo", який виводить поточний баланс користувача в консоль.
//Створіть масив "users", який містить кілька об'єктів типу "user". Використовуючи
//метод "forEach()", викличте метод "addMoney" на кожному елементі масиву "users".
//Використовуючи метод "filter()", створіть новий масив, який міститиме тільки ті
//об'єкти типу "user", у яких баланс більший за вказану суму. Використовуючи метод
//"map()", створіть новий масив, який містить баланс кожного користувача з масиву
//"users". Виведіть цей масив в консоль.
//Використайте метод "call()", щоб викликати метод "balanceInfo" на конкретному
//об'єкті "user". Перевірте, що в контексті методу "balanceInfo" значення "this"
//вказує на конкретний об'єкт "user".
const users = [
    { name: 'Alice', balance: 500 },
    { name: 'Bob', balance: 200 },
    { name: 'Charlie', balance: 1000 },
];
const newUser = {
    name: "Karina",
    balance: 50,
    addMoney(value){
        this.balance += value;
    },
    balanceInfo(){
        return `In balance ${this.name} ${this.balance} money`
    },
};
newUser.addMoney(400);
console.log(newUser.balanceInfo());

users.forEach((user) => {
    newUser.addMoney.call(user, 150);
});
const balanceFiltered = users.filter((user) => user.balance > 450);
console.log(balanceFiltered);
const balanceUser = users.map((user) => user.balance);
console.log(balanceUser);
users.forEach((user) => {
    console.log(newUser.balanceInfo.call(user));
})