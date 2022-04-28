const createCounter=count=>{
    return {
        [Symbol.iterator]() {
            let num=0
            return {
                next(){
                    if(num<count){
                        num+=1
                        return {value:num,done:false}
                    }else{
                        return {value:num,done:true}
                    }
                }
            }
        }
    }
}

const counter10=createCounter(10)
// for(const num of counter10){
//     console.log(num)
// }

console.log(String.prototype[Symbol.iterator])
console.log(Array.prototype[Symbol.iterator])
console.log(Map.prototype[Symbol.iterator])
console.log(Set.prototype[Symbol.iterator])

const map=new Map([[1,2],[2,3],[3,4]])
const iterator=map[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
