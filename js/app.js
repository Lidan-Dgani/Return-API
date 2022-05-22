var files = document.querySelectorAll(".request");

let promise1 = new Promise((resolve,reject)=> {
let span = document.createElement("span");
span.innerText = "הקובץ בבדיקה אנא המתן 🤞"
files[0].appendChild(span)
let time = Math.random(Math.random() * 4);
setTimeout(()=>{
    let num = Math.random()
    span.remove()
    num < 0.5 ? resolve("הקובץ עבר בהצלחה 🎉") : reject(" הקובץ נכשל ❌")
},time * 2000);
}); 


let promise2 = new Promise((resolve,reject)=> {
let span = document.createElement("span");
span.innerText = "הקובץ בבדיקה אנא המתן 🤞"
files[1].appendChild(span)
let time = Math.random(Math.random() * 4);
setTimeout(()=>{
    let num = Math.random()
    span.remove()
    num < 0.5 ? resolve(" הקובץ עבר בהצלחה 🎉") : reject(" הקובץ נכשל ❌")
},time * 3000);
}); 


let promise3 = new Promise((resolve,reject)=> {
let span = document.createElement("span");
span.innerText = "הקובץ בבדיקה אנא המתן 🤞"
files[2].appendChild(span)
let time = Math.random(Math.random() * 4);
setTimeout(()=>{
    let num = Math.random()
    span.remove()
    num < 0.5 ? resolve("הקובץ עבר בהצלחה 🎉") : reject("הקובץ נכשל ❌")
},time * 4000);
}); 

promise1.then(res => files[0].innerText += res).catch(res => files[0].innerText += res)
promise2.then(res =>files[1].innerText += res).catch(res => files[1].innerText += res)
promise3.then(res => files[2].innerText += res).catch(res => files[2].innerText += res)

