// let lang = "ky";
// switch (lang) {
//     case "ky":
//         console.log("Salam");
//         break;
//     case "ru":
//         console.log("Privet");
//     case "en":
//         console.log("Hello");
//     default:
//         console.log(" i dont know this language");
//         break;

// 

// && (И) 
// ||=ИЛИ
// ! (НЕ)


// let highIncome = true;
// let goodCreditTrue = true;
// if (highIncome && goodCreditHistory) {
//     console.log("We can give you a credit");
// } else {
//     console.log(" Sorry we can't give you a credit");
// }

 
//Задание-1  Создайте программу, в которой пользователь будет вводить уровень шума в децибелах. Если введенное им значение будет в точности совпадать с одним из значений в приведенной таблице, необходимо вывести, чему соответствует указанный уровень громкости. Если значение попадет между уровнями в таблице, нужно сообщить, между какими именно. Также программа должна выдавать корректные сообщения, в случае если введенное пользователем значение окажется ниже минимального или больше максимального.
// const jackHammer=130;
// const  gasLawnMower=106;
// const alarm=70;
// const silentRoom=40;

// let userNoise=+prompt("Введите уровень шума");
// if(userNoise<silentRoom){
//     alert("Очень тихо");
// }else if(userNoise===silentRoom){
//     alert("Тихо как в тихой комнате");
// }else if(userNoise<alarm){
//     alert("Тише чем звук будильника");
// }else if(userNoise===alarm){
//     alert("Шум как у будильника");
// }else if(userNoise<gasLawnMower){
//     alert("Тише чем звук газонокосилки");
// }else if(userNoise===gasLawnMower){
//     alert("Звук газонокосилки");
// }else if(userNoise<jackHammer){
//     alert("Тише отбойного молотка")
// }else if(userNoise===jackHammer){
//     alert("Отбойный молоток")
// }else{
//     alert("Очень громко");
// }

//Задание-2 Напишите программу, которая будет запрашивать у пользователя номинал банкноты и отображать на экране имя деятеля, портрет которого размещен на соответствующем денежном знаке. Если банкноты введенного номинала не существует, должно выводиться сообщение об ошибке.
// let userInput=+prompt("Введите номинал банкноты");
// switch(userInput){
//     case 1:
//     alert("Вашингтон");
//     break;
//     case 2:
//     alert("Томас Джефферсон");
//     break;
//     case 5:
//     alert("Авраам Линкольн");
//     break;
//     case 10:
//     alert("Александр Гамильтон");
//     break;
//     case 20:
//     alert("Эндрю Джексон");
//     break;
//     case 50:
//     alert("Улисс Грант");
//     break;
//     case 100:
//     alert("Бенджамин Франклин");
//     break;
//     default:
//     alert("Данной банкноты не существует");
// }

// Задание-3 Разработайте программу, принимающую на вход дату и выводящую на экран дату, следующую за ней. Например, если пользователь введет дату, соответствующую 18 ноября 2019 года, на экран должен быть выведен следующий день, то есть 19 ноября 2019 года. Если входная дата будет представлять 30 ноября, то на выходе мы должны получить 1 декабря. И наконец, если ввести последний день года – 31 декабря 2019-го, пользователь должен увидеть на экране дату 1 января 2020-го. Дату пользователь должен вводить в три этапа: год, месяц и день. Убедитесь, что ваша программа корректно обрабатывает високосные годы.

let userDay = 20;
let userMonth = "march";
let userYear = 2020;

let outputDate;
let outputMonth;
let outputYear = userYear;

switch (userMonth) {
  case "february":
    if (userYear % 4 === 0 && userDay === 29) {
      outputDate = 1;
      outputMonth = "march";
    } else if (userYear % 4 !== 0 && userDay === 28) {
      outputDate = 1;
      outputMonth = "march";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "january":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "february";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "march":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "april";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "july":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "august";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "august":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "september";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "october":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "november";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "december":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "january";
      outputYear = userYear + 1;
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  default:
    outputDate = userDay + 1;
    outputMonth = userMonth;
    break;
}

let message = `Следующая дата: ${outputDate} ${outputMonth} ${outputYear}`;

document.write(message);
