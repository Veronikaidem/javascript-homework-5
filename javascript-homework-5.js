//homework1
// let array =[ 5, 25, 89, 120, 36];
//  array.push('javascript', 'python');
// array.unshift('html', 'css');
// // console.log(array.length);
// array.shift();
// array.pop();

// console.log(array);

//homework 2

// let array = ['fortixali', 'banani', 'msxali'];

// // console.log(array.length);
// array.push('vashli', 'ananasi');
// array.unshift('sazamTro');
// array.splice(2, 1, 'mango')
// // console.log(array.length);
// array.pop();
// array.shift();
// console.log(array.length);

//homework 3

// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// let newarray = array.map(function(item){
//     return item / 3;
// })
// console.log(newarray); orrrr

// let array = [12, 25, 3, 6, 8, 14, 7, 23];
//  let newarray = array.map((item)=> item / 3);
//  console.log(newarray);

//homework 4

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

// let newarray = array.filter(function(item){
//     return  typeof item == 'number';
// })
// console.log(newarray); orrrr

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

// let newarray = array.filter((item)=> typeof item == 'number');

// console.log(newarray);

//homework 5

// let languages = ['html', 'css', 'javascript', 'python', 'php'];
// let newlanguages =languages.filter(function(item){
//     return item.length > 3
// })

// console.log(newlanguages); //or

// let languages = ['html', 'css', 'javascript', 'python', 'php'];
// let newlanguages =languages.filter((item) =>  item.length > 3);

// console.log(newlanguages);

//homework 6 ????????????????

let item = [12, "google", 32, null, "yahoo", 25];

let newitem = item.map(function (element) {
  if (typeof element == "number") return Math.pow(element, 2);
  else if (typeof element == "string") return element.toUpperCase();
  else return element;
});
console.log(newitem); 

//homework 7

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// let newwords = words.filter(function(item){
//     return item.includes( 'M') || item.includes('m');
// })

// console.log(newwords); orrrrr

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// let newwords = words.filter((item) => item.includes( 'M') || item.includes('m'));

// console.log(newwords);

//homework8

// let arr1 = [1, 2];

// let arr2 = [3, 4];

// let arr3 = [5, 6];
//  let arrays =  arr1.concat(arr2, arr3);

//  console.log(arrays);

//homework 9

// let arr = [1, 2, 3, 4, 5];
// let sum=0;
// arr.forEach(function(item){
//    return (sum=sum+item);
// })

// console.log(sum);

//homework10

// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
// let newnumbers= numbers.filter(function(item){
//     return item > 0;
// })

// console.log(newnumbers); //orrrrr

// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
// let newnumbers= numbers.filter((item)=> item > 0);

// console.log(newnumbers);

//homework11

// let arr = [-1, -2, -3, 4].some(function(item){
//     return item > 0
// })
// console.log(arr); //orrrrr

// let arr = [-1, -2, -3, 4].some((item) => item > 0);
// console.log(arr);

//homework12

// let array =[23,45,32,5,87,7,3,98];
// let minValue= array.sort(function(x,y){
//     return (y-x)
// })
// console.log(minValue[minValue.length-1]); orrrr>>>

// let array =[23,45,32,5,87,7,3,98];
// let minValue= array.sort((x,y) =>(y-x));

// console.log(minValue[minValue.length-1]);

//homework13

//  let array =[1, 2, 3, 4, 5];

//  array.splice(3, 0,'a', 'b', 'c' );
//  console.log(array);

let item = [12, "google", 32, null, "yahoo", 25];

let newitem = item.map(function (element) {
  if (typeof element == "number") return Math.pow(element, 2);
  else if (typeof element == "string") return element.toUpperCase();
  else return element;
});
console.log(newitem); 

// let item = [12, 'google', 32, null, 'yahoo', 25];

// let newitem = item.map(function(element){
//      if (typeof element == 'number')
//     return Math.pow(element,2);

// });
// console.log(newitem);
