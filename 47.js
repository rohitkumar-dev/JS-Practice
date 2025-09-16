// const myobj = {
//     username: "hello"
// }

// const desc = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(desc);

// // console.log(Math.PI);
// // Math.PI = 5
// // console.log(Math.PI);

// const pc = {
//     name: "laptop",
//     price: 50000,
//     available: true
// }
// console.log(pc);
// console.log(Object.getOwnPropertyDescriptor(pc, "price"));

// Object.defineProperty(pc, "price", {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(pc, "price"));

// pc.price = 50
// console.log(pc.price);

// for(let k in pc){
//     console.log(k)
// }


//shadow
// const Math = { ...globalThis.Math, PI: 100 };
// console.log(Math.PI); // 100

// const Math = {
//     PI: 100
// }
// console.log(Math.PI);
// it only change the local scope value


// getters/setters

// class User{
//     #pass;
//     constructor(email,pass){
//         this.email = email
//         this.#pass = pass
//     }
//     get pass(){
//         return `The password is: ${this.#pass}`
//     }
//     set pass(val){
//         this.#pass = val
//     }
// }

// const u1 = new User("shankar@universe.com",1234)
// u1.pass = 5555
// console.log(u1.pass);


// let my = {
//     name: "ram"
// }
// let my2 = Object.create(my)
// console.log(my2);



// const Phone = {
//     _email: "phone@mail.com",
//     _pass: "abc",
//     get pass(){
//         return this._pass.toUpperCase()
//     },
//     set pass(val){
//         this._pass = val
//     }
// }

// const apple = Object.create(Phone)
// console.log(apple);
// console.log(apple._pass);
// console.log(apple.pass);
// apple.pass = "xyz"
// console.log(Phone.pass); // why it gives ABC instead of XYZ
// console.log(apple.pass);
// console.log(Phone);








