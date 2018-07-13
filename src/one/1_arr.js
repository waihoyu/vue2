
console.log("ok")
let array = [1, 2, 3, 4, 5,6]

//编程式
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

//声明式  不关心如何实现 不支持return
array.forEach(function (item, index){
    console.log(item);
})

// 遍历数组
for (let key in array) {
    console.log(typeof key);
}

//Object.keys
let obj = {school:'pku',age:9}
// for (let val of obj) {
//     console.log(val);
// }

for (const val of Object.keys(obj)) {
    console.log(obj[val]);
}

let newAry = [1,2,3,4,5].filter(function(item){
    return item > 2 && item < 5 
})

console.log(newAry);


[1,2,3,4].reduce(function(prev,next,index,item){
    console.log(arguments);
});

[1,2,3,4].reduce(function(prev,next,index,item){
    console.log(arguments);
},0);