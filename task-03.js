//# Завдання 3
//Створіть масив об'єктів "студентів", який містить властивості "ім'я", "вік" та
//"рейтинг". Додайте до масиву метод "вітатися", який буде повертати рядок з
//привітанням зі зазначенням імені студента.
//Використовуючи метод "map()", створіть новий масив, який містить привітання з
//кожним студентом з масиву "студентів". Використовуючи метод "filter()", створіть
//новий масив, який містить тільки ті об'єкти типу "студент", які мають рейтинг
//вище заданого значення.
//Створіть функцію "addRating", яка приймає один аргумент - кількість балів, на
//яку потрібно збільшити рейтинг студента. Викличте функцію "addRating" на кожному
//елементі масиву "студентів". Перевірте, що в контексті функції "addRating"
//значення "this" вказує на конкретний об'єкт "студент". Виведіть новий масив зі
//зміненими рейтингами в консоль.
const students = [
    {
        name: "Karina",
        age: 20,
        rating: 50,
    },
    {
        name: "Maryana",
        age: 19,
        rating: 40,
    },
    {
        name: "Yana",
        age: 21,
        rating: 30,
    },
];
students.forEach((student) => {
    student.greeting = function(){
        return `Hello ${this.name}`;
    };
});
const greetingsArray = students.map((student) => student.greeting());
console.log(greetingsArray);
const bigRating = students.filter((student) => student.rating >= 40);
console.log(bigRating);
function addRating(value){
    return (this.rating += value);
}
students.forEach((student) => addRating.call(student, 15));
console.log(students);