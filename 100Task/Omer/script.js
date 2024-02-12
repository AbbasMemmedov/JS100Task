var reqem = 0;
var result = 0;
// ! Tasklar:
// TODO Task 1. İstifadəçidən ən az 2 rəqəmli ədəd daxil etməsini istəyin və onun sondan 2-ci rəqəmini ekrana verin.
/* Task 1 => Result: 
reqem = prompt("ən az 2 rəqəmli ədəd daxil edin.")
console.log(reqem[reqem.length - 2]);
*/

// TODO Task 2. İstifadəçidən tək sayda rəqəmlərdən ibarət olan ədəd daxil etməsini istəyin. Onun ortada duran rəqəmini ekrana verin.
/* Task 2 => Result: 
let promptvalue = prompt("eded daxil edin");
let correctNumber = true;

for (let index = e; index < promptvalue.length;index++) {

  if (promptvalue[index] % 2 == 0) {
    alert( "Serte uygun reqem daxil edin")
    correctNumber = false
    break
  } 
}
if (correctNumber) {
  let midNumber = Math.floor(promptvalue.length / 2);
  alert(`daxil etdiyiniz ededin ortada duran reqemi ${promptvalue[midNumber]}`)
}
*/

// TODO Task 3. İstifadəçidən ədəd daxil etməsini istəyin. O ədədin son rəqəmini silib ekrana verin.
/* Task 3 => Result: 
reqem = prompt("İstənilən rəqəm daxil edin.")
console.log(reqem.slice(0,-1));
*/

// TODO Task 4. İstifadəçidən ədəd daxil etməsini istəyin. O ədədin ilk rəqəmini silib ekrana verin.
/* Task 4 => Result: 
reqem = prompt("İstənilən rəqəm daxil edin.")
console.log(reqem.slice(1));
*/

// TODO Task 5. Daxil edilmiş ədədin 3 və 5-ə eyni anda bölünüb bölünmədiyini yoxlayan proqram yazın
/* Task 5 => Result:
reqem = prompt("İstənilən rəqəm daxil edin. həm 3, həmdə 5-ə bölünüb-bölünmədiyini yoxlayaq.")
if (reqem % 3 == 0 && reqem % 5 == 0) {
    console.log(`Bu Rəqəm: ${reqem} \n həm 3, həmdə 5-ə \nbölünür ✅`);
} else {
    console.log(`Bu Rəqəm: ${reqem} \n həm 3, həmdə 5-ə \nbölünmür ❌`);
}
*/

// TODO Task 6. Daxil edilmiş ədədin içində 6 rəqəminin ölub olmadığını yoxlayan proqram yazın
/*Task 6 => Result:
reqem = prompt(
    "İstədiyiniz rəqəmi daxil edin, rəqəminizin hər hansı bir yerinde 6 rəqəminin var olub-olmadığını yoxlayaq."
    );
    let cannot6 = false;
    let reqemArray = reqem.split("");
    console.log(reqemArray);
    reqemArray.forEach((element) => {
  while (element == 6) {
    if (element == 6) {
        console.log("6 rəqəmi tapıldı ✅");
        cannot6 = true;
        break;
    }
  }
});
if (!cannot6) {
  console.log("6 rəqəmi tapılmadı ❌");
}
*/

// TODO Task 7. Daxil edilmiş ədəddən böyük (növbəti) 11-ə bölünən ədədi ekrana verin/
/*Task 7 => Result:
reqem = prompt(
  "İstədiyiniz rəqəmi daxil edin, Daxil edilmiş ədəddən böyük (növbəti) 11-ə bölünən ədədi ekrana verək."
);
while (true) {
  if (reqem % 11 !== 0) {
    reqem++;
  } else if (reqem % 11 == 0) {
    console.log(reqem);
    break;
  }
}
*/

// TODO Task 8. İstifadəçidən hər hansı bir ədəd və hesablamaq istədiyi qüvvəti daxil etməsini istəyin. Bu ədədlərə görə nəticəni hesablayıb ekrana verin.
/*Task 8 => Result:
reqem = prompt("Qüvvətini hesablayacağın İstədiyiniz rəqəmi daxil edin.");
let quvvet = prompt("Rəqəmin İstədiyiniz qüvvətini daxil edin.");
console.log(reqem ** quvvet);
*/

// TODO Task 9. İstifadəçidən 5 rəqəmli ədəd daxil etməsini istəyin. O ədədin rəqəmlərinin cəmini ekrana verin.
/*Task 9 => Result:
let reqemArray = [];
reqem = prompt(
  "İstədiyiniz 5+ rəqəmli ədəd daxil edin, O ədədin rəqəmlərinin cəmini ekrana verək."
);
let cem = 0;
while (true) {
    reqemArray = reqem.split("");
  if (reqemArray.length == 5) {
    for (let i = 0; i < reqemArray.length; i++) {
      cem += Number(reqemArray[i]);
    }
    console.log(cem);
    break;
  } else {
    reqem = prompt(
      "Yanlız 5 rəqəmli ədəd daxil edin❗ ədədin rəqəmlərinin cəmini ekrana verək"
    );
  }
}
*/

// TODO Task 10. İstifadəçidən istənilən rəqəmli ədəd daxil etməsini istəyin. O ədədin rəqəmlərinin cəmini ekrana verin.
/*Task 10 => Result:
reqem = prompt(
  "İstədiyiniz 5+ rəqəmli ədəd daxil edin, O ədədin rəqəmlərinin cəmini ekrana verək."
);
let reqemArray = reqem.split("");
let cem = 0
for (let i = 0; i < reqemArray.length; i++) {
  cem += Number(reqemArray[i]);
}
console.log(cem);
*/

// TODO Task 11. İstifadəçidən 5 rəqəmli ədəd daxil etməsini istəyin. Ədədin tərsini ekrana verin (12345 > 54321).
/*Task 11 => Result:
let reqemArray = [];
reqem = prompt(
  "yanlız 5 rəqəmli ədəd daxil edin. Ədədin tərsini ekrana verəcəyik (12345 > 54321)."
);
let cem = "";
while (true) {
  reqemArray = reqem.split("");
  if (reqemArray.length == 5) {
    for (let i = reqemArray.length - 1; i >= 0; i--) {
      cem += reqemArray[i];
    }
    console.log(cem);
    break;
  } else {
    reqem = prompt(
      "Yanlız 5 rəqəmli ədəd daxil edin❗ Ədədin tərsini ekrana verəcəyik."
    );
  }
}
*/

// TODO Task 12. İstifadəçidən istənilən rəqəmli ədəd daxil etməsini istəyin. Ədədin tərsini ekrana verin (12345 > 54321).
/*Task 12 => Result:
let reqemArray = [];
reqem = prompt(
  "İstədiyiniz qədər rəqəmi olan ədəd daxil edin, O ədədin rəqəmlərini tərsdən ekrana verək."
);
let cem = "";
reqemArray = reqem.split("");
for (let i = reqemArray.length - 1; i >= 0; i--) {
  cem += reqemArray[i];
}
console.log(cem);
*/

// TODO Task 13. İstifadəçinən düzbucaqlı paralelepipedin tərəflərini daxil etməsini istəyin. Bu tərəflərə görə paralelepipedin həcmini hesablayıb ekrana verin.
/* Task 13 => Result:
let width = prompt("Paralelepipedin uzunluğunu daxil edin:");
let height = prompt("Paralelepipedin yüksekliyini daxil edin:");
let length = prompt("Paralelepipedin enini daxil edin:");

let hacim = width * height * length;

console.log(`Paralelepipedin Hacmi: ${hacim}`);
*/

// TODO Task 14. Daxil edilmiş ədədin tək yerdə duran rəqəmlərini silib ekrana verən proqram yazın.
/* Task 14 => Result:
reqem = prompt("İstədiyin qədər tək sayılar girin:");
let finder = "";

for (let i = 0; i < reqem.length; i++) {
    let rakam = Number((reqem[i]));
    
    if (rakam % 2 === 0) {
        finder += reqem[i];
    }
}

console.log(`Tek yerde duran rakamları silinmiş sayı: ${finder}`);
*/

// TODO Task 15. Daxil edilmiş ədədin mənfi, sıfır və ya müsbət olmağından asılı olaraq çıxışa uyğun olaraq -1, 0 və ya 1 verin.
/* Task 15 => Result:
reqem = prompt(
  "Yanlız 1 ədəd daxil edin, onun müsbət, 0, mənfi olduğunu qeyd edək."
);
if (reqem < 0) {
  console.log("-1");
} else if (reqem > 0) {
  console.log("1");
} else {
  console.log("0");
}
*/

// TODO Task 16. Daxil edilmiş məbləği ən az sayda əsginasla qaytarmaq üçün lazım olan əsginasları və saylarını ekrana verən proqram yazın (məs.: 248 > 2-100, 2-20, 1-5, 3-1).
/* Task 16 => Result:
let girilenPul = prompt("Pul məbləği daxil edin");
let oldMoney = girilenPul
let M200 = 0;
let M100 = 0;
let M50 = 0;
let M20 = 0;
let M10 = 0;
let M5 = 0;
let M1 = 0;

while (girilenPul >= 0) {
  if (girilenPul > 0 && girilenPul < 1) {
    console.log("Qəpik qəbul etmirik, Yanlız Manatlıqlar daxildir!");
    break;
  } 
  if (girilenPul >= 200) {
    girilenPul -= 200;
    M200 += 1;
  } else if (girilenPul >= 100) {
    girilenPul -= 100;
    M100 += 1;
  } else if (girilenPul >= 50) {
    girilenPul -= 50;
    M50 += 1;
  } else if (girilenPul >= 20) {
    girilenPul -= 20;
    M20 += 1;
  } else if (girilenPul >= 10) {
    girilenPul -= 10;
    M10 += 1;
  } else if (girilenPul >= 5) {
    girilenPul -= 5;
    M5 += 1;
  } else if (girilenPul >= 1) {
    girilenPul -= 1;
    M1 += 1;
  } else {
    if (girilenPul >= 0) {
      console.log(
        `Ümumi pul məbləği: ${oldMoney}\nQaytarıldı: (${M200}) - 200 Manat, (${M100}) - 100 Manat, (${M50}) - 50 Manat, (${M20}) - 20 Manat, (${M10}) - 10 Manat, (${M5}) - 5 Manat, (${M1}) - 1 Manat`
        );
        break;
    }
  }
}
*/

// TODO Task 17. Daxil edilmiş 3 rəqəmli ədədin rəqəmlərini artan sırayla sıralayıb ekrana verin
/* Task 17 => Result:
let enteredNum = prompt("Enter the number:"); //276831
let numArray = enteredNum.split("");
let min;
let max;
for (let i = 0; i < numArray.length; i++) {
  for (let j = i + 1; j < numArray.length; j++) {
    if (numArray[i] > numArray[j]) {
      min = numArray[i];
      numArray[i] = numArray[j];
      numArray[j] = min;
    }
  }
}
let result = numArray.join("");
console.log(result);
*/

// TODO Task 18. Daxil edilmiş ədədin sadə olub olmamasını yoxlayan və çıxışa uyğun olaraq true və ya false verən proqram yazın.
/* Task 18 => Result:
reqem = prompt(
  "1 ədəd daxil edin. Daxil edilmiş ədədin sadə olub olmamasını yoxlayaq."
);
if (reqem <= 1) {
  console.log("Sadə deyil.❌");
} else {
  let sade = true;
  for (let i = 2; i < reqem; i++) {
    if (reqem % i === 0) {
      sade = false;
      break;
    }
  }

  if (sade) {
    console.log("Sadə -dir.✅");
  } else {
    console.log("Sadə deyil.❌");
  }
}
*/

// TODO Task 20. İstifadəçidən ayın rəqəmini (1-12) daxil etməsini istəyin. Bu rəqəmlərə görə ekrana həmin ayın adını çıxarın
/* Task 20 (SHORT) => Result:
reqem = +prompt(
  "1-12 ədəd daxil edin. Daxil edilmiş ədədin hansı ay olduğunu deyək."
);
if (reqem == 12 && reqem == 1 && reqem == 2) {
  console.log("Qış ⛄❄");
} else if (reqem == 3 && reqem == 4 && reqem == 5) {
  console.log("Yaz 🌳🌴");
} else if (reqem == 6 && reqem == 7 && reqem == 8) {
  console.log("Yay 🌊🌞");
} else if (reqem == 9 && reqem == 10 && reqem == 11) {
  console.log("Payız 🍂🍁");
} else {
  console.log("Belə bir ay yoxdur!");
}
*/

/* Task 20 (LONG) => Result:
switch (reqem) {
  case 12:
  case 1:
  case 2:
    console.log("Qış ⛄❄");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Yaz 🌳🌴");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Yay 🌊🌞");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Payız 🍂🍁");
    break;
  default:
    console.log("Belə bir ay yoxdur!");
    break;
}
*/

// TODO Task 21. Verilmiş ədədin uzunluğunu geri qaytaran funksiya yazın.
/* Task 21 => Result:
reqem = prompt("Ədəd yazın, onun uzunluğunu deyək");
result = reqem.length
console.log(result);
*/

// TODO Task 22. Daxil edilən name parametrinə uyğun olaraq Salam <name>! mesajını ekrana verin. name təqdim olunmazsa Salam qonaq! mesajını ekrana verin.
/* Task 22 => Result:
let ad = prompt("Adınızı qeyd edin zəhmət olmasa");
 if (ad != "" && ad != " ") {
  alert(`Salam ${ad}!`)
 } else {
  alert(`Salam qonaq!`)
 }
 */

// TODO Task 23. Verilmiş ədədin palindrom olub olmadığını yoxlayan funksiya yazın.
/* Task 23 => Result:
reqem = prompt("Ədəd yazın, ədədin palindrom olub olmadığını deyək");
tersEded = "";

palindrom(reqem);

function palindrom(eded) {
  for (let i = eded.length - 1; i >= 0; i--) {
    tersEded += eded[i];
  }
  if (eded == tersEded) {
    console.log(`Bu ${eded} ədədi palindrom -dur. ✅`);
  } else {
    console.log(`Bu ${eded} ədədi palindrom deyildir. ❌ \n(${eded} != ${tersEded})`);
  }
}
*/

// TODO Task 24. Daxil edilmiş 3 rəqəmli ədədin rəqəmlərinin fərqli olub olmadığını yoxlayan funksiya yazın.
/* Task 24 => Result:
reqem = prompt(
  "Ədəd yazın, daxil edilmiş ədədin rəqəmlərinin fərqli olub olmadığını yoxlayaq."
);

equalNumbersFinder(reqem);

function equalNumbersFinder(eded) {
  let finder = 0;
  for (let j = 0; j < eded.length; j++) {
    if (eded[0] == eded[j]) {
      finder++;
    }
  }
  if (finder == eded.length) {
    console.log(
      `daxil edilmiş ${eded} ədədin rəqəmlərinin bir-birinə bərabərdir. ✅`
    );
  } else {
    console.log(
      `daxil edilmiş ${eded} ədədin rəqəmlərinin bir-birinə Fərqlidir. ❌`
    );
  }
}
*/

// TODO Task 25. Daxil edilmiş rəqəmdən kiçik 10-a bölünən ədədi qaytaran funksiya yazın.
/* Task 25 => Result:
reqem = prompt("Ədəd yazın, daxil edilmiş ədədin kiçik 10-a bölünən ədədi qaytaraq");
result = Math.floor(reqem / 10) * 10
console.log(`${reqem} ≈   ${result} / 10 = ${Math.floor(reqem / 10)}`);
*/

// TODO Task 26. Verilmiş n və m ədədlərinə uyğun olaraq n^m-i hesablayın. m təqdim edilməzsə dəyəri 2 olaraq qəbul edin.
/* Task 26 => Result:
let n = prompt("'n' ədədini qeyd edin (n^m)");
let m = prompt("'m' ədədini qeyd edin (n^m)");
let memory = m;
if (m != "" && m != " ") {
  m = memory  
} else {
  m = 2
}
console.log(n ** m);
*/

// TODO Task 27. Ədədin sondan n-inci rəqəmini tapan funksiya yazın.
/* Task 27 => Result:
reqem = prompt("Ədədin sondan n-inci rəqəmini tapaq");
console.log(reqem[reqem.length - 1]);
*/

// TODO Task 28. Daxil edilmiş ədədin sadə olub olmamasını yoxlayan və çıxışa uyğun olaraq true və ya false verən funksiya yazın.
/* Task 28 => Result:
reqem = prompt("Ədədin sondan n-inci rəqəmini tapaq");
sadeci(reqem);
function sadeci(eded) {
  if (eded >= 0) {
    console.log("Sadədir. ✅");
  } else {
    console.log("Sadə deyildir. ❌");
  }
} */

// TODO Task 29. Daxil edilmiş ədəddən kiçik tək ədədlərin sayını hesablayan funksiya yazın. Verilən ədəd mənfi olarsa böyük olan tək ədədlərin sayını tapın.
/* Task 29 => Result:
reqem = prompt("Ədədin sondan n-inci rəqəmini tapaq");
let cem = 0;
hesablayan(reqem);
function hesablayan(eded) {
  if (eded >= 0) {
    eded -= 2
    for (; eded >= 0; eded - 2) {
      if (eded % 2 == 1) {
        cem += 1
      }
    }
    console.log(`Tam olaraq ${eded} dən kiçik tək ədədlərin sayı: ${cem}`);
  } else {
    eded += 2
    for (; eded <= 0; eded + 2) {
      if (eded % 2 == 1) {
        cem += 1
      }
    }
    console.log(`Tam olaraq ${eded} dən kiçik tək ədədlərin sayı: ${cem}`);
  }
 */

// TODO Task 30. Daxil edilmiş məbləği ən az sayda əsginasla qaytarmaq üçün lazım olan əsginasları və saylarını ekrana verən funksiya yazın (məs.: 248 > 2-100, 2-20, 1-5, 3-1).
/* Task 30 => Result:
let Pul = prompt("Pul məbləği daxil edin");
let oldMoney = Pul;
let M200 = 0;
let M100 = 0;
let M50 = 0;
let M20 = 0;
let M10 = 0;
let M5 = 0;
let M1 = 0;
bankamat(Pul);
function bankamat(girilenPul) {
  while (girilenPul >= 0) {
    if (girilenPul > 0 && girilenPul < 1) {
      console.log("Qəpik qəbul etmirik, Yanlız Manatlıqlar daxildir!");
      break;
    } 
    if (girilenPul >= 200) {
      girilenPul -= 200;
      M200 += 1;
    } else if (girilenPul >= 100) {
      girilenPul -= 100;
      M100 += 1;
    } else if (girilenPul >= 50) {
      girilenPul -= 50;
      M50 += 1;
    } else if (girilenPul >= 20) {
      girilenPul -= 20;
      M20 += 1;
    } else if (girilenPul >= 10) {
      girilenPul -= 10;
      M10 += 1;
    } else if (girilenPul >= 5) {
      girilenPul -= 5;
      M5 += 1;
    } else if (girilenPul >= 1) {
      girilenPul -= 1;
      M1 += 1;
    } else {
      if (girilenPul >= 0) {
        console.log(
          `Ümumi pul məbləği: ${oldMoney}\nQaytarıldı: (${M200}) - 200 Manat, (${M100}) - 100 Manat, (${M50}) - 50 Manat, (${M20}) - 20 Manat, (${M10}) - 10 Manat, (${M5}) - 5 Manat, (${M1}) - 1 Manat`
        );
        break;
      }
    }
  }
} */

// TODO Task 31. Massivin ilk elementini qaytaran funksiya yazın.
/* Task 31 => Result:
let promptValue = prompt("Eded daxil edin");

addNumber(promptValue);

function addNumber (deyer){
  console.log(deyer[0])
} */

// TODO Task 32. Massivin son elementini qaytaran funksiya yazın.
/* Task 32 => Result:
let promptValue = prompt("Eded daxil edin");

addNumber(promptValue);

function addNumber(deyer) {
  console.log(deyer[deyer.length - 1]);
}
 */

// TODO Task 33. Verilən obyekin yalnız key-lərini ekrana verən funksiya yazın.
/* Task 33 => Result:

let obj = {
  ad: "Omer",
  soyad: "Tapdiqov",
  yas: 18,
}

addNumber(obj);

function addNumber(object) {
  console.log(Object.keys(object));
}
 */

// TODO Task 34. Verilən obyekin yalnız Value-lərini ekrana verən funksiya yazın.
/*Task 34 => Result:

let obj = {
  ad: "Omer",
  soyad: "Tapdiqov",
  yas: 18,
}

addNumber(obj);

function addNumber(object) {
  console.log(Object.values(object));
}
*/

// TODO Task 35. Obyektin proprty-lərinin sayını qaytaran funksiya yazın.
/* //Task 35 => Result:

let obj = {
  ad: "Omer",
  soyad: "Tapdiqov",
  yas: 18,
}

addNumber(obj);

function addNumber(object) {
  console.log(Object.keys(object).length);
} */

// TODO Task 36. Massivin ilk n elementini ekrana verən funksiya yazın.
/* //Task 36 => Result:
let promptvalue = prompt("uzunluq deyerinin daxil edin")
let word = "Salam Dunya"
let cem = ""
for (let i = 0; i < promptvalue; i++) {
  cem += word[i]
}
console.log(cem);
 */

// TODO Task 37. Massivin son n elementini ekrana verən funksiya yazın.
/* //Task 37 => Result:
let promptvalue = prompt("uzunluq deyerinin daxil edin")
let word = "Salam Dunya"
let cem = ""
for (let i = word.length - 1; i > promptvalue; i--) {
  cem += word[i]
}
console.log(cem);
 */

// TODO 38. .hasOwnProperty metodundan istifadə etmədən onun işini görən funksiya yazın (məs.: hasOwn(obj, key) => Boolean)
/* //Task 39 => Result:
let obj = {
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

// TODO 39. Massivin bütün elementlərini ulduz (*) ilə ayıraraq ekrana verən funksiya yazın.
/* //Task 39 => Result:
/* let arr = [11,22,33,44,55,66,77,88,99];

function addStar(array) {
    console.log(array.join(" * "));
}
addStar(arr);
 */

// TODO 40. Massivin tək yerdə duran elementlərini null-a çevirən funksiya yazın
/* //Task 40 => Result:
let arr = [];
let promptValue = prompt("deyer daxil edin")
for (let j = 0; j < promptValue.length; j++) {
  arr.push(promptValue[j])
}
console.log(arr);

tekMassiv(arr)

function tekMassiv(array) {
  for (let i = 1; i < array.length; i+=2) {
    array[i] = null
  }
  console.log(array);
} */

// TODO 41. Massivin verilən indeksdən sonrakı elementlərini silən funksiya yazın
/* //Task 41 => Result:
let arr = [];
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
} */

// TODO 42. Aldığı parametrlərə görə yeni obyekt yaradan funksiya yazın (məs.: createObj('Elchin', 'Zadeh') => {name: 'Elchin', surname: 'Zadeh'}).
/* //Task 42 => Result:
function createObj(name, surname, age) {
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
console.log(obj); */

// TODO 43. Aldığı parametrlərə görə obyektə yeni property əlavə edən funksiya yazın (məs.: updateObj({}, 'name', 'Elchin') => {name: 'Elchin'}).
/* //Task 43 => Result:
function updateObj(obj, key, value) {
  obj[key] = value;
  return obj;
}
let myObj = {};

updateObj(myObj, prompt("Obyektin Key adını qeyd edin"), prompt("Obyektin Keyinin VALUE -sunu qeyd edin")); // myObj: { name: 'Elchin' }
console.log(myObj); */

// TODO 44. Verilən 2 massivi birləşdirib tək bir massiv qaytaran funksiya yazın.
/* //Task 44 => Result:
let promprArr1 = prompt("1 ci arrey daxil edin."); 
let promprArr2 = prompt("2 ci arrey daxil edin."); 
console.log(promprArr1.concat(promprArr2).split("")); */

// TODO 45. Obyektin seçilən property-sini silən funksiya yazın (məs.: deleteKey(obj, key))
/* //Task 45 => Result:
let obj = {
  name: "abbas",
  surname: "memmedov",
  age: 21,
};
let key = prompt("key'i daxil edin.");
function delet(obj, key) {
  delete obj[key];
}
delet(obj, key);
console.log(obj); */

// TODO 46. Massivin klonunu yaradan funksiya yazın
/* //Task 46 => Result:
let promptValue = [prompt("Array deyeri daxil edin")]
let cloneArr = promptValue; */

// TODO 47. Obyektin klonunu yaradan funksiya yazın
/* //Task 47 => Result:
let promptValue = {
  name: prompt("Name deyeri daxil edin"),
  surname: prompt("Name deyeri daxil edin"),
  age: prompt("Name deyeri daxil edin")
}
let cloneObject2 = promptValue; */

// TODO Task 48. .hasOwnProperty metodundan istifadə etmədən onun işini görən funksiya yazın (məs.: hasOwn(obj, key) => Boolean).
//Task 38 => Result:
/* //Task 48 => Result:
let obj = {
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
} */
