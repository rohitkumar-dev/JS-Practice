// OOPS 

// objects--- collection of properties and methods

// constructor function 
// prototypes
// clssses
// instances (new, this)

// 4 pillars
// abstraction
// encapsulation
// inheritance
// polymorphism

// object literal {}

// const user = {
//     username: "RAMA",
//     logincount: 10,
//     signin: false,
//     getuser: function(){
//         console.log("Yes I got it.")  
//         console.log(this)        
//         return this.username      
//     }
// }
// console.log(user);
// console.log(user.getuser());

// console.log(this); // for browser

// function User(username,logincount,islogin){
//     let x = 1000
//     this.username = username
//     this.logincount = logincount
//     this.islogin = islogin
//     this.getx = function(){
//         return x
//     }
//     return this
// }
// const u1 = new User("mohan",5,false)
// const u2 = new User("rama",50,true)
// console.log(u1);
// console.log(u2);
// console.log(u2.getx());

// console.log(u2.constructor);

// // in js functions can also be object

// function hello(x){
//     return 5*x
// }
// hello.power = 2
// console.log(hello(10));
// console.log(hello.power);
// console.log(hello.prototype);

// function createUser(username,score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }

// createUser.prototype.printme = function(){
//     console.log(`Score is ${this.score}`)    
// }

// const v1 = new createUser("Mohan",20)
// const v2 = new createUser("Ram",50)

// console.log(v1,v2);

// v1.increment()

// v1.printme()


// let names = ["rama","mohan","shyam","krishna"]
// let heros = {
//     n1: "keyboard",
//     n2: "mouse",
//     n3: "monitor",
//     model: "HP_15_PC",
//     getModel: function(){
//         console.log(`The model is ${this.model}`)        
//     }
// }

// Object.prototype.details = function(){
//     console.log("This object is all about PC")    
// }

// Array.prototype.check = function(){
//     console.log(`${this.length}`)    
// }

// heros.getModel()
// heros.details()
// names.check()

// console.log(names.length)

// // inheritance in objects

// const User = {
//     name: "sudhama",
//     email: "sudhama@mathura.com"
// }

// const Teacher = {
//     makevideo: true
// }

// const TeacherAssistant = {
//     available: false
// }

// const TeacherSupport = {
//     makeassignment: "JS Assignment",
//     fullTime: true,
//     __proto__: TeacherAssistant
// }

// Teacher.__proto__ = User

// // modern syntax
// Object.setPrototypeOf(Teacher,TeacherAssistant)

// console.log(Teacher.available);

// for(let key in Teacher){
//     console.log(key)        
// }

// let mystr = "  hp_laptop   "
// console.log(mystr.length);
// console.log(mystr.trim().length); 
// // making own custom
// String.prototype.actual_length = function(){
//     console.log(`The actual lenght is ${this.trim().length}`)    
// }

// mystr.actual_length()

// "abc ".actual_length()

// call in js

// function setUsername(username){
//     this.username = username
//     console.log("called")    
// }

// function createUser(username,email,password){
//     setUsername.call(this, username)
//     this.email = email
//     this.password = password
// }

// const hello = new createUser("mohan","mohan@gokul.com",1234)
// console.log(hello);


// Class

// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const data = new User("Gopal","gopal@gokul.com",123456)
// console.log(data);
// console.log(data.encryptPassword());
// console.log(data.changeusername());


// behind the scene
// function User(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = password
// }
// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeusername = function(){
//     return `${this.username.toUpperCase()}`
// }
// const dataa = new User("Rama","rama@ayodhya.com",123)
// console.log(dataa);
// console.log(dataa.encryptPassword());
// console.log(dataa.changeusername());


// class User{
//     constructor(username){
//         this.username = username
//     }
//     logme(){
//         console.log(`USERNAME = ${this.username}, loggedin successfully`)        
//     }
// }

// class Teacher extends User{
//     constructor(username, email, pass){
//         super(username)
//         this.email = email
//         this.pass = pass
//     }
//     addcourse(){
//         console.log(`New course added by ${this.username}`)        
//     }
// }

// const shiv = new Teacher("Shiva", "shiva@global.com",789)
// console.log(shiv);
// shiv.addcourse()
// shiv.logme()

// const shyam = new User("ShyamJi")
// console.log(shyam);
// shyam.logme()

// console.log(shyam instanceof User);


//
class User{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`USERNAME: ${this.username}`)        
    }
    static createID(){
        return `1234`
    }
}

const hello = new User("Krishna")
console.log(hello);
hello.logme()
//hello.createID()

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const phone = new Teacher("Ram","ram@rama.com")
console.log(phone);
phone.logme()
//console.log(phone.createID())

