const promise1 = new Promise(function(resolve,reject){
    // do async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task complete")
        resolve()
    },1000)
})

promise1.then(function(){
    console.log("promise consumed")    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")    
})


const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 3 complete")     
        const data = {name: "RK", age: 20}
        resolve(data)   
    },1000)
})

promise3.then(function(data){
    console.log(data)    
})


const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = false
        if(!err){
            resolve({name: "RAMA", login: false})
        } else{
            reject("Something wrong!!!!")
        }       
    },1000)
})

promise4.then(function(user){
    console.log(user) 
    return user.name   
}).then(function(name){
    console.log(name)
}).catch(function(e){
    console.log(e)    
}).finally(function(){
    console.log("Promise 4 either resolved or rejected")    
})


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = true
        if(!err){
            resolve({name: "Java", login: true})
        } else{
            reject("Error aye h")
        }       
    },1000)
})

async function consume5() {
    try{
        const res = await promise5
        console.log(res)
    } catch(e){
        console.log(e)        
    } 
}
consume5()

const URL = "https://jsonplaceholder.typicode.com/users"

async function getdata() {
    try {
        const res = await fetch(URL)
        const data = await res.json()
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}
//getdata()

fetch(URL).then(function(res){
    return res.json()
}).then(function(d){
    console.log(d)    
}).catch(function(e){
    console.log(e)    
})