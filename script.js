window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
promises[0] = new Promise((resolve, reject)=> setTimeout(()=>resolve("Promise 1 Resolved"),4000))
promises[1] = new Promise((resolve, reject)=> setTimeout(()=>resolve("Promise 2 Resolved"),5000))
promises[2] = new Promise((resolve, reject)=> setTimeout(()=>resolve("Promise 3 Resolved"),1000))
promises[3] = new Promise((resolve, reject)=> setTimeout(()=>resolve("Promise 4 Resolved"),3000))
promises[4] = new Promise((resolve, reject)=> setTimeout(()=>resolve("Promise 5 Resolved"),2000))

Promise.any(promises)
.then((res)=>{
	document.getElementById("output").textContent = res
})
.catch((err)=>{
	document.getElementById("output").textContent = err
})