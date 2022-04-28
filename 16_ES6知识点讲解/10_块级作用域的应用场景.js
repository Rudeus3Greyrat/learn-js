const btns = document.getElementsByTagName('button')

// for (var i = 0; i < 4; i++) {
//     setTimeout(()=>console.log(i))
// } // 4,4,4,4

// for (let i = 0; i < 4; i++) {
//     setTimeout(()=>console.log(i))
// } // 0,1,2,3

for (var i = 0; i < 4; i++) {
    (function (i) {
        setTimeout(() => console.log(i))
    })(i)
} // 0,1,2,3

// for (var i = 0; i < btns.length; i++) {
//     (function (i) {
//         btns[i].onclick = function () {
//             console.log("第" + i + "个按钮被点击")
//         }
//     })(i)
// }

// console.log(i)

// for (let i = 0; i < btns.length; i++) {
//   btns[i].onclick = function() {
//     console.log("第" + i + "个按钮被点击")
//   }
// }

console.log(i)
