// // console.log("hello")

// // const id = 12345.52
// // var email = "myemail"
// // let pass = "abcd"

// // //a = 10

// // //id = 12
// // //email = "other"
// // pass = "xyz"
// // console.log(pass);

// // //console.table([a, id, email, pass])

// // console.table([typeof(id),typeof(email),typeof(pass)])

// // const arr = [1,2,3]
// // console.log(arr);
// // arr[0]=10
// // console.log(arr);

// // let a = 10
// // let b = a
// // a = 50
// // console.log(b)

// // let x=3
// // {
// //     const x=4
// // }

// // console.log("hi"==="hi");

// // console.log("20">"5");
// // p = 50
// // console.log(p);
// // console.log(Number(p));
// // console.log(Boolean(p));
// // console.log(String(p));

// // console.log(typeof(true));
// // console.log(typeof(0));
// // console.log(typeof(1));


// // let q = 10;
// // q &= 5;
// // console.log(q);

// // q = BigInt(q)
// // console.log(typeof q);

// // console.log(new Date("09-01-2025"));

// // console.log(10+1+"hi");
// // console.log("hi"+10+1);
// // console.log("hi"+10+1+"hi"+10+1);

// // console.log(true+1)

// // console.log("0"<1)

// console.log(null>0)
// console.log(null==0)
// console.log(null<0)
// console.log(null<=0)

// console.log(undefined==0)
// console.log(undefined>0)
// console.log(undefined<0)

// console.log(undefined<=0)
// console.log(undefined>=0)

// //strict check
// console.log("2"===2)


// console.log(typeof null);

// let a = Symbol("123")
// console.log(a);

// console.log(typeof 34253n);

// const heros = ["a","b","c","d"]
// console.log(heros);




// const fun = function (){
//     console.log("this is the fun");
// }

// console.log(fun())

// console.log(typeof null);

// let base = "hello"
// let other = base
// console.log(base,other);

// base = "hi"
// console.log(base,other);
// other = "tata"
// console.log(other);

// let myObj = {
//     name: "rk",
//     age:20
// }
// let myObj2 = myObj
// myObj.age = 25
// console.log(myObj.age)
// console.log(myObj2.age)

// let myname = "hello"
// console.log(typeof myname);
// console.log(myname.length);
// console.log(myname[4]);

// console.log(myname.toUpperCase());
// console.log(myname.indexOf("l"));

// console.log(myname.substring(1,3));
// console.log(myname.slice(1,3));
//console.log(myname.slice(-1,0));

// reverse a string 
// let s = "laptop"
// let r = ""
// for(i=s.length-1;i>=0;i--){
//     r+=s[i]
// }
// console.log(r);

// let pass = "  Hello  hi "
// console.log(pass.trim());

// const url = "https://rk.com/r%20k/%20rk"

// console.log(url.replaceAll("%20","-"));
// console.log(url.includes("rrk"));

// console.log(url.split("%20"));

// let new_sp = url.split("%20").reverse().join("%20")
// console.log(new_sp);

// const score = 400
// console.log(typeof(score));

// console.log(score.toFixed(2));

// const num = 1000000
// console.log(num.toLocaleString("en-IN"));

// let a = num.toLocaleString("en-IN")
// console.log(a+1);

// console.log(Math);
// console.log(Math.round(4.5))
// console.log(Math.abs(-4)+1);

// let c = Math.abs(-4)
// console.log(c);

// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));

// console.log(Math.pow(2,2));

// console.log(Math.max(1,2,10,5));

// console.log(Math.floor((Math.random()*10)));

// let min = 10
// let max = 20
// console.log(Math.floor(Math.random()*(max-min+1))+min);

// let dt = new Date()
// console.log(dt);
// console.log(dt.toDateString());
// console.log(dt.toLocaleString());

// let new_dt = new Date(2024,11,25)
// console.log(new_dt.toLocaleString());

// let new_date = new Date("01-26-2026")
// console.log(new_date);

// let time_stamp = Date.now()
// console.log(time_stamp.getTime());

// let dat = new Date()
// console.log(dat.getDay());

//Array

// const arr = [1,2,3,4,true,0]
// console.log(arr);
// console.log(typeof arr);

// console.log(arr[0]);

// const heros = new Array(5,6,7,8,9,10)
// console.log(heros);

// heros.push(20,21,22) //push at last
// console.log(heros);

// heros.pop() // removes at last
// console.log(heros); 

// heros.unshift(50) //insert at starting
// console.log(heros);

// heros.shift(50) //removes at starting
// console.log(heros);

// console.log(heros.includes("h"));

// console.log(heros.join(""));

// // slice, splice
// console.log("A ",heros);
  
// let ab = [1,2,3,4,5,6,7,8,9,10]
// console.log(ab);
// let new_ab = ab.slice(1,3)
// console.log(new_ab);
// console.log(ab);

// let p = [5,6,7,8,9,10]
// console.log(p);
// let new_p = p.splice(1,3)
// console.log(new_p);
// console.log(p);

// let a = [1,2,3]
// let b = [7,8,9]
// let c = a.concat(b)
// console.log(c);

// console.log([,,,].length); //3

// console.log([...a, ...b]);

// let z = [,1,2,3,[10,20,[50,60,70]],4,5]
// console.log(z.flat(1));
// console.log(z.flat(2));

// console.log(Array.isArray(z));

// console.log(Array.from("HEllo")); 
// console.log(Array.from({name: "laptop"})) //logical


// objects

// const user = {
//     name: "raman",
// }
// //console.log(user);

// //singleton
// const myobj = new Object()
// //non-single ton
// const myobj2 = {}

// // object literals

// const sym = Symbol("key11")
// const jsuser = {
//     name: "rk",
//     "last name": "kk",
//     "age": 18,
//     location: "delhi",
//     email: "hello@gmail.com",
//     isloggedin: false,
//     lastlogin: ["monday","saturday"],
//     [sym]: "hello"
// }
// console.log(jsuser);
// console.log(jsuser["name"]);
// console.log(jsuser.name);
// console.log(jsuser["last name"]);
// console.log(jsuser.age);
// console.log(typeof sym);

// jsuser.email = "hi@mail"
// console.log(jsuser);

// //Object.freeze(jsuser)
// jsuser.email = "hello@mail"
// console.log(jsuser);

// jsuser.car = "tata"
// console.log(jsuser);

// jsuser.greet = function(){
//     console.log("hello world");
// }

// console.log(jsuser.greet());

// jsuser.greet2 = function(){
//     console.log(`hello ${this.name}`);
// }

// console.log(jsuser.greet2());

// const fbuser = {}
// fbuser.id = "123456abc"
// fbuser.name = "sam"
// fbuser.login = false

// const user = {
//     email: "hi@email.com",
//     fullname: {
//         userfullname: {
//             first: "shree",
//             last: "ram"
//         }
//     }
// }

// console.log(user["fullname"]["userfullname"]["first"]);

// const obj1 = {
//     1: "a",
//     2: "b",
//     3: "c"
// }
// const obj2 = {
//     10: "a",
//     20: "b",
//     30: "c"
// }

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(obj2));
// console.log(Object.values(obj2));
// console.log(Object.entries(obj2));
// console.log(obj2.hasOwnProperty("100"));
//console.log(obj2.hasOwnProperty("10"));

//de-structure the object

// const newuser = {
//     name: "rk",
//     "last name": "kk",
//     "age": 18,
//     location: "delhi",
//     email: "hello@gmail.com",
//     isloggedin: false,
//     lastlogin: ["monday","saturday"]
// }

// const {email} = newuser
// console.log(email);

// const {email: em} = newuser //alias
// console.log(em);

// functions

// function names(){
//     console.log("hello");
//     console.log("hello2");
// }
// names()

// console.log(this);

// let objj = {
//     name: "rama",
//     greet: function(){
//         console.log(`${this.name}, hello`)       
//         console.log(this)         
//     }
// }

// console.log(objj.greet());
// objj.name = "krishna"
// console.log(objj.greet());

// function bye(){
//     let name = "mohan"
//     console.log(this);   
//     console.log(this.name);   //not word -> undefined
// }
// bye()

// const tata = ()=>{   //"this" not works in arrow fun 
//     let name = "vishnu"
//     console.log(this.name)    
//     console.log(this)    
// }
// tata()

// const addnum = (num1,num2)=>{ //if curly braces is used then return keyword is must
//     return  num1 + num2
// }
// console.log(addnum(5,2))

// const addnum = (num1,num2) => num1 + num2
// console.log(addnum(5,2))

// const addnum = (num1,num2) => (num1 + num2) // in single line braces no need return keyword
// console.log(addnum(5,2))

// const showArgs = (n,m,p) => {
//   console.log(n,m,p); // ReferenceError
// };
// showArgs(1, 2, 3);

// immediately invoked functions

// (function hello(h){
//     console.log("DB connected");
// })("h");

// let arr = [1,5,2,9,0,3]
// console.log(arr.sort());
// console.log(arr.sort((a,b)=>b-a)); // desc sort

// for loop

// for(let i=1;i<=10;i++){
//     console.log("2 *",i,"=",2*i)
// }

// for(let i=1;i<=10;i++){
//     if(i==4){
//         continue
//     }
//     if(i==8){
//         break
//     }
//     if(i%2==0){
//         console.log("Even number: ",i)        
//     }
// }

//while loop

// let a=5
// while(a<=10){
//     console.log(a)
//     a++
// }

//do-while loop
// let k = 10
// do{
//     console.log(k)
//     k--
// }
// while(k>=0)

// let myarr = ["apple","banana","mango","pineapple"]
// let arr = 0
// while(arr<myarr.length){
//     console.log(myarr[arr])
//     arr=arr+1
// }

// for-of
// numbers = [1,2,3,4,5,6]
// for (const num of numbers) {
//     console.log(num)    
// }

// const str = "hello"
// for(let s of str){
//     console.log(s)
// }

// //for-in
// const object = {
//     name: "hi",
//     age: 20,
//     login: false
// }
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(element)
//     }
// }

//map

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"America")
// map.set('NEP',"Nepal"),
// map.set('NEP',"Nepal")

// console.log(map)

// for(let [k,val] of map){
//     console.log(k, val);
// }

// const myobj = {
//     name: "rama",
//     age: 20,
//     login: false
// }


// for-each

// const coding = ["js","cpp","java","python"]

// coding.forEach(function(val) {
//     console.log(val)
// })

// coding.forEach((item, index, arr)=>{
//     arr[index] = item + "tata"  
// })

// console.log(coding);

// filter

// const lang = ["js","cpp","java","python"]
// const short = lang.filter(item => item.length<=3)
// console.log(short);

// const nums = [1,2,3,4,5,6]
// const n = nums.filter((item)=>{
//     console.log(item)
//     return item%2===0    
// })
// console.log(n);

// map
// const nn = [10,20,30,40,50,60,70,80,90,100]
// const new_nn = nn.map(val => val/10)
// console.log(new_nn);

//chaining in map

// const new_nn = nn
//                 .map(val => val/10)
//                 .map((v)=>{ return v+100})
//                 .filter((v)=>{ return v%2==0})
// console.log(new_nn);

// console.log(678/900);

// const arr = [1,2,3,4]
// const new_arr = arr.reduce( function(acc,current){
//     console.log(`Acc: ${acc}, Current Value: ${current}`)
//     return acc+current
// },0)

// console.log(new_arr);

// const shopping_cart = [
//     {
//         item: "toy",
//         price: 200
//     },
//     {
//         item: "cat",
//         price: 300
//     },
//     {
//         item: "bat",
//         price: 450
//     }
// ]

// const cart_bill = shopping_cart.reduce( (acc,ele) =>  acc + ele.price, 0 )
// console.log(cart_bill);

//30----completed






//31-36 -- DOM

