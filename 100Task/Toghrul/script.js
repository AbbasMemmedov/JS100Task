
// TODO 2. İstifadəçidən tək sayda rəqəmlərdən ibarət olan ədəd daxil etməsini istəyin. Onun ortada duran rəqəmini ekrana verin
/* let promptValue = prompt("Tek eded daxil edin");
let trueValue = true;
for (let index = 0; index < promptValue.length; index++) {
  console.log(promptValue[index]);

  if (promptValue[index] % 2 == 0) {
    alert("Tek eded qeyd edin");
    trueValue = false;
    break;
  }
}
if (trueValue) {
  let promptValueIndex = Math.floor(promptValue.length / 2);
  alert(promptValue[promptValueIndex]);
}
 */
// TODO 3. İstifadəçidən ədəd daxil etməsini istəyin. O ədədin son rəqəmini silib ekrana verin
// let userNumber = userNumb.substr(0, userNumb.length-1);
// TODO 4. İstifadəçidən ədəd daxil etməsini istəyin. O ədədin ilk rəqəmini silib ekrana verin
// let userNumber = userNumb.substr(1, userNumb.length);
// TODO 5. Daxil edilmiş ədədin 3 və 5-ə eyni anda bölünüb bölünmədiyini yoxlayan proqram yazın
/* if(userNumb % 3 == 0 && userNumb % 5 == 0) {
    alert(userNumb)
}else {
    alert("Duzgun eded qeyd edin")
} */
// TODO 6. Daxil edilmiş ədədin içində 6 rəqəminin ölub olmadığını yoxlayan proqram yazın
/* let userNumb = [3,4,1,34,90,89,90]
userNumb.forEach(element => {
    if(element == 1){
        console.log(element)
    } else {
        console.log("Bele bir eded yoxdu")
    }
}); */
// TODO 7. Daxil edilmiş ədəddən böyük (növbəti) 11-ə bölünən ədədi ekrana verin
/* let promptValue = +prompt("Eded daxil edin");
while(true){
   if(promptValue % 11 == 0){
    alert(promptValue)
    break;
   }else{
    promptValue++
   }
} */
// TODO 8. İstifadəçidən hər hansı bir ədəd və hesablamaq istədiyi qüvvəti daxil etməsini istəyin. Bu ədədlərə görə nəticəni hesablayıb ekrana verin
/* let promptValue = +prompt("Eded daxil edin");
let promptPow = +prompt("Ikinci daxil edeceyiniz eded birincinin quvveti olacaq");

let result = promptValue ** promptPow;
alert(result); */
// TODO 9. İstifadəçidən 5 rəqəmli ədəd daxil etməsini istəyin. O ədədin rəqəmlərinin cəmini ekrana verin
/* let promptValue = prompt("Eded daxil edin");
let sum = 0;
for (let index = 0; index < promptValue.length; index++) {
   sum+= parseInt(promptValue[index]);
}
console.log(sum)   */
// TODO 10. İstifadəçidən istənilən rəqəmli ədəd daxil etməsini istəyin. O ədədin rəqəmlərinin cəmini ekrana verin
/* let promptValue = prompt("Eded daxil edin");
let sum = 0;
if(promptValue.length == 5){
    for (let index = 0; index < promptValue.length; index++) {
   sum+= parseInt(promptValue[index]);
}
console.log(sum) 
}else {
    alert("Bes reqemli eded daxil edin")
} */
// TODO 11. İstifadəçidən 5 rəqəmli ədəd daxil etməsini istəyin. Ədədin tərsini ekrana verin (12345 > 54321)
/* let promptValue = prompt("Eded daxil edin");
let oppositeResult = '';
if(promptValue.length == 5){
    for (let index = promptValue.length-1; index >=0; index--) {
    oppositeResult+=promptValue[index];
}
}else {
    alert(" 5 reqemli eded daxil edin")
}
console.log(oppositeResult) */
// TODO 12. İstifadəçidən istənilən rəqəmli ədəd daxil etməsini istəyin. Ədədin tərsini ekrana verin (12345 > 54321)
/* let promptValue = prompt("Eded daxil edin");
let oppositeResult = '';

for (let index = promptValue.length-1; index >=0; index--) {
    oppositeResult+=promptValue[index];
}
console.log(oppositeResult) */
// TODO 13. İstifadəçinən düzbucaqlı paralelepipedin tərəflərini daxil etməsini istəyin. Bu tərəflərə görə paralelepipedin həcmini hesablayıb ekrana verin
/* let a = prompt("Birinci terefein reqemini daxil edin")
let b = prompt("Ikinci terefein reqemini daxil edin")
let c = prompt("Uchuncu terefein reqemini daxil edin")
let result = 1;
result = a * b * c
alert(result) */
// TODO 14. Daxil edilmiş ədədin tək yerdə duran rəqəmlərini silib ekrana verən proqram yazın
/* let promptValue = prompt("Eded daxil edin")//246
let result = '';
for (let index = 0; index < promptValue.length; index++) {
    if(index % 2 == 0){
        result += promptValue[index]; 
    }
}
console.log(result) */
// TODO 15. Daxil edilmiş ədədin mənfi, sıfır və ya müsbət olmağından asılı olaraq çıxışa uyğun olaraq -1, 0 və ya 1 verin.
/* let promptValue = prompt("Eded daxil edin");

if(promptValue<0){
  console.log(-1)
}else if (promptValue === 0 ){
console.log(0)
}else{
    console.log(1)
} */
// TODO 16. Daxil edilmiş məbləği ən az sayda əsginasla qaytarmaq üçün lazım olan əsginasları və saylarını ekrana verən proqram yazın (məs.: 248 > 2-100, 2-20, 1-5, 3-1)
/* let promtMoney = prompt("Mebleg daxil edin"); // 550
let banknote = [200, 100, 50, 20, 10, 5, 1];
let index = 0;
let loop = true;
while (loop) {
  if (promtMoney) {
    if (promtMoney >= banknote[index]) {
      promtMoney -= banknote[index];
      console.log(banknote[index]);
    } else {
      index++;
    }
  } else {
    loop = false;
  }
} */

// TODO 17. let promptValue = prompt("Eded daxil edin");
/*let totalReuslt = [];
for (let index = 0; index < promptValue.length; index++) {
  totalReuslt.push(promptValue[index]);
  totalReuslt.sort();
}
console.log(totalReuslt); */

/* let promptValue = prompt("Eded daxil edin"); // 7568

for (let index = 0; index < promptValue.length; index ++) {
  let result = promptValue.slice(index, (index += 1));
  console.log(result);
} */


// TODO 18. Daxil edilmiş ədədin sadə olub olmamasını yoxlayan və çıxışa uyğun olaraq true və ya false verən proqram yazın

/* let promptValue = +prompt("Eded daxil edin");
let simpleNumb;

if (promptValue == 1) {
  console.log(`1 ne sade ne de murekkeb ededdir`);
} else if (promptValue > 1) {
  for (let i = 2; i < promptValue; i++) {
    if (promptValue % i == 0) {
      simpleNumb = false;
      break;
    }
  }

  if (simpleNumb) {
    alert(`${promptValue} sade ededdir `);
  } else {
    alert(`${promptValue} murekkeb ededdir `);
  }
} else {
  alert("Eded daxil edin");
} */

// TODO 19. Daxil edilmiş ədəddən kiçik ədədlər arasından tam kub olan ən böyük ədədi ekrana verin

/* let promptValue = prompt("Eded daxil edin");
let largestCube = 0;
for (let i = 1; i < promptValue; i++) {
  let cube = Math.pow(i, 3);
  if (cube < promptValue) {
    largestCube = cube;
  }
}
console.log(largestCube); */

// TODO 21. Verilmiş ədədin uzunluğunu geri qaytaran funksiya yazın.

/* function callLength(){
  let promptValue = prompt("Eded daxil edin");
let length = promptValue.length;
console.log(length)
}

callLength() */

// TODO 22. Daxil edilən name parametrinə uyğun olaraq Salam <name>! mesajını ekrana verin. name təqdim olunmazsa Salam qonaq! mesajını ekrana verin

/* let a = prompt("Ad daxil edin");

if(a !== null && a !== "") {
  console.log(`Salam ${a}`)
}else{
  console.log("Salam qonaq!")
} */

// TODO 23. Verilmiş ədədin palindrom olub olmadığını yoxlayan funksiya yazın
/* function palindromNumb(numb){
  let newNumb = "";
  for( let i= numb.length-1; i>=0; i--){
    newNumb +=numb[i];
  }

  if(newNumb == numb){
    alert(`${numb} palinromdur`);
  }else {
    alert(`${numb} palinrom deyil`)
  }
}

let promptValue = prompt("Eded daxil edin");

palindromNumb(promptValue) */

// TODO 24. Daxil edilmiş 3 rəqəmli ədədin rəqəmlərinin fərqli olub olmadığını yoxlayan funksiya yazın

/* function checkNumb(num){
  let isDiff =true;
  for( let i = 0; i<num.lemgth; i++){
    for(let j = 1; j<num.lemgth; j++){
      if(num[i] == num[j]){
        isDiff = false;
        break;
      }else if(num[i] != num[j]){
        isDiff = true;
      }
    }
     if(!isDiff){
      isDiff = false;
      break;
     }
  }

  if(isDiff){
    alert("Eded ferqlidir");
        }else {
          alert("Ededler eynidir")
        }
}
let promptValue = prompt("Eded daxil edin");
checkNumb(promptValue); */

// TODO 25. Daxil edilmiş rəqəmdən kiçik 10-a bölünən ədədi qaytaran funksiya yazın

/* let promptValue = prompt("Eded daxil edin");

for(let i = 10; i<promptValue; i++){
if(i % 10 == 0 ){
  console.log(i)
}

} */

// TODO 26. Verilmiş n və m ədədlərinə uyğun olaraq n^m-i hesablayın. m təqdim edilməzsə dəyəri 2 olaraq qəbul edin

/* let n = +prompt("Eded daxil edin");
let m = +prompt("Yeni eded daxil edin");
let result = 0;
if(n == "" || n == null){
  console.log("Eded daxil edin")
}else if(m== "" && m== 0){
  m=2;
  result = n + m;
  console.log(result)
}
else if(n != "" && m != null){
  result = n+m;
  console.log(result)

}  */

// TODO 27. Ədədin sondan n-inci rəqəmini tapan funksiya yazın

/* function addNumber(){
let promptValue = prompt("Eded daxil edin");
  let lastElement = promptValue[promptValue.length-1];
console.log(lastElement)
}

addNumber(); */

// TODO 28. Daxil edilmiş ədədin sadə olub olmamasını yoxlayan və çıxışa uyğun olaraq true və ya false verən funksiya yazın
/* function addNumber(){
  let promptValue = +prompt("Eded daxil edin");
let simpleNumb;

if (promptValue == 1) {
  console.log(`1 ne sade ne de murekkeb ededdir`);
} else if (promptValue > 1) {
  for (let i = 2; i < promptValue; i++) {
    if (promptValue % i == 0) {
      simpleNumb = false;
      break;
    }
  }

  if (simpleNumb) {
    alert(`${promptValue} sade ededdir `);
  } else {
    alert(`${promptValue} murekkeb ededdir `);
  }
} else {
  alert("Eded daxil edin");
}}

addNumber(); */

// TODO 29. Daxil edilmiş ədəddən kiçik tək ədədlərin sayını hesablayan funksiya yazın. Verilən ədəd mənfi olarsa böyük olan tək ədədlərin sayını tapın

/* function addNumber(){
  let promptValue = +prompt("Eded daxil edin"); // 123456;   21/2
if(promptValue >0){
  let result = Math.floor(promptValue/2);
  console.log(result)
}else if (promptValue <0) {
 result = Math.ceil(promptValue/2);
 console.log(result)
}
}
addNumber(); */

// TODO 30. Daxil edilmiş məbləği ən az sayda əsginasla qaytarmaq üçün lazım olan əsginasları və saylarını ekrana verən funksiya yazın (məs.: 248 > 2-100, 2-20, 1-5, 3-1)

/* function addNumber (){
  let promtMoney = prompt("Mebleg daxil edin"); // 550

  let banknote = [200, 100, 50, 20, 10, 5, 1];
  let index = 0;
  let loop = true;
  while (loop) {
    if (promtMoney) {
      if (promtMoney >= banknote[index]) {
        promtMoney -= banknote[index];
        console.log(banknote[index]);
      } else {
        index++;
      }
    } else {
      loop = false;
    }
  }
}
addNumber(); */

// TODO 31. Massivin ilk elementini qaytaran funksiya yazın

/* function addNumber(a){
  console.log(a[0])
}
let promptValue = prompt("Eded daxil edin");
addNumber(promptValue); */

// TODO 32. Massivin son elementini qaytaran funksiya yazın
/* function addNumb(a) {
  let lastNumb = promptValue[promptValue.length-1];
  console.log(lastNumb);
}
 let promptValue = prompt("Eded daxil edin");

 addNumb(promptValue); */

// TODO 33. Verilən obyekin yalnız key-lərini ekrana verən funksiya yazın

/* function addProp(){
  let obj = {
    name: "Thomas",
    surname: "Anderson",
    age: 23,
    height: 1.80,
    weight: 70
   }
   console.log(Object.keys(obj));
}

addProp(); */

// TODO 34. Verilən obyekin yalnız value-larını ekrana verən funksiya yazın

/* function addProp(){
  let obj = {
    name: "Thomas",
    surname: "Anderson",
    age: 23,
    height: 1.80,
    weight: 70
   }
   console.log(Object.values(obj));
}

addProp(); */

// TODO 35. Obyektin proprty-lərinin sayını qaytaran funksiya yazın

/* function addProp(){
  let obj = {
    name: "Thomas",
    surname: "Anderson",
    age: 23,
    height: 1.80,
    weight: 70
   }
   console.log(Object.keys(obj).length);
}

addProp(); */

// TODO 36. Massivin ilk n elementini ekrana verən funksiya yazın

// TODO 37. Massivin son n elementini ekrana verən funksiya yazın


/* console.log(word[i]);
let promptValue = 3;
let word = "thomas";
for(let i = 0; i<promptValue; i++){
  
} */

// TODO 38. .hasOwnProperty metodundan istifadə etmədən onun işini görən funksiya yazın (məs.: hasOwn(obj, key) => Boolean)

// TODO 39. Massivin bütün elementlərini ulduz (*) ilə ayıraraq ekrana verən funksiya yazın
/* let arr = [12,34,45,12,34,12, "v", "v"]
let newArr = [];
function array(a){
  console.log(a.join("*"))
  newArr.push(a.join("*")) 
}
array(arr)
console.log(newArr) */

// TODO 40. Massivin tək yerdə duran elementlərini null-a çevirən funksiya yazın

/* let arr = [];
let promptValue = prompt("Deyer daxil edin")
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
/*let arr = [];
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

// TODO 42. Aldığı parametrlərə görə yeni obyekt yaradan funksiya yazın (məs.: createObj('Elchin', 'Zadeh') => {name: 'Elchin', surname: 'Zadeh'})

/* function obj(param1, param2){
  return {
    name: param1,
    surname: param2
  }
}
let newObj = obj("Thom", "Anderson")
console.log(newObj) */


// TODO 43. Aldığı parametrlərə görə obyektə yeni property əlavə edən funksiya yazın (məs.: updateObj({}, 'name', 'Elchin') => {name: 'Elchin'})

//TODO  44. Verilən 2 massivi birləşdirib tək bir massiv qaytaran funksiya yazın

/* let arr = [12, 23, 45, 54, 3];
let addArr = [ 2, 4, 5, 7, 8];
let newArr = arr.concat(addArr)
console.log(newArr) */

// TODO  45. Obyektin seçilən property-sini silən funksiya yazın (məs.: deleteKey(obj, key))
/* let obj = {
  name: "thom",
  surname: "anderson",
  age: 18
}

delete obj.name
console.log(obj) */

// TODO  46. Massivin klonunu yaradan funksiya yazın
/* let arr = [12, 23, 45, 54, 3, 6]

let newArr = [...arr];
console.log(arr)
console.log(newArr) */

// TODO  47. Obyektin klonunu yaradan funksiya yazın
/* let arr = {num:12, age: 18}
let newArr = {...arr}
console.log(newArr) */
// TODO  48. Verilən obyektdə dəyəri string olan elementlərin key-lərini ekrana verən funksiya yazın
/* let obj = {
  name: "Thomas",
  surname: "Anderson",
  age: 18
}
function newObj(obj){
  for (const key in obj) {
    if (typeof obj[key] == "string") { 
      console.log(key);
    }
  }
}
newObj(obj) */


// TODO 49. Massivdə ən çox işlənən elementi qaytaran funksiya yazın

//50. Massivin elementlərini ayrı ayrı console-a verən funksiya yazın
/* let arr = [12, 23, 34, 45, 56, 67]
for(i = 0; i<arr.length; i++){
  console.log(arr[i])
} */

// TODO 51. Massivin içindəki bütün string-ləri birləşdirən funksiya yazın
/* let arr = ["a", "b", "v", "c", "f", "g"]
let sum = "";
for(let i = 0; i< arr.length; i++){
  sum +=arr[i];
}
console.log(sum) */

// TODO 52. Massivin içindəki 0 dan fərqli olan ədədləri bir-birinə vuran funksiya yazın
/* let arr = [2, 3, 4, 0, 5, 6, 7]
let mult = 1;
for(let i=0; i<arr.length; i++){
if(arr[i] != 0){
mult *= arr[i]
}
}
console.log(mult) */
// TODO 53. Mənfi ədədləri müsbətə çevirib yeni array yaradın
/* let arr = [-12, -20, -1 , 0, 5, 1, 11, 35]
let addArr = [];
for(let i=0; i<arr.length; i++){
   if(arr[i]< 0){
     addArr.push(arr[i] * -1);
   }else{
    addArr.push(arr[i])
   }
}
console.log(addArr) */

// TODO 54. Elementləri kiçikdən böyüyə sıralayın
/* let arr = [-12, -20, -1 , 0, 5, 1, 11, 35]
arr.sort((a,b)=>{
  return a-b;
})
console.log(arr) */

// TODO 55. Elementləri aldığı parametr-ə görə (kiçikdən böyüyə və ya böyükdən kiçiyə) sıralayan funksiya yazın
/*
let arr = [-12, -5,2, 0, 5, -2, 7, 4];
let secim = confirm("Kicikdən böyüyə olsun? (true)");

sorter(arr, secim)

function sorter(arr, secim) {
  if (secim) {
    arr.sort((a,b) => {
      return a - b
    })
  }else {
    arr.sort((a,b) => {
       return b - a
    })
  }
  console.log(arr);
}
*/
// TODO 56. Mənfi ədədləri silib yeni array yaradın

/* let arr = [-12, -20, -1 , 0, 5, 1, 11, 35]
let addArr = [];

arr.forEach(element =>{
  if(element >= 0){
    addArr.push(element)
  }
})
console.log(addArr) */

//TODO 57. Hər elementdən sadəcə birinin olduğu yeni bir massiv yaradın
/* let arr = [-12, -20, -1, 0, 5, 1, 11, 35];
arr.forEach((element) => {
  console.log([element]);
}); */

// TODO. Tək massiv içində istifadəçilərin məlumatlarını bildirən birdən çox obyekt verilib. Bu obyektlərin içində fullName, age və gender key-ləri təyin olunub. Bu massivə əsasən:

/* let arr = [
  {
    name: "Thom",
    age: 25,
    gender: "male"
  },
  {
    name: "Elion",
    age: 21,
    gender: "male"
  },
  {
    name: "Alexa",
    age: 78,
    gender: "famale"
  },
  {
    name: "Alexandra",
    age: 62,
    gender: "famale"
  },
  {
    name: "Alexi",
    age: 64,
    gender: "famale"
  },
] */
//TODO 58. İstifadəçilərin sadəcə adlarının olduğu massiv yaradın
/* let addArr = []
for (let index = 0; index < arr.length; index++) {
  addArr.push(arr[index].name);  
}
console.log(addArr) */
 
//TODO 59. Kişiləri və qadınları ayrı array-lərə yığın
/* let men =[];
let women = [];
for (let index = 0; index < arr.length; index++) {
  if(arr[index].gender === "male"){
    men.push(arr[index].name)
    
  }else{
    women.push(arr[index].name)
  }
}
console.log(men, women); */

// TODO 60. Yaşı 60-dan az olanları çıxarıb qalanlarını bir massivə yığın
/* let newAge = []
for (let index = 0; index < arr.length; index++) {
  if(arr[index].age > 60){
    newAge.push(arr[index].name)
  }
}
console.log(newAge) */

// TODO 61. İstifadəçilərin yaşları cəmi hansısa bir ədəddən böyük olduqda onların bütün məlumatlarını ekrana verən funksiya yazın
/* function addValue(value){
  for (let index = 0; index < arr.length; index++) {
  sum+=arr[index].age;
  if(promptValue<sum){
    console.log("Daxil edilmish eded yaslarinin ceminden azdir")
  }else{
    console.log(arr[index])
  }
}
}
let promptValue = prompt("Eded daxil edin");
let sum = 0;
addValue(promptValue); */
// TODO 62. Cinsiyətlərə görə ayrılmış istifadəçi sayını ekrana verən funksiya yazın
// TODO 63. Yaşa görə ən böyük və ən kiçik istifadəçilərin məlumatlarını ekrana verən funksiya yazın
// TODO 64. Adlara görə əlifba sırası ilə sıralanmış istifadəçilərin məlumatlarını ekrana verən funksiya yazın
/* let addArr = [];
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index].name) ;
  addArr.push(arr[index].name);
  addArr.sort()
}
console.log(addArr) */
// TODO 65. Yaşı 25-40 aralığında olan istifadəçilərin yaşlarının ortalamasını ekrana verən funksiya yazın
/* let averageAge = 0;
function averAge(d){
  for (let index = 0; index < d.length; index++) {
    console.log(d[index].age);
    averageAge = Math.floor((averageAge +d[index].age)/2);
  }
  console.log(averageAge)
}

averAge(arr) */
// TODO 66. Adında 'a' hərfi olan istifadəçilərin məlumatlarını ekrana verən funksiya yazın

/* let arr = [
  {
    name: "Thomas",
    surname: "Anderson",
    age: 16
  },
  {
    name: "Thanos",
    surname: "Andrea",
    age: 15
  },
  {
    name: "Thomis",
    surname: "Menderson",
    age: 19
  }
] */

// TODO 67. Cinsiyətə görə ayrılmış istifadəçilərin yaşlarının cəmini ekrana verən funksiya yazın
/* let sum = 0;
function addSum(a){
  for (i = 0; i< a.length; i++){
  sum+=a[i].age;
}
console.log(sum)
}
addSum(arr); */
// TODO 68. İstifadəçilərin yaşları arasında ən çox rast gəlinən yaşın hansı olduğunu və bu yaşa sahib olan 
// TODO 69. istifadəçilərin məlumatlarını ekrana verən funksiya yazın
/* function addArr(a){
  for (let index = 0; index < a.length; index++) {
  console.log(a[index]);
}
}
addArr(arr) */

// TODO 70. Ad və soyadı eyni olan istifadəçilərin məlumatlarını ekrana verən funksiya yazın

/* let arr = [
  {
    name: "Thomas",
    surname: "Alm",
    age: 25,
    gender: "male"
  },
  {
    name: "Thomas",
    surname: "Alm",
    age: 35,
    gender: "famele"
  },
  {
    name: "Zhoras",
    surname: "Ziama",
    age: 30,
    gender: "male"
  },
  {
    name: "Shors",
    surname: "Zama",
    age: 40,
    gender: "male"
  },
  {
    name: "Dhors",
    surname: "Zama",
    age: 32,
    gender: "female"
  },
  {
    name: "Rhors",
    surname: "Zama",
    age: 23,
    gender: "male"
  },
] */


// TODO 38. .hasOwnProperty metodundan istifadə etmədən onun işini görən funksiya yazın (məs.: hasOwn(obj, key) => Boolean)

// TODO 43. Aldığı parametrlərə görə obyektə yeni property əlavə edən funksiya yazın (məs.: updateObj({}, 'name', 'Elchin') => {name: 'Elchin'})
 
// TODO 62. Cinsiyətlərə görə ayrılmış istifadəçi sayını ekrana verən funksiya yazın
// TODO 63. Yaşa görə ən böyük və ən kiçik istifadəçilərin məlumatlarını ekrana verən funksiya yazın

// TODO 68. İstifadəçilərin yaşları arasında ən çox rast gəlinən yaşın hansı olduğunu və bu yaşa sahib olan 

