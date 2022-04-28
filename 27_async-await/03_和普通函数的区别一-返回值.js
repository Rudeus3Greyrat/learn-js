async function foo1() {
  // 1.返回一个值
  return '1'
}

async function foo2(){
  // 2.返回thenable
  return {
    then: function(resolve, reject) {
      resolve("hahahah")
    }
  }
}

async function foo3(){
  // 3.返回Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hehehehe")
    }, 2000)
  })
}

// 异步函数的返回值一定是一个Promise
const promise1 = foo1()
console.log(promise1)//Promise { '1' }
promise1.then(res => {
  console.log("promise then function exec:", res)//promise then function exec: 1
})

const promise2 = foo2()
console.log(promise2)//Promise { <pending> }
promise2.then(res => {
  console.log("promise then function exec:", res)//promise then function exec: hahahah
})

const promise3 = foo3()
console.log(promise3)//Promise { <pending> }
promise3.then(res => {
  console.log("promise then function exec:", res)//promise then function exec: hehehehe
})
