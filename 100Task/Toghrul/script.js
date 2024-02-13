//let userNumb = prompt("Eded daxil edin");

/* 2. let promptValue = prompt("Tek eded daxil edin");
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
// 3. let userNumber = userNumb.substr(0, userNumb.length-1);
// 4. let userNumber = userNumb.substr(1, userNumb.length);
/* 5. if(userNumb % 3 == 0 && userNumb % 5 == 0) {
    alert(userNumb)
}else {
    alert("Duzgun eded qeyd edin")
} */

/* 6. let userNumb = [3,4,1,34,90,89,90]
userNumb.forEach(element => {
    if(element == 1){
        console.log(element)
    } else {
        console.log("Bele bir eded yoxdu")
    }
}); */

/* 7. let promptValue = +prompt("Eded daxil edin");
while(true){
   if(promptValue % 11 == 0){
    alert(promptValue)
    break;
   }else{
    promptValue++
   }
} */

/* 8. let promptValue = +prompt("Eded daxil edin");
let promptPow = +prompt("Ikinci daxil edeceyiniz eded birincinin quvveti olacaq");

let result = promptValue ** promptPow;
alert(result); */

/* 9. let promptValue = prompt("Eded daxil edin");
let sum = 0;
for (let index = 0; index < promptValue.length; index++) {
   sum+= parseInt(promptValue[index]);
}
console.log(sum)   */

/* 10. let promptValue = prompt("Eded daxil edin");
let sum = 0;
if(promptValue.length == 5){
    for (let index = 0; index < promptValue.length; index++) {
   sum+= parseInt(promptValue[index]);
}
console.log(sum) 
}else {
    alert("Bes reqemli eded daxil edin")
} */

/*  11. let promptValue = prompt("Eded daxil edin");
let oppositeResult = '';
if(promptValue.length == 5){
    for (let index = promptValue.length-1; index >=0; index--) {
    oppositeResult+=promptValue[index];
}
}else {
    alert(" 5 reqemli eded daxil edin")
}
console.log(oppositeResult) */

/* 12. let promptValue = prompt("Eded daxil edin");
let oppositeResult = '';

for (let index = promptValue.length-1; index >=0; index--) {
    oppositeResult+=promptValue[index];
}
console.log(oppositeResult) */

/* 13. let a = prompt("Birinci terefein reqemini daxil edin")
let b = prompt("Ikinci terefein reqemini daxil edin")
let c = prompt("Uchuncu terefein reqemini daxil edin")
let result = 1;
result = a * b * c
alert(result) */

/* 14. let promptValue = prompt("Eded daxil edin")//246
let result = '';
for (let index = 0; index < promptValue.length; index++) {
    if(index % 2 == 0){
        result += promptValue[index]; 
    }
}
console.log(result) */

/* 15. let promptValue = prompt("Eded daxil edin");

if(promptValue<0){
  console.log(-1)
}else if (promptValue === 0 ){
console.log(0)
}else{
    console.log(1)
} */

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

/* 17. let promptValue = prompt("Eded daxil edin");
let totalReuslt = [];
for (let index = 0; index < promptValue.length; index++) {
  totalReuslt.push(promptValue[index]);
  totalReuslt.sort();
}
console.log(totalReuslt); */

/* let promptValue = prompt("Eded daxil edin"); // 7568

for (let index = 0; index < promptValue.length; index ++) {
  let result = promptValue.slice(index, (index += 1));
  console.log(result);
}
 */

//17. Daxil edilmiş 3 rəqəmli ədədin rəqəmlərini artan sırayla sıralayıb ekrana verin

/* let enteredNum= prompt("Enter the number:") //276831

let result=""
let min;
let max;
for(let i=0;i<enteredNum.length;i++){ //i = 0 enteredNum[1] -> 7
  for(let j=i+1;j<enteredNum.length;j++){  // j=2 enteredNum[2] -> 6
    if(enteredNum[i]>enteredNum[j]){
      max = enteredNum[i]; // 3
      enteredNum[i] =2
      enteredNum[j] = max
    }

  }
} */

//18. Daxil edilmiş ədədin sadə olub olmamasını yoxlayan və çıxışa uyğun olaraq true və ya false verən proqram yazın

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

//19. Daxil edilmiş ədəddən kiçik ədədlər arasından tam kub olan ən böyük ədədi ekrana verin

/* let promptValue = prompt("Eded daxil edin");
let largestCube = 0;
for (let i = 1; i < promptValue; i++) {
  let cube = Math.pow(i, 3);
  if (cube < promptValue) {
    largestCube = cube;
  }
}
console.log(largestCube); */

//21. Verilmiş ədədin uzunluğunu geri qaytaran funksiya yazın.

/* function callLength(){
  let promptValue = prompt("Eded daxil edin");
let length = promptValue.length;
console.log(length)
}

callLength() */

//22. Daxil edilən name parametrinə uyğun olaraq Salam <name>! mesajını ekrana verin. name təqdim olunmazsa Salam qonaq! mesajını ekrana verin

/* let a = prompt("Ad daxil edin");

if(a !== null && a !== "") {
  console.log(`Salam ${a}`)
}else{
  console.log("Salam qonaq!")
} */

//23. Verilmiş ədədin palindrom olub olmadığını yoxlayan funksiya yazın
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

//24. Daxil edilmiş 3 rəqəmli ədədin rəqəmlərinin fərqli olub olmadığını yoxlayan funksiya yazın

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

//25. Daxil edilmiş rəqəmdən kiçik 10-a bölünən ədədi qaytaran funksiya yazın

/* let promptValue = prompt("Eded daxil edin");

for(let i = 10; i<promptValue; i++){
if(i % 10 == 0 ){
  console.log(i)
}

} */

//26. Verilmiş n və m ədədlərinə uyğun olaraq n^m-i hesablayın. m təqdim edilməzsə dəyəri 2 olaraq qəbul edin

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

// 27. Ədədin sondan n-inci rəqəmini tapan funksiya yazın

/* function addNumber(){
let promptValue = prompt("Eded daxil edin");
  let lastElement = promptValue[promptValue.length-1];
console.log(lastElement)
}

addNumber(); */

//28. Daxil edilmiş ədədin sadə olub olmamasını yoxlayan və çıxışa uyğun olaraq true və ya false verən funksiya yazın
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

//29. Daxil edilmiş ədəddən kiçik tək ədədlərin sayını hesablayan funksiya yazın. Verilən ədəd mənfi olarsa böyük olan tək ədədlərin sayını tapın

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

//30. Daxil edilmiş məbləği ən az sayda əsginasla qaytarmaq üçün lazım olan əsginasları və saylarını ekrana verən funksiya yazın (məs.: 248 > 2-100, 2-20, 1-5, 3-1)

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

//31. Massivin ilk elementini qaytaran funksiya yazın

/* function addNumber(a){
  console.log(a[0])
}
let promptValue = prompt("Eded daxil edin");
addNumber(promptValue); */

//32. Massivin son elementini qaytaran funksiya yazın
/* function addNumb(a) {
  let lastNumb = promptValue[promptValue.length-1];
  console.log(lastNumb);
}
 let promptValue = prompt("Eded daxil edin");

 addNumb(promptValue); */

//33. Verilən obyekin yalnız key-lərini ekrana verən funksiya yazın

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

//34. Verilən obyekin yalnız value-larını ekrana verən funksiya yazın

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

//35. Obyektin proprty-lərinin sayını qaytaran funksiya yazın

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
/* console.log(word[i]);
let promptValue = 3;
let word = "thomas";
for(let i = 0; i<promptValue; i++){
  
} */

//38. .hasOwnProperty metodundan istifadə etmədən onun işini görən funksiya yazın (məs.: hasOwn(obj, key) => Boolean)

//39. Massivin bütün elementlərini ulduz (*) ilə ayıraraq ekrana verən funksiya yazın

//40. Massivin tək yerdə duran elementlərini null-a çevirən funksiya yazın

/* let arr = [];
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

//41. Massivin verilən indeksdən sonrakı elementlərini silən funksiya yazın
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

//42. Aldığı parametrlərə görə yeni obyekt yaradan funksiya yazın (məs.: createObj('Elchin', 'Zadeh') => {name: 'Elchin', surname: 'Zadeh'})

//43. Aldığı parametrlərə görə obyektə yeni property əlavə edən funksiya yazın (məs.: updateObj({}, 'name', 'Elchin') => {name: 'Elchin'})

//44. Verilən 2 massivi birləşdirib tək bir massiv qaytaran funksiya yazın

//45. Obyektin seçilən property-sini silən funksiya yazın (məs.: deleteKey(obj, key))

//46. Massivin klonunu yaradan funksiya yazın

//47. Obyektin klonunu yaradan funksiya yazın

//48. Verilən obyektdə dəyəri string olan elementlərin key-lərini ekrana verən funksiya yazın

//49. Massivdə ən çox işlənən elementi qaytaran funksiya yazın

//50. Massivin elementlərini ayrı ayrı console-a verən funksiya yazın

//51. Massivin içindəki bütün string-ləri birləşdirən funksiya yazın

//52. Massivin içindəki 0dan fərqli olan ədədləri bir-birinə vuran funksiya yazın

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

//TODO 54. Elementləri kiçikdən böyüyə sıralayın
/* let arr = [-12, -20, -1 , 0, 5, 1, 11, 35]
arr.sort((a,b)=>{
  return a-b;
})
console.log(arr) */

//55. Elementləri aldığı parametr-ə görə (kiçikdən böyüyə və ya böyükdən kiçiyə) sıralayan funksiya yazın

//56. Mənfi ədədləri silib yeni array yaradın

/* let arr = [-12, -20, -1 , 0, 5, 1, 11, 35]
let addArr = [];

arr.forEach(element =>{
  if(element >= 0){
    addArr.push(element)
  }
})

console.log(addArr) */
//TODO 55. Elementləri aldığı parametr-ə görə (kiçikdən böyüyə və ya böyükdən kiçiyə) sıralayan funksiya yazın

//TODO 57. Hər elementdən sadəcə birinin olduğu yeni bir massiv yaradın
/* let arr = [-12, -20, -1, 0, 5, 1, 11, 35];
arr.forEach((element) => {
  console.log([element]);
}); */

// TODO. Tək massiv içində istifadəçilərin məlumatlarını bildirən birdən çox obyekt verilib. Bu obyektlərin içində fullName, age və gender key-ləri təyin olunub. Bu massivə əsasən:



let arr = [
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
]
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