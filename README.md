# vue2  note for  me 
Learning vue2.5

## JS 数据类型

```bash
- 基本number string boolean  null undefined
- Object function
- Symbol (es6)
```
```bash
{} [] 两个比较特殊的

- 操作数组的方法 
- pop push unshift shift  splice reverse sort indexOf lastIndexof  concat  slice(ES4)
- 数组的变异（能改变原数组:pop push unshift shift  splice reverse sort）

- forEach filter(过滤) map(映射)  some every reduce (includes find)(es6)
- forEach 如何中断  自己封装一个forEach方法  不支持return

面试题： 数组的循环，forEach, for in ,for, 
for of 

"for in " 中 key 是 string 类型,可以打印数组的私有属性，也可以打印出来

"for of" 中， 支持 return,并且是值of 数组，(不能遍历对象)

如果非要遍历对象呢？Object.keys 将对象的key 作为新的数组

filter 是否操作原数组： 不  返回结果： 过滤后的新数组  回调函数返回结果：如果返回true 表示这一项放到新数组，

map  不操作原数组  返回新数组  回调函数中返回什么这一项是什么

反引号  是es6 中的 模板字符串 遇到变量 ${} 取值

```

## node版本(LTS表示标准版)
