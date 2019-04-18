"use strict";

// (1)
var array = ['Кот', 'Собака', 'Жираф' ];
function searchArrayWord(array, word){
    for(var i = 0; i < array.length; i++){
        if(word == array[i]);
        return true;
    }
    return false;
}
console.log(searchArrayWord('Собака', array));


// (2)
var arr2 = [1, 2, 3, 7, 6, 9];
var sum = 0;
for(var i = 0; i < arr2.length; i++){
sum += arr2[i];
}
var result = sum / arr2.length;  
console.log(result);


// (3)
var arr3 = [1, 3, 5, 6, 7, 9];
var i = 0;
var totArr3 = [];
for(i = arr3.length; i > 0; i--){
    var num = arr3.length - i;
    totArr3[i] = arr3[num];
}
console.log(totArr3);


// (4)
var obj = {
    html: 'HTML', 
    css: 'CSS', 
    js: 'ECMA'
};
console.log(Object.keys(obj));


// (5)
var obj2 = {
    'name' : '',
    'phone' : '',
    'adress' : '',
    'total sum' : '',
    'total weight' : '',
    'purchased goods' : {
        1 : {
            itemname : 'Чашка',
            price : '100',
            weight : '200'
        },
        2 : {
            itemname : 'Ложка',
            price : '30',
            weight : '100'
        },
        3 : {
            itemname : 'Чайник',
            price : '550',
            weight : '2000'
        },
        4 : {
            itemname : 'Кружка',
            price : '150',
            weight : '400'
        }
    }
}
console.log(obj2);
 











