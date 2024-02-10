//1. İstifadəçidən ən az 2 rəqəmli ədəd daxil etməsini istəyin və onun sondan 2-ci rəqəmini ekrana verin.
//let number1 = prompt("Ən az 2 rəqəmli ədəd daxil edin.");
//let numberEndtwo = number1[number1.length - 2];
//alert(numberEndtwo);

//2. İstifadəçidən tək sayda rəqəmlərdən ibarət olan ədəd daxil etməsini istəyin. Onun ortada duran rəqəmini ekrana verin.
//let number6 = prompt(
//  "Tək sayda rəqəmlərdən ibarət olan ədəd daxil edin.\nexp: 123     exp: 12345     exp: 1234567"
//);
//let number6Len = number6.length;
//let indexx = [(number6Len - 1) / 2];
//for (let index = 0; index < number6.length; index++) {
//  if (index == indexx) {
//    console.log(number6[index]);
//  }
//}

//3. İstifadəçidən ədəd daxil etməsini istəyin. O ədədin son rəqəmini silib ekrana verin.
//let number2 = prompt("Ən az 2 rəqəmli ədəd daxil edin.");
//alert(number2.slice(0, -1));

//4. İstifadəçidən ədəd daxil etməsini istəyin. O ədədin ilk rəqəmini silib ekrana verin.
//let number3 = prompt("Ən az 2 rəqəmli ədəd daxil edin.");
//alert(number3.slice(1));

//5. Daxil edilmiş ədədin 3 və 5-ə eyni anda bölünüb bölünmədiyini yoxlayan proqram yazın.
//let number4 = +prompt("Ədəd daxil edin.");
//if ((number4 % 3 == 0) & (number4 % 5 == 0)) {
//  alert("Ədəd 3 və 5-ə bölünür.");
//} else if ((number4 % 3 == 0) & (number4 % 5 != 0)) {
//  alert("Ədəd 3-ə bölünür.\n5-ə bölünmür.");
//} else if ((number4 % 3 != 0) & (number4 % 5 == 0)) {
//  alert("Ədəd 5-ə bölünür.\n3-ə bölünmür.");
//} else {
//  alert("Ədəd 3 və 5-ə bölünmür.");
//}

//6. Daxil edilmiş ədədin içində 6 rəqəminin olub olmadığını yoxlayan proqram yazın.
//let number5 = prompt("Ədəd daxil edin.");
//let caseValue = false;
//for (let i = 0; i < number5.length; i++) {
//  let oneNumber = number5[i];
//  if (oneNumber == "6") {
//    caseValue = true;
//    break;
//  }
//}
//alert(
//  caseValue
//    ? "Daxil edilmiş ədədin içində 6 rəqəmi var."
//    : "Daxil edilmiş ədədin içində 6 rəqəmi yoxdur."
//);

//8. İstifadəçidən hər hansı bir ədəd və hesablamaq istədiyi qüvvəti daxil etməsini istəyin. Bu ədədlərə görə nəticəni hesablayıb ekrana verin.
//let number7 = +prompt("Hesablamaq istədiyiniz ədədi daxil edin.");
//let number7Power = +prompt("Hesablamaq istədiyiniz qüvvəti daxil edin.");
//let endNumber = 1;
//for (let index = 0; index < number7Power; index++) {
//  endNumber *= number7;
//}
//console.log(endNumber);

//9. İstifadəçidən 5 rəqəmli ədəd daxil etməsini istəyin. O ədədin rəqəmlərinin cəmini ekrana verin.
//let number8 = prompt("5 rəqəmli ədəd daxil edin.");
//let sumNumber8 = 0;
//for (let index = 0; index < number8.length; index++) {
//  let endNumber8 = number8[index];
//  sumNumber8 += +endNumber8;
//}
//console.log(`Reqemlerin cemi: ${sumNumber8}.`);

//10. İstifadəçidən istənilən rəqəmli ədəd daxil etməsini istəyin. O ədədin rəqəmlərinin cəmini ekrana verin.
//let number9 = prompt("Istənilən sayda rəqəmli ədəd daxil edin.");
//let sumNumber9 = 0;
//for (let index = 0; index < number9.length; index++) {
//  let endNumber9 = number9[index];
//  sumNumber9 += +endNumber9;
//}
//console.log(`Reqemlerin cemi: ${sumNumber9}.`);

//11. İstifadəçidən 5 rəqəmli ədəd daxil etməsini istəyin. Ədədin tərsini ekrana verin (12345 > 54321).
//12. İstifadəçidən istənilən rəqəmli ədəd daxil etməsini istəyin. Ədədin tərsini ekrana verin (12345 > 54321)
// let number10 = prompt("Istənilən sayda rəqəmli ədəd daxil edin.");
// let number10Reversed = "";
// for (let index = number10.length - 1; index >= 0; index--) {
//   number10Reversed += number10[index];
// }
// console.log(number10Reversed);

//13. İstifadəçinən düzbucaqlı paralelepipedin tərəflərini daxil etməsini istəyin. Bu tərəflərə görə paralelepipedin həcmini hesablayıb ekrana verin.
//let number13 = alert("Düzbucaqlı paralelepipedin tərəflərini daxil edin.");
//let length = +prompt("Uzunluğu daxil edin");
//let width = +prompt("Genişliği daxil edin");
//let height = +prompt("Yüksekliği daxil edin");
//let volume = length * width * height;
//console.log(volume);

//18. Daxil edilmiş ədədin sadə olub olmamasını yoxlayan və çıxışa uyğun olaraq true və ya false verən proqram yazın.
//let number18 = +prompt("ədəd daxil edin.");
//let number18End = number18;
//while (true) {
//  number18End--;
//  if ((number18 % number18End == 0) & (number18End > 1)) {
//    console.log("Ədəd sade deyil.");
//    break;
//  } else if (number18End == 0) {
//    console.log("Ədəd sadedir.");
//    break;
//  }
//}

//16. Daxil edilmiş məbləği ən az sayda əsginasla qaytarmaq üçün lazım olan əsginasları və saylarını ekrana verən proqram yazın (məs.: 248 > 2-100, 2-20, 1-5, 3-1)
// let promptValue = +prompt("Reqem daxil edin.");
// let arr = [200, 100, 50, 20, 10, 5, 1];
// let twoHundred = 0;
// let Hundred = 0;
// let fifty = 0;
// let twenty = 0;
// let ten = 0;
// let five = 0;
// let one = 0;

// for (let index = 0; index < arr.length; index++) {
//   while (promptValue >= arr[index]) {
//     promptValue -= arr[index];
//     switch (arr[index]) {
//       case 200:
//         twoHundred++;
//         break;
//       case 100:
//         Hundred++;
//         break;
//       case 50:
//         fifty++;
//         break;
//       case 20:
//         twenty++;
//         break;
//       case 10:
//         ten++;
//         break;
//       case 5:
//         five++;
//         break;
//       case 1:
//         one++;
//         break;
//       default:
//         break;
//     }
//   }
// }

// console.log(
//   `${twoHundred}-200, ${Hundred}-100, ${fifty}-50, ${twenty}-20, ${ten}-10, ${five}-5, ${one}-1.`
// );

// 14. Daxil edilmiş ədədin tək yerdə duran rəqəmlərini silib ekrana verən proqram yazın
// let promptValue = "123456789";
// for (let index = 0; index < promptValue.length; index++) {
//   let r = promptValue.slice(index, (index += 1));
//   console.log(r);
// }

//19. Daxil edilmiş ədəddən kiçik ədədlər arasından tam kub olan ən böyük ədədi ekrana verin.
// let promptValue = +prompt("Ədəd daxil edin.");
// let number = 1;
// let loop = true;
// while (loop) {
//   let e = number ** 3;
//   if (e > promptValue) {
//     let reply = number - 1;
//     console.log(`${reply} => ${reply ** 3}`);
//     loop = false;
//   }
//   number++;
// }

//17. Daxil edilmiş 3 rəqəmli ədədin rəqəmlərini artan sırayla sıralayıb ekrana verin.
// let promptValue = "345621";
// let min;
// for (let i = 0; i < promptValue.length; i++) {
//   for (let j = 1; j < promptValue.length; j++) {
//     if (promptValue[i] > promptValue[j]) {
//       let min = promptValue[i];
//       promptValue[i] = promptValue[j];
//       promptValue[j] = min;
//     }
//   }
// }

// 21. Verilmiş ədədin uzunluğunu geri qaytaran funksiya yazın.
// function len() {
//   let promptValue = prompt("Ədəd daxil edin.");
//   let length = promptValue.length;
//   console.log(length);
// }
// len();

// 22. Daxil edilən name parametrinə uyğun olaraq Salam <name>! mesajını ekrana verin. name təqdim olunmazsa Salam qonaq! mesajını ekrana verin.
// let promptValue = prompt("Name daxil edin.");
// if (promptValue == "") {
//   alert(`Salam qonaq!`);
// } else {
//   alert(`Salam ${promptValue}!`);
// }

// 23. Verilmiş ədədin palindrom olub olmadığını yoxlayan funksiya yazın.
// function name(a) {
//   let num = "";
//   for (let index = a.length - 1; index >= 0; index--) {
//     num += a[index];
//   }
//   if (a == num) {
//     alert(`${a}-ədəd palindromdur.`);
//   } else {
//     alert(`${a}-ədəd palindrom deil.`);
//   }
// }
// let promptValue = prompt("Ədəd daxil edin.");
// name(promptValue);

// 24. Daxil edilmiş 3 rəqəmli ədədin rəqəmlərinin fərqli olub olmadığını yoxlayan funksiya yazın.
// function name(promptValue) {
//   let loop = true;
//   for (let i = 0; i < promptValue.length; i++) {
//     for (let j = 1 + i; j < promptValue.length; j++) {
//       if (promptValue[i] == promptValue[j]) {
//         loop = false;
//         break;
//       } else {
//         loop = true;
//       }
//     }
//     if (!loop) {
//       break;
//     }
//   }
//   if (loop) {
//     alert("reqemler ferqlidir.");
//   } else {
//     alert("reqemler ferqli deil.");
//   }
// }
// let promptValue = prompt("Ədəd daxil edin.");
// name(promptValue);

// 25. Daxil edilmiş rəqəmdən kiçik 10-a bölünən ədədi qaytaran funksiya yazın.
// function name(promptValue) {
//   for (let index = 0; index < promptValue; promptValue--) {
//     if (promptValue % 10 == 0) {
//       alert(`${promptValue}`);
//     }
//   }
// }
// let promptValue = +prompt("Ədəd daxil edin.");
// name(promptValue);

// 26. Verilmiş n və m ədədlərinə uyğun olaraq n^m-i hesablayın. m təqdim edilməzsə dəyəri 2 olaraq qəbul edin.
// let n = +prompt("eded daxil edin -n");
// let m = +prompt("eded daxil edin -m");
// if (n == "") {
//   console.log("eded daxil edin.");
// } else if (m == "") {
//   m = 2;
//   result = m + n;
//   console.log(result);
// } else {
//   result = m + n;
//   console.log(result);
// }

// 27. Ədədin sondan n-inci rəqəmini tapan funksiya yazın.
// function num() {
//   let promptValue = prompt("eded daxil edin.");
//   let lastnum = promptValue[promptValue.length - 1];
//   console.log(lastnum);
// }
// num();

// 28. Daxil edilmiş ədədin sadə olub olmamasını yoxlayan və çıxışa uyğun olaraq true və ya false verən funksiya yazın.
// function name() {
//   let number18 = +prompt("ədəd daxil edin.");
//   let number18End = number18;
//   while (true) {
//     number18End--;
//     if ((number18 % number18End == 0) & (number18End > 1)) {
//       console.log("Ədəd sade deyil.");
//       break;
//     } else if (number18End == 0) {
//       console.log("Ədəd sadedir.");
//       break;
//     }
//   }
// }
// name();

// 29. Daxil edilmiş ədəddən kiçik tək ədədlərin sayını hesablayan funksiya yazın. Verilən ədəd mənfi olarsa böyük olan tək ədədlərin sayını tapın.
// function name() {
//   let promptValue = prompt("eded daxil edin.");
//   if (promptValue > 0) {
//     let result = Math.floor(promptValue / 2);
//     console.log(result);
//   } else if (promptValue < 0) {
//     let result = Math.ceil(promptValue / 2);
//     console.log(result);
//   }
// }
// name();

// 30. Daxil edilmiş məbləği ən az sayda əsginasla qaytarmaq üçün lazım olan əsginasları və saylarını ekrana verən funksiya yazın (məs.: 248 > 2-100, 2-20, 1-5, 3-1).
/* function name() {
  let promptValue = +prompt("Reqem daxil edin.");
  let arr = [200, 100, 50, 20, 10, 5, 1];
  let twoHundred = 0;
  let Hundred = 0;
  let fifty = 0;
  let twenty = 0;
  let ten = 0;
  let five = 0;
  let one = 0;

  for (let index = 0; index < arr.length; index++) {
    while (promptValue >= arr[index]) {
      promptValue -= arr[index];
      switch (arr[index]) {
        case 200:
          twoHundred++;
          break;
        case 100:
          Hundred++;
          break;
        case 50:
          fifty++;
          break;
        case 20:
          twenty++;
          break;
        case 10:
          ten++;
          break;
        case 5:
          five++;
          break;
        case 1:
          one++;
          break;
        default:
          break;
      }
    }
  }
  console.log(
    `${twoHundred}-200, ${Hundred}-100, ${fifty}-50, ${twenty}-20, ${ten}-10, ${five}-5, ${one}-1.`
  );
}
name(); */

// 31. Massivin ilk elementini qaytaran funksiya yazın.
// let promptValue = prompt("eded daxil edin");
// console.log(promptValue[0]);


