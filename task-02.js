//# Завдання 2
//Створіть об'єкт car, який містить властивості марка, модель, рік випуску, швидкість.
//Створіть ще один обʼєкт location, який містить властивість city та distance
//Створіть метод обʼєкта car showInfo(), який виводить інформацію про автомобіль на екран у форматі
//Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; .
//Створіть функцію showTime(), яка буде вираховувати за який час автомобіль доїде до міста city та виводити в консоль 
//повідомлення в форматі Автомобіль {brand}, марки {model} дістанеться міста {city} за {time}
//Використовуйте обєднання обʼєктів, метод forEach та ключове слово this для доступу до властивостей об'єкту.
const car = {
    brand: "Audi",
    model: "A4",
    year: "2014",
    showInfo(){
        return `Brand: ${this.brand}, model: ${this.model}, year: ${this.year}`;
    },
};
const location = {
    city: "Lviv",
    distance: 400,
};
function showTime(value){
    const driveTime = Math.round(location.distance / value);
    return `Auto brand ${car.brand}, model ${car.model}, year ${car.year}, will arrive city ${location.city} in ${driveTime} hours`;
}
console.log(car.showInfo());
console.log(showTime(150));