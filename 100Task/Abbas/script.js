// todo 1. İstifadəçidən ən az 2 rəqəmli ədəd daxil etməsini istəyin və onun sondan 2-ci rəqəmini ekrana verin.
/* let number1 = prompt("Ən az 2 rəqəmli ədəd daxil edin.");
let numberEndtwo = number1[number1.length - 2];
alert(numberEndtwo); */

// todo 2. İstifadəçidən tək sayda rəqəmlərdən ibarət olan ədəd daxil etməsini istəyin. Onun ortada duran rəqəmini ekrana verin.
/* let number6 = prompt(
 "Tək sayda rəqəmlərdən ibarət olan ədəd daxil edin.\nexp: 123     exp: 12345     exp: 1234567"
);
let number6Len = number6.length;
let indexx = [(number6Len - 1) / 2];
for (let index = 0; index < number6.length; index++) {
 if (index == indexx) {
   console.log(number6[index]);
 }
} */

// todo 3. İstifadəçidən ədəd daxil etməsini istəyin. O ədədin son rəqəmini silib ekrana verin.
/* let number2 = prompt("Ən az 2 rəqəmli ədəd daxil edin.");
alert(number2.slice(0, -1)); */

// todo 4. İstifadəçidən ədəd daxil etməsini istəyin. O ədədin ilk rəqəmini silib ekrana verin.
/* let number3 = prompt("Ən az 2 rəqəmli ədəd daxil edin.");
alert(number3.slice(1)); */

// todo 5. Daxil edilmiş ədədin 3 və 5-ə eyni anda bölünüb bölünmədiyini yoxlayan proqram yazın.
/* let number4 = +prompt("Ədəd daxil edin.");
if ((number4 % 3 == 0) & (number4 % 5 == 0)) {
 alert("Ədəd 3 və 5-ə bölünür.");
} else if ((number4 % 3 == 0) & (number4 % 5 != 0)) {
 alert("Ədəd 3-ə bölünür.\n5-ə bölünmür.");
} else if ((number4 % 3 != 0) & (number4 % 5 == 0)) {
 alert("Ədəd 5-ə bölünür.\n3-ə bölünmür.");
} else {
 alert("Ədəd 3 və 5-ə bölünmür.");
} */

// todo 6. Daxil edilmiş ədədin içində 6 rəqəminin olub olmadığını yoxlayan proqram yazın.
/* let number5 = prompt("Ədəd daxil edin.");
let caseValue = false;
for (let i = 0; i < number5.length; i++) {
 let oneNumber = number5[i];
 if (oneNumber == "6") {
   caseValue = true;
   break;
 }
}
alert(
 caseValue
   ? "Daxil edilmiş ədədin içində 6 rəqəmi var."
   : "Daxil edilmiş ədədin içində 6 rəqəmi yoxdur."
); */

// todo 8. İstifadəçidən hər hansı bir ədəd və hesablamaq istədiyi qüvvəti daxil etməsini istəyin. Bu ədədlərə görə nəticəni hesablayıb ekrana verin.
/* let number7 = +prompt("Hesablamaq istədiyiniz ədədi daxil edin.");
let number7Power = +prompt("Hesablamaq istədiyiniz qüvvəti daxil edin.");
let endNumber = 1;
for (let index = 0; index < number7Power; index++) {
 endNumber *= number7;
}
console.log(endNumber); */

// todo 9. İstifadəçidən 5 rəqəmli ədəd daxil etməsini istəyin. O ədədin rəqəmlərinin cəmini ekrana verin.
/* let number8 = prompt("5 rəqəmli ədəd daxil edin.");
let sumNumber8 = 0;
for (let index = 0; index < number8.length; index++) {
 let endNumber8 = number8[index];
 sumNumber8 += +endNumber8;
}
console.log(`Reqemlerin cemi: ${sumNumber8}.`); */

// todo 10. İstifadəçidən istənilən rəqəmli ədəd daxil etməsini istəyin. O ədədin rəqəmlərinin cəmini ekrana verin.
/* let number9 = prompt("Istənilən sayda rəqəmli ədəd daxil edin.");
let sumNumber9 = 0;
for (let index = 0; index < number9.length; index++) {
 let endNumber9 = number9[index];
 sumNumber9 += +endNumber9;
}
console.log(`Reqemlerin cemi: ${sumNumber9}.`); */

// todo 11. İstifadəçidən 5 rəqəmli ədəd daxil etməsini istəyin. Ədədin tərsini ekrana verin (12345 > 54321).
// todo 12. İstifadəçidən istənilən rəqəmli ədəd daxil etməsini istəyin. Ədədin tərsini ekrana verin (12345 > 54321)
/* let number10 = prompt("Istənilən sayda rəqəmli ədəd daxil edin.");
let number10Reversed = "";
for (let index = number10.length - 1; index >= 0; index--) {
  number10Reversed += number10[index];
}
console.log(number10Reversed); */

// todo 13. İstifadəçinən düzbucaqlı paralelepipedin tərəflərini daxil etməsini istəyin. Bu tərəflərə görə paralelepipedin həcmini hesablayıb ekrana verin.
/* let number13 = alert("Düzbucaqlı paralelepipedin tərəflərini daxil edin.");
let length = +prompt("Uzunluğu daxil edin");
let width = +prompt("Genişliği daxil edin");
let height = +prompt("Yüksekliği daxil edin");
let volume = length * width * height;
console.log(volume); */

// todo 14. Daxil edilmiş ədədin tək yerdə duran rəqəmlərini silib ekrana verən proqram yazın
/* let promptValue = "123456789";
for (let index = 0; index < promptValue.length; index++) {
  let r = promptValue.slice(index, (index += 1));
  console.log(r);
} */

// todo 16. Daxil edilmiş məbləği ən az sayda əsginasla qaytarmaq üçün lazım olan əsginasları və saylarını ekrana verən proqram yazın (məs.: 248 > 2-100, 2-20, 1-5, 3-1)
/* let promptValue = +prompt("Reqem daxil edin.");
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
); */

// todo 17. Daxil edilmiş 3 rəqəmli ədədin rəqəmlərini artan sırayla sıralayıb ekrana verin.
/* let promptValue = "345621";
let min;
for (let i = 0; i < promptValue.length; i++) {
  for (let j = 1; j < promptValue.length; j++) {
    if (promptValue[i] > promptValue[j]) {
      let min = promptValue[i];
      promptValue[i] = promptValue[j];
      promptValue[j] = min;
    }
  }
} */

// todo 18. Daxil edilmiş ədədin sadə olub olmamasını yoxlayan və çıxışa uyğun olaraq true və ya false verən proqram yazın.
/* let number18 = +prompt("ədəd daxil edin.");
let number18End = number18;
while (true) {
 number18End--;
 if ((number18 % number18End == 0) & (number18End > 1)) {
   console.log("Ədəd sade deyil.");
   break;
 } else if (number18End == 0) {
   console.log("Ədəd sadedir.");
   break;
 }
} */

// todo 19. Daxil edilmiş ədəddən kiçik ədədlər arasından tam kub olan ən böyük ədədi ekrana verin.
/* let promptValue = +prompt("Ədəd daxil edin.");
let number = 1;
let loop = true;
while (loop) {
  let e = number ** 3;
  if (e > promptValue) {
    let reply = number - 1;
    console.log(`${reply} => ${reply ** 3}`);
    loop = false;
  }
  number++;
} */

// todo 21. Verilmiş ədədin uzunluğunu geri qaytaran funksiya yazın.
/* function len() {
  let promptValue = prompt("Ədəd daxil edin.");
  let length = promptValue.length;
  console.log(length);
}
len(); */

// todo 22. Daxil edilən name parametrinə uyğun olaraq Salam <name>! mesajını ekrana verin. name təqdim olunmazsa Salam qonaq! mesajını ekrana verin.
/* let promptValue = prompt("Name daxil edin.");
if (promptValue == "") {
  alert(`Salam qonaq!`);
} else {
  alert(`Salam ${promptValue}!`);
} */

// todo 23. Verilmiş ədədin palindrom olub olmadığını yoxlayan funksiya yazın.
/* function name(a) {
  let num = "";
  for (let index = a.length - 1; index >= 0; index--) {
    num += a[index];
  }
  if (a == num) {
    alert(`${a}-ədəd palindromdur.`);
  } else {
    alert(`${a}-ədəd palindrom deil.`);
  }
}
let promptValue = prompt("Ədəd daxil edin.");
name(promptValue); */

// todo 24. Daxil edilmiş 3 rəqəmli ədədin rəqəmlərinin fərqli olub olmadığını yoxlayan funksiya yazın.
/* function name(promptValue) {
  let loop = true;
  for (let i = 0; i < promptValue.length; i++) {
    for (let j = 1 + i; j < promptValue.length; j++) {
      if (promptValue[i] == promptValue[j]) {
        loop = false;
        break;
      } else {
        loop = true;
      }
    }
    if (!loop) {
      break;
    }
  }
  if (loop) {
    alert("reqemler ferqlidir.");
  } else {
    alert("reqemler ferqli deil.");
  }
}
let promptValue = prompt("Ədəd daxil edin.");
name(promptValue); */

// todo 25. Daxil edilmiş rəqəmdən kiçik 10-a bölünən ədədi qaytaran funksiya yazın.
/* function name(promptValue) {
  for (let index = 0; index < promptValue; promptValue--) {
    if (promptValue % 10 == 0) {
      alert(`${promptValue}`);
    }
  }
}
let promptValue = +prompt("Ədəd daxil edin.");
name(promptValue); */

// todo 26. Verilmiş n və m ədədlərinə uyğun olaraq n^m-i hesablayın. m təqdim edilməzsə dəyəri 2 olaraq qəbul edin.
/* let n = +prompt("eded daxil edin -n");
let m = +prompt("eded daxil edin -m");
if (n == "") {
  console.log("eded daxil edin.");
} else if (m == "") {
  m = 2;
  result = m + n;
  console.log(result);
} else {
  result = m + n;
  console.log(result);
} */

// todo 27. Ədədin sondan n-inci rəqəmini tapan funksiya yazın.
/* function num() {
  let promptValue = prompt("eded daxil edin.");
  let lastnum = promptValue[promptValue.length - 1];
  console.log(lastnum);
}
num();
 */

// todo 28. Daxil edilmiş ədədin sadə olub olmamasını yoxlayan və çıxışa uyğun olaraq true və ya false verən funksiya yazın.
/* function name() {
  let number18 = +prompt("ədəd daxil edin.");
  let number18End = number18;
  while (true) {
    number18End--;
    if ((number18 % number18End == 0) & (number18End > 1)) {
      console.log("Ədəd sade deyil.");
      break;
    } else if (number18End == 0) {
      console.log("Ədəd sadedir.");
      break;
    }
  }
}
name();
 */

// todo 29. Daxil edilmiş ədəddən kiçik tək ədədlərin sayını hesablayan funksiya yazın. Verilən ədəd mənfi olarsa böyük olan tək ədədlərin sayını tapın.
/* function name() {
  let promptValue = prompt("eded daxil edin.");
  if (promptValue > 0) {
    let result = Math.floor(promptValue / 2);
    console.log(result);
  } else if (promptValue < 0) {
    let result = Math.ceil(promptValue / 2);
    console.log(result);
  }
}
name();
 */

// todo 30. Daxil edilmiş məbləği ən az sayda əsginasla qaytarmaq üçün lazım olan əsginasları və saylarını ekrana verən funksiya yazın (məs.: 248 > 2-100, 2-20, 1-5, 3-1).
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

// todo 31. Massivin ilk elementini qaytaran funksiya yazın.
/* let promptValue = prompt("eded daxil edin");
console.log(promptValue[0]);
 */

// todo 32. Massivin son elementini qaytaran funksiya yazın.
/* let promptValue = prompt("eded daxil edin.");
console.log(promptValue[promptValue.length-1]);
 */

// todo 33. Verilən obyekin yalnız key-lərini ekrana verən funksiya yazın.
/* let obj = {
  name: "abbas",
  surname: "mammadov",
  age: 21,
};

console.log(Object.keys(obj));
 */

// todo 34. Verilən obyekin yalnız value-larını ekrana verən funksiya yazınб
/* function name() {
  let obj = {
    name: "abbas",
    surname: "mammadov",
    age: 21,
  };
  console.log(Object.values(obj));
}
name(); */

// todo 35. Obyektin proprty-lərinin sayını qaytaran funksiya yazın.
/* let obj = {
  name: "abbas",
  surname: "mammadov",
  age: 21,
};
let a = Object.keys(obj);
console.log(a.length);
 */

// todo 36. Massivin ilk n elementini ekrana verən funksiya yazın.
/* let promptValue = +prompt("eded daxil edin.");
let word = "abcdef";
let c = "";
for (let index = 0; index < promptValue; index++) {
  c += word[index];
}
console.log(c);
 */

// todo 37. Massivin son n elementini ekrana verən funksiya yazın.
/*let promptvalue = prompt("uzunluq deyerinin daxil edin")
let word = "Salam Dunya"
let cem = ""
for (let i = word.length - 1; i > promptvalue; i--) {
  cem += word[i]
}
console.log(cem);
 */

// todo 38. .hasOwnProperty metodundan istifadə etmədən onun işini görən funksiya yazın (məs.: hasOwn(obj, key) => Boolean)
/*let obj = {
  A: "Alma",
  B: "Banan",
  C: 4,
};
let finder = false;
let objKeys = Object.keys(obj);
let promptValue = prompt("hansı object key olup-olmadığını axtarış edirsiniz?");
objectKeyFinder(objKeys, promptValue);

function objectKeyFinder(object, which) {
  object.forEach((element) => {
    if (element == which) {
      finder = true;
    }
  });
}
console.log(finder);
*/

// todo 39. Massivin bütün elementlərini ulduz (*) ilə ayıraraq ekrana verən funksiya yazın.
/* let arr = [11,22,33,44,55,66,77,88,99];

function addStar(array) {
    console.log(array.join(" * "));
}
addStar(arr);
 */

// todo 40. Massivin tək yerdə duran elementlərini null-a çevirən funksiya yazın.
/* let arr = [];
let promptValue = prompt("deyer daxil edin");
for (let j = 0; j < promptValue.length; j++) {
  arr.push(promptValue[j]);
}
console.log(arr);

tekMassiv(arr);

function tekMassiv(array) {
  for (let i = 1; i < array.length; i += 2) {
    array[i] = null;
  }
  console.log(array);
}
 */

// todo 41. Massivin verilən indeksdən sonrakı elementlərini silən funksiya yazın.
/* let arr = [];
let promptValue = prompt("deyer daxil edin") //12345
for (let j = 0; j < promptValue.length; j++) {
  arr.push(promptValue[j])
}
console.log(arr);

tekMassiv(arr)

function tekMassiv(array) {
  let secim = prompt("indeksi seçin")
  array.splice(secim, array.length)
  console.log(array);
}
 */

//  todo 42. Aldığı parametrlərə görə yeni obyekt yaradan funksiya yazın (məs.: createObj('Elchin', 'Zadeh') => {name: 'Elchin', surname: 'Zadeh'}).
/* function createObj(name, surname, age) {
  return {
    name: name,
    surname: surname,
    age: age,
  };
}

let obj = createObj(
  prompt("Adınızı qeyd edin"),
  prompt("Soyad adınızı qeyd edin"),
  prompt("Yaşınızı qeyd edin")
);
console.log(obj);
 */

// ! 43. Aldığı parametrlərə görə obyektə yeni property əlavə edən funksiya yazın (məs.: updateObj({}, 'name', 'Elchin') => {name: 'Elchin'}).

// todo 44. Verilən 2 massivi birləşdirib tək bir massiv qaytaran funksiya yazın.
/* let promprArr1 = prompt("1 ci arrey daxil edin."); //12345
let promprArr2 = prompt("2 ci arrey daxil edin."); //abcd
let arr = [...promprArr1, ...promprArr2];
console.log(arr);
console.log(promprArr1.concat(promprArr2).split(""));
 */

// todo 45. Obyektin seçilən property-sini silən funksiya yazın (məs.: deleteKey(obj, key)).
/* let obj = {
  name: "abbas",
  surname: "memmedov",
  age: 21,
};
let key = prompt("key'i daxil edin.");
function delet(obj, key) {
  delete obj[key];
}
delet(obj, key);
console.log(obj);
 */

// todo 46. Massivin klonunu yaradan funksiya yazın.
/* let promptValue = [prompt("arrey daxil edin.")];
let arr = promptValue;
console.log(arr);
 */

// todo 47. Obyektin klonunu yaradan funksiya yazın.
/*let promptValue = {
  name: prompt("Name deyeri daxil edin"),
  surname: prompt("Name deyeri daxil edin"),
  age: prompt("Name deyeri daxil edin")
}
let cloneObject2 = promptValue;
*/

// todo 48. .hasOwnProperty metodundan istifadə etmədən onun işini görən funksiya yazın (məs.: hasOwn(obj, key) => Boolean).
/*let obj = {
  name: "Omer",
  surname: "Tapdiqov",
  age: 18,
};

newProp(obj)

function newProp(obj) {
    for (const key in obj) {
        if (typeof obj [key] === "String") {
            console.log(key);
        }
    }
}
*/

// ! 49. Massivdə ən çox işlənən elementi qaytaran funksiya yazın.

// todo 50. Massivin elementlərini ayrı ayrı console-a verən funksiya yazın.
/* let arrayValue = [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8, 9];
arrayValue.forEach((element) => {
  console.log(element);
});
 */

// todo 51. Massivin içindəki bütün string-ləri birləşdirən funksiya yazın.
/* let arrayValue = [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8, 9];
let arr = "";
arrayValue.forEach((element) => {
  if (typeof element === "string") {
    arr += element;
  }
});
console.log(arr);
 */

// todo 52. Massivin içindəki 0dan fərqli olan ədədləri bir-birinə vuran funksiya yazın.
/* let arrayValue = [5, 5, 5, 0, 2];
let hasil = 1;
for (let index = 0; index < arrayValue.length; index++) {
  if (arrayValue[index] != 0) {
    hasil *= arrayValue[index];
  }
}
console.log(hasil);
 */

// ? Massivdə -100 - 100 arası ədədlər verilib. Bu massivə görə:
// todo 53. Mənfi ədədləri müsbətə çevirib yeni array yaradın.
/* let arr = [-12, 12, 4, -34, -3];
let addArr = [];
for (let index = 0; index < arr.length; index++) {
  if (arr[index] < 0) {
    addArr.push(arr[index] * -1);
  } else {
    addArr.push(arr[index]);
  }
}
console.log(addArr);
 */

// todo 54. Elementləri kiçikdən böyüyə sıralayın.
/* let arr = [-12, -20, -1, 0, 5, 1, 11, 35];
arr.sort((a, b) => {
  return a - b;
});
console.log(arr);
 */

// todo 55. Elementləri aldığı parametr-ə görə (kiçikdən böyüyə və ya böyükdən kiçiyə) sıralayan funksiya yazın.
/* let arr = [-12, -5, 2, 0, 5, -2, 7, 4];
let secim = confirm("Kicikdən böyüyə olsun? (true)");
sorter(arr, secim);
function sorter(arr, secim) {
  if (secim) {
    arr.sort((a, b) => {
      return a - b;
    });
  } else {
    arr.sort((a, b) => {
      return b - a;
    });
  }
  console.log(arr);
}
 */

// todo 56. Mənfi ədədləri silib yeni array yaradın.
/* let arr = [-12, -20, -1, 0, 5, 1, 11, 35];
let addArr = [];
arr.forEach((element) => {
  if (element >= 0) {
    addArr.push(element);
  }
});
console.log(addArr);
 */

//  todo 57. Hər elementdən sadəcə birinin olduğu yeni bir massiv yaradın.
/* let arr = [-12, -20, -1, 0, 5, 1, 11, 35];
arr.forEach((element) => {
  console.log([element]);
});
 */

// ? Tək massiv içində istifadəçilərin məlumatlarını bildirən birdən çox obyekt verilib. Bu obyektlərin içində fullName, age və gender key-ləri təyin olunub. Bu massivə əsasən:
let arr = [
  { name: "Abbas", age: 21, gender: "male" },
  { name: "alia", age: 99, gender: "famale" },
  { name: "Thogrul", age: 63, gender: "male" },
  { name: "Omer", age: 17, gender: "male" },
];

// todo 58. İstifadəçilərin sadəcə adlarının olduğu massiv yaradın.
/* let addArr = [];
for (let i = 0; i < arr.length; i++) {
  addArr.push(arr[i].name);
}
console.log(addArr);
 */

// todo 59. Kişiləri və qadınları ayrı array-lərə yığın.
/* let menArr = [];
let womenArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].gender === "male") {
    menArr.push(arr[i].name);
  } else {
    womenArr.push(arr[i].name);
  }
}
console.log(menArr, womenArr);
 */

// todo 60. Yaşı 60-dan az olanları çıxarıb qalanlarını bir massivə yığın.
/* let addArr = [];
for (let index = 0; index < arr.length; index++) {
  if (arr[index].age > 60) {
    addArr.push(arr[index].name);
  }
}
console.log(addArr);
 */
