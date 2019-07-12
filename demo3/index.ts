// 学习typescript基础类型

// 任意类型 any 声明为 any 的变量可以赋予任意类型的值
// 数字类型  number 双精度 64 位浮点值，它可以用来表示整数和分数
// 字符串类型 string 一个字符系列，使用单引号或双引号来表示字符串类型，反引号来
// 定义多行文本和内嵌表达式
// 布尔类型 boolean 表示逻辑值： true和false

// 数组类型 声明变量为数组 如： 
//在元素后面加上[] let arr:number[] = [1, 2];
// 或者使用数组泛型 let arr:Array<number> = [1, 2];

// 元组  元组类型用来表示已知元素数量和类型数组，各元素的类型不必相同，对应位置的类型需要相同
// 枚举  enum 枚举类型用于定义数值集合
enum Color {Red, Green, Blue};
let c:Color = Color.Blue;
console.log(c);   //输出 2

// void void 用于标识方法返回值的类型，标识该方法没有返回值
// null null 表示对象值缺失
// undefined undefined  用于初始化变量为一个未定义的值
// never never never是其他类型（包括null和undefined）的子类型，代表从不会出现 值

// any类型
// 任意值是typescript针对编程时类型不明确的变量使用的一种数据类型

// null 
// 在javascript中null表示 什么都没有
// null 是一个只有一个值的特殊类型，表示一个空对象引用
// 用typeof检测null返回的是object

// undefined
// 在javascript中，undefined是一个没有设置值的变量
// typeof 一个没有值的变量会返回 undefined
// null 和 undefined 是其他任何类型的子类型，可以赋值给其他类型，赋值后的类型
// 会变成 null 或 undefined， typescript中使用严格的空校验特性，就可以使得null和undefined
// 只能被赋值给void或本身对应的类型

// never 是其他类型（包括null和undefined）的子类型，代表从不会出现的值，
// 这意味着声明为 never 类型的变量只能被 never类型所赋值
// 在函数中它通常表现为抛出异常或无法执行到终止点（例无限循环）

